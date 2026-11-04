"""Optional browser validation. Requires Python playwright and Chromium.
Start npm start first. Run: python3 scripts/browser-smoke.py
Override BASE_URL or CHROMIUM_PATH when needed. No credentials required.
"""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
base = os.environ.get('BASE_URL', 'http://127.0.0.1:3000')
shots = Path('/tmp/sumanth-portfolio-checks')
shots.mkdir(exist_ok=True)
slugs = ['multi-mcp-enterprise-operations', 'aviation-rag-chatbot', 'ai-resume-parser', 'intelligent-email-automation']
errors = []
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=os.environ.get('CHROMIUM_PATH', '/usr/bin/chromium'), args=['--no-sandbox'])
    context = browser.new_context(viewport={'width':1440,'height':1000}, permissions=['clipboard-read','clipboard-write'])
    page = context.new_page()
    page.on('pageerror', lambda error: errors.append(str(error)))
    assert page.goto(base).status == 200
    page.get_by_role('heading',level=1).wait_for()
    assert 'Engineering' in page.get_by_role('heading',level=1).inner_text()
    assert page.locator('main').count() == 1
    for section in ['about','expertise','experience','projects','certifications','contact']:
        assert page.locator('#'+section).count() == 1
    page.screenshot(path=str(shots/'desktop-home.png'),full_page=True)
    page.get_by_role('button',name='Retrieval pipeline').click()
    page.get_by_role('button',name='Index Embeddings / FAISS', exact=False).click()
    assert 'text-embedding-3-small' in page.locator('.node-detail').inner_text()
    page.get_by_role('button',name='Enterprise operations').click()
    page.get_by_role('button',name='Connect MCP registry', exact=False).click()
    assert 'JSON-RPC' in page.locator('.node-detail').inner_text()
    page.get_by_role('button',name='Copy email address',exact=True).click()
    expect(page.get_by_role('status')).to_have_text('Email copied')
    assert page.evaluate('navigator.clipboard.readText()') == 'sumanthnm28@gmail.com'
    with page.expect_download() as download:
        page.get_by_role('link',name='Download resume').first.click()
    assert download.value.suggested_filename == 'sumanth-nm-resume.pdf'
    response = context.request.get(base+'/sumanth-nm-resume.pdf')
    assert response.status == 200 and response.body().startswith(b'%PDF')
    assert context.request.get(base+'/opengraph-image').status == 200
    assert context.request.get(base+'/icon.svg').status == 200
    assert context.request.get(base+'/robots.txt').status == 200
    for width in [1440,1024,768,390,320]:
        page.set_viewport_size({'width':width,'height':900})
        page.goto(base)
        page.wait_for_timeout(150)
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), f'Home overflow at {width}'
        if width <= 760:
            toggle = page.get_by_role('button', name='Open navigation')
            toggle.click()
            expect(page.get_by_role('button',name='Close navigation')).to_have_attribute('aria-expanded','true')
            page.get_by_role('navigation',name='Main navigation').get_by_role('link',name='Projects',exact=True).click()
            expect(page.get_by_role('button',name='Open navigation')).to_have_attribute('aria-expanded','false')
        for slug in slugs:
            assert page.goto(base+'/projects/'+slug).status == 200
            assert page.get_by_role('heading',level=1).inner_text()
            assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), f'{slug} overflow at {width}'
        print(f'PASS home + 4 case studies at {width}px')
    page.set_viewport_size({'width':390,'height':844})
    page.goto(base)
    page.screenshot(path=str(shots/'mobile-home.png'),full_page=True)
    assert page.goto(base+'/missing-page').status == 404
    assert 'missing connection' in page.get_by_role('heading',level=1).inner_text().lower()
    page.get_by_role('link',name='Back to home').click()
    expect(page).to_have_url(base+'/')
    reduced = browser.new_context(reduced_motion='reduce')
    reduced_page = reduced.new_page()
    reduced_page.goto(base)
    assert reduced_page.evaluate("getComputedStyle(document.documentElement).scrollBehavior") == 'auto'
    assert not errors, errors
    print('PASS diagrams, mobile navigation, clipboard, PDF download, SEO assets, custom 404, reduced motion; no browser errors')
    browser.close()

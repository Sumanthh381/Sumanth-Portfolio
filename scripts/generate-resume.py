"""Generate the concise portfolio resume from owner-supplied facts.
Optional maintenance tool: python3 -m pip install reportlab
Run from the repository root: python3 scripts/generate-resume.py
This is a portfolio-generated resume, not an original document supplied by the owner.
"""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.pagesizes import A4

output = Path(__file__).resolve().parents[1] / 'public' / 'sumanth-nm-resume.pdf'
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='Name',fontName='Helvetica-Bold',fontSize=25,leading=29,textColor=colors.HexColor('#102540')))
styles.add(ParagraphStyle(name='Role',fontSize=12,leading=18,textColor=colors.HexColor('#275cac'),spaceAfter=8))
styles.add(ParagraphStyle(name='SectionLabel',fontName='Helvetica-Bold',fontSize=10,leading=15,spaceBefore=12,spaceAfter=5,textColor=colors.HexColor('#275cac')))
styles.add(ParagraphStyle(name='Copy',fontSize=9,leading=13,spaceAfter=5,alignment=TA_LEFT))
styles.add(ParagraphStyle(name='Job',fontName='Helvetica-Bold',fontSize=9,leading=13,spaceBefore=5,spaceAfter=3))
story=[]
def p(text, style='Copy'): story.append(Paragraph(text,styles[style]))
p('Sumanth N M','Name'); p('AI Engineer | India','Role')
p('<link href="mailto:sumanthnm28@gmail.com">sumanthnm28@gmail.com</link> | <link href="https://github.com/Sumanthh381">github.com/Sumanthh381</link>')
p('PROFILE','SectionLabel')
p('AI Engineer focused on practical AI applications, intelligent automation and LLM-powered solutions. Combines AI engineering, backend development, retrieval systems and enterprise integrations to solve real-world problems.')
p('ENGINEERING CAPABILITIES','SectionLabel')
p('Generative AI, LLMs, NLP, prompt engineering, RAG, FAISS, BM25, ChromaDB, MCP integrations, tool calling, Python, FastAPI, Flask, REST APIs, SQL, MySQL, n8n, Google OAuth, Docker, Git and GitHub Actions.')
p('EXPERIENCE','SectionLabel')
p('UNIPREP | AI Engineer | Remote | March - July 2026','Job')
p('CV parsing and information extraction; Python automation; email workflows; API integration; data processing and web scraping.')
p('EON Elevators Pvt. Ltd. | Executive Product Design','Job')
p('Elevator electrical and product design; AutoCAD; exploration of AI-assisted CAD automation and predictive maintenance concepts using Python, Pandas and NumPy; customer and vendor coordination. Best Performer of the Month: August 2025.')
p('AQMENZ | Machine Learning Applications Intern | October - November 2023','Job')
p('Data preprocessing and exploratory analysis with Python, Pandas, NumPy, Matplotlib and Seaborn; Tkinter application development.')
p('SELECTED PROJECTS','SectionLabel')
p('Multi-MCP Enterprise Operations','Job')
p('Two independent MCP servers, schema-aware orchestration, document retrieval and confirmed local mock tickets. Repository reports: 51 tests passed, 97.75% line coverage and 62 Postman requests passed. Synthetic demonstration data; deterministic planning and extractive generation.')
p('Aviation RAG Chatbot','Job')
p('Document intelligence and retrieval. Public prototype: PDF/OCR/audio extraction, OpenAI embeddings, FAISS and context-grounded generation. Owner-reported aviation extension: 6 PDFs, 10,767 chunks and a 50-question evaluation set; results not independently verified.')
p('AI Resume Parser &amp; Job Matching / Intelligent Email Automation','Job')
p('Owner-described projects: NLP and LLM-assisted extraction with Python, Flask, Hugging Face and Ollama; email processing and communication using Python, Google APIs and OAuth 2.0.')
p('EDUCATION','SectionLabel')
p('B.E. Electrical and Electronics Engineering | Sapthagiri College of Engineering<br/>2021 - 2025 | CGPA: 8.20')
p('CERTIFICATIONS','SectionLabel')
p('IIT Guwahati: Professional Certificate Program in Generative AI and Machine Learning; IBM: Deep Learning with TensorFlow; IBM: Python 101 for Data Science; Tata Technologies: GenAI Powered Data Analytics Job Simulation.')
SimpleDocTemplate(str(output),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=35,title='Sumanth N M | AI Engineer',author='Sumanth N M').build(story)
print(output)

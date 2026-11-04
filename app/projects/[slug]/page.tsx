import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  GitFork,
} from "lucide-react";
import { projects } from "@/lib/content";
import { Architecture } from "@/components/architecture";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: project?.title || "Project not found",
    description: project?.summary,
    openGraph: {
      title: `${project?.title} | Sumanth N M`,
      description: project?.summary,
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main-content" className="case-page container">
      <Link className="back-link" href="/#projects">
        <ArrowLeft size={16} /> Selected engineering
      </Link>
      <header className="case-header">
        <div className="eyebrow">
          PROJECT {project.number} / {project.category}
        </div>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.repository && (
          <a
            className="button secondary"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitFork size={17} /> View repository <ArrowUpRight size={16} />
          </a>
        )}
      </header>
      <div className="case-layout">
        <aside className="case-toc">
          <span className="mono">INSIDE THE SYSTEM</span>
          <nav aria-label="Case study contents">
            {[
              "Overview",
              "Architecture",
              "Implementation",
              "Decisions",
              "Evaluation",
              "Challenges",
            ].map((item, i) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                <span>0{i + 1}</span>
                {item}
              </a>
            ))}
          </nav>
        </aside>
        <div className="case-content">
          <section id="overview" className="case-section">
            <span className="section-kicker">01 / OVERVIEW</span>
            <h2>The problem behind the project.</h2>
            <p>{project.problem}</p>
            <h3>Engineering objective</h3>
            <p>{project.objective}</p>
          </section>
          <section id="architecture" className="case-section">
            <span className="section-kicker">02 / SYSTEM ARCHITECTURE</span>
            <h2>From input to outcome.</h2>
            <p>
              Select a stage to understand its role and the boundaries of this
              implementation.
            </p>
            <Architecture kind={project.architecture} />
          </section>
          <section id="implementation" className="case-section">
            <span className="section-kicker">03 / IMPLEMENTATION</span>
            <h2>Inside the engineering.</h2>
            {project.implementation.map((item, i) => (
              <article className="case-detail" key={item.title}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </section>
          <section id="decisions" className="case-section">
            <span className="section-kicker">04 / ENGINEERING DECISIONS</span>
            <h2>The choices that shape the system.</h2>
            {project.decisions.map((item) => (
              <article className="decision" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </section>
          <section id="evaluation" className="case-section">
            <span className="section-kicker">05 / TESTING & EVALUATION</span>
            <h2>Evidence, with its boundaries.</h2>
            <ul className="evaluation-list">
              {project.evaluation.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="evidence-note">
              <span className="mono">SOURCE & SCOPE</span>
              <p>{project.evidence}</p>
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inspect source evidence <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </section>
          <section id="challenges" className="case-section">
            <span className="section-kicker">06 / CHALLENGES & APPROACH</span>
            <h2>Where engineering judgment matters.</h2>
            {project.challenges.map((item) => (
              <article className="decision" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>
          <small className="mono">NEXT CASE STUDY / {next.number}</small>
          <strong>{next.title}</strong>
        </span>
        <ArrowRight size={28} />
      </Link>
    </main>
  );
}

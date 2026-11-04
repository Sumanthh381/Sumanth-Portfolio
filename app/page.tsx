import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Braces,
  Check,
  Code2,
  Cpu,
  Download,
  GitFork,
  Layers,
  Mail,
  MapPin,
  Network,
} from "lucide-react";
import {
  profile,
  capabilities,
  certifications,
  experience,
  projects,
} from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { ProjectSculpture } from "@/components/project-sculpture";
import { HeroSystem } from "@/components/hero-system";
import { ArchitectureShowcase } from "@/components/architecture";
import { CopyEmail } from "@/components/contact-actions";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> AI ENGINEER / GENERATIVE AI /
            SYSTEMS ENGINEERING
          </div>
          <h1 id="hero-heading">
            Engineering
            <br />
            <em>Intelligence.</em>
            <br />
            <span>Building What’s Next.</span>
          </h1>
          <p className="hero-description">
            Building intelligent applications through Generative AI, retrieval
            systems, agentic workflows and backend engineering.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="button secondary" href={profile.resume} download>
              Download resume <Download size={16} />
            </a>
          </div>
          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <GitFork size={16} /> GitHub <ArrowUpRight size={12} />
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin}>
                LinkedIn <ArrowUpRight size={12} />
              </a>
            )}
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> Email <ArrowUpRight size={12} />
            </a>
            <span>
              <MapPin size={14} /> India
            </span>
          </div>
        </div>
        <HeroSystem />
        <div className="hero-foot">
          <span>INTELLIGENCE, WITH ENGINEERING DISCIPLINE.</span>
          <a href="#about">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </div>
      </section>

      <div className="metrics-wrap">
        <div className="container metrics">
          <div>
            <span className="metric">
              51<span>/ tests</span>
            </span>
            <strong>Automated tests passed</strong>
            <span>Multi-MCP · recorded test suite</span>
          </div>
          <div>
            <span className="metric">
              97.75<span>%</span>
            </span>
            <strong>Line coverage</strong>
            <span>Multi-MCP · 651 / 666 lines</span>
          </div>
          <div>
            <span className="metric">
              62<span>/ requests</span>
            </span>
            <strong>Postman requests passed</strong>
            <span>Multi-MCP · 3 collections</span>
          </div>
          <div>
            <span className="metric">10,767</span>
            <strong>Processed document chunks</strong>
            <span>Aviation RAG · owner-reported</span>
          </div>
        </div>
        <p className="metrics-note container">
          Project validation, not production metrics.{" "}
          <Link href="/projects/multi-mcp-enterprise-operations">
            View evidence <ArrowUpRight size={12} />
          </Link>
        </p>
      </div>

      <section id="about" className="section container">
        <SectionHeading
          number="01"
          label="THE ENGINEER"
          title="Intelligence is the starting point. Engineering makes it useful."
        />
        <Reveal className="about-grid">
          <div className="about-copy">
            <p className="lead">{profile.introduction}</p>
            <p>
              My foundation in Electrical and Electronics Engineering shapes how
              I approach software: understand the system, respect its
              constraints, and make the result useful. I’m drawn to the space
              where intelligent models meet practical engineering.
            </p>
            <p>
              From retrieval pipelines to API integrations, my focus is on
              connecting ideas into working systems—with a commitment to
              problem-solving, automation and continuous learning.
            </p>
            <div className="text-signature">
              Sumanth N M <span>/ AI Engineer</span>
            </div>
          </div>
          <aside className="education-card">
            <span className="mono">FOUNDATION / EDUCATION</span>
            <div className="education-icon">
              <Cpu size={32} strokeWidth={1} />
            </div>
            <h3>
              B.E. Electrical &amp;
              <br />
              Electronics Engineering
            </h3>
            <p>Sapthagiri College of Engineering</p>
            <div className="education-meta">
              <span>2021 — 2025</span>
              <span>
                CGPA <strong>8.20</strong>
              </span>
            </div>
          </aside>
        </Reveal>
      </section>

      <section id="expertise" className="section section-tinted">
        <div className="container">
          <SectionHeading
            number="02"
            label="ENGINEERING EXPERTISE"
            title="Across the intelligent system stack."
            description="Capabilities that connect models, knowledge, tools and the infrastructure underneath."
          />
          <div className="expertise-grid">
            {capabilities.map((capability, i) => {
              const Icon = [Cpu, Layers, Network, Code2, Braces][i];
              return (
                <Reveal className="capability" key={capability.title}>
                  <div className="capability-top">
                    <Icon size={23} strokeWidth={1.4} />
                    <span className="mono">0{i + 1}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="tags">
                    {capability.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="section container">
        <SectionHeading
          number="03"
          label="SELECTED ENGINEERING"
          title="Systems built. Decisions explained."
          description="A closer look at the problem, the architecture and the engineering behind the work."
        />
        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal
              key={project.slug}
              className={`project-card ${i === 0 ? "flagship" : ""}`}
            >
              <ProjectSculpture index={i} />
              <div className="project-content">
                <div className="project-meta">
                  <span>
                    {project.number} / {project.category}
                  </span>
                  {i === 0 && (
                    <span className="flagship-label">
                      <span className="status-dot" /> FLAGSHIP
                    </span>
                  )}
                </div>
                <h3>
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                    <ArrowUpRight size={23} />
                  </Link>
                </h3>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <Link
                  className="case-study-link"
                  href={`/projects/${project.slug}`}
                >
                  Explore case study <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <a
          className="all-repositories"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitFork size={17} /> More on GitHub <ArrowUpRight size={15} />
        </a>
      </section>

      <section id="architecture" className="section section-tinted">
        <div className="container">
          <SectionHeading
            number="04"
            label="SYSTEMS THINKING"
            title="Follow the flow of intelligence."
            description="Explore the boundaries between requests, tools, knowledge and answers. Select a stage to inspect its role."
          />
          <ArchitectureShowcase />
        </div>
      </section>

      <section id="experience" className="section container">
        <SectionHeading
          number="05"
          label="EXPERIENCE"
          title="An engineering perspective, built through practice."
        />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal className="timeline-item" key={job.company}>
              <div className="timeline-date">
                <span className="timeline-dot" />
                <span>{job.date || "Product design"}</span>
                {job.location && <small>{job.location}</small>}
              </div>
              <div className="timeline-body">
                <span className="mono">
                  0{i + 1} / {job.company}
                </span>
                <h3>{job.role}</h3>
                <ul>
                  {job.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {job.recognition && (
                  <p className="recognition">
                    <Award size={16} />
                    {job.recognition}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="certifications" className="section section-tinted">
        <div className="container">
          <SectionHeading
            number="06"
            label="CONTINUOUS LEARNING"
            title="A foundation that keeps expanding."
            description="Learning across generative AI, machine learning and applied data science."
          />
          <div className="credentials-grid">
            {certifications.map((credential, i) => (
              <article
                className={`credential ${credential.image ? "credential-featured" : ""}`}
                key={credential.name}
              >
                {credential.image && (
                  <a
                    className="certificate-preview"
                    href={credential.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open IIT Guwahati certificate PDF"
                  >
                    <Image
                      src={credential.image}
                      alt="Sumanth N M’s certificate of completion from Electronics & ICT Academy, IIT Guwahati"
                      width={1400}
                      height={990}
                      sizes="(max-width: 760px) 90vw, 55vw"
                    />
                  </a>
                )}
                <div>
                  <span className="credential-icon">
                    <Award size={20} />
                  </span>
                  <span className="mono">CREDENTIAL / 0{i + 1}</span>
                </div>
                <span className="credential-issuer">{credential.issuer}</span>
                <h3>{credential.name}</h3>
                <p>{credential.note}</p>
                {credential.href && (
                  <div className="credential-actions">
                    <a
                      href={credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View certificate <ArrowUpRight size={14} />
                    </a>
                    <a href={credential.href} download>
                      Download PDF <Download size={14} />
                    </a>
                  </div>
                )}
                {credential.id && (
                  <span className="credential-id">{credential.id}</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section container">
        <div className="eyebrow">
          <span className="status-dot" /> START A CONVERSATION
        </div>
        <h2>
          Let’s build something
          <br />
          <span>intelligent.</span>
        </h2>
        <p>
          Interested in AI engineering, Generative AI, intelligent systems or
          automation? I’d be glad to connect and explore opportunities.
        </p>
        <div className="contact-email">
          <a href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight />
          </a>
          <CopyEmail />
        </div>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <GitFork size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
          {profile.linkedin && (
            <a href={profile.linkedin}>
              LinkedIn <ArrowUpRight size={14} />
            </a>
          )}
          <a href={profile.resume} download>
            <Download size={16} /> Download resume
          </a>
          <span>
            <Check size={14} /> Based in India
          </span>
        </div>
      </section>
    </main>
  );
}

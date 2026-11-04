export const profile = {
  name: "Sumanth N M",
  role: "AI Engineer",
  location: "India",
  email: "sumanthnm28@gmail.com",
  github: "https://github.com/Sumanthh381",
  linkedin: null as string | null,
  resume: "/sumanth-nm-resume.pdf",
  introduction:
    "I am an AI Engineer focused on building practical AI applications, intelligent automation systems and LLM-powered solutions. My work combines AI engineering, backend development, retrieval systems and enterprise integrations to solve real-world problems.",
};
export const navigation = [
  "About",
  "Expertise",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
];
export const capabilities = [
  {
    title: "AI engineering",
    description: "From model capabilities to useful applications.",
    items: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "NLP",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    title: "Retrieval engineering",
    description: "The right context, at the right boundary.",
    items: [
      "RAG",
      "FAISS",
      "BM25",
      "ChromaDB",
      "Document Processing",
      "Hybrid Retrieval",
    ],
  },
  {
    title: "Agentic systems",
    description: "Connecting intelligence to tools and workflows.",
    items: [
      "Model Context Protocol",
      "MCP Client & Server Integration",
      "Tool Calling",
      "AI Orchestration",
      "Intelligent Workflows",
    ],
  },
  {
    title: "Backend engineering",
    description: "Practical foundations for intelligent products.",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "SQL", "MySQL"],
  },
  {
    title: "Automation & infrastructure",
    description: "Making repeatable work reliable.",
    items: [
      "n8n",
      "Google OAuth",
      "Docker",
      "Git",
      "GitHub Actions",
      "Web Scraping",
    ],
  },
];
export const experience = [
  {
    company: "UNIPREP",
    role: "AI Engineer",
    date: "Mar — Jul 2026",
    location: "Remote",
    items: [
      "CV parsing and structured information extraction.",
      "Python workflows, email automation and API integration.",
      "Data processing and web scraping.",
    ],
  },
  {
    company: "EON Elevators Pvt. Ltd.",
    role: "Executive Product Design",
    date: null,
    location: null,
    items: [
      "Elevator electrical and product design with AutoCAD.",
      "Exploration of AI-assisted CAD automation and predictive maintenance concepts using Python, Pandas and NumPy.",
      "Customer and vendor coordination.",
    ],
    recognition: "Best Performer of the Month · August 2025",
  },
  {
    company: "AQMENZ",
    role: "Machine Learning Applications Intern",
    date: "Oct — Nov 2023",
    location: null,
    items: [
      "Data preprocessing, exploratory data analysis and Python development.",
      "Analysis with Pandas, NumPy, Matplotlib and Seaborn.",
      "Tkinter application development.",
    ],
  },
];
export const certifications = [
  {
    issuer: "IIT Guwahati",
    name: "Professional Certificate Program in Generative AI and Machine Learning",
  },
  { issuer: "IBM", name: "Deep Learning with TensorFlow" },
  { issuer: "IBM", name: "Python 101 for Data Science" },
  {
    issuer: "Tata Technologies",
    name: "GenAI Powered Data Analytics Job Simulation",
  },
  {
    issuer: "AI certification",
    name: "Medtronic-required AI certification",
    note: "Credential title and issuer to be added.",
  },
];
export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  repository: string | null;
  problem: string;
  objective: string;
  implementation: { title: string; text: string }[];
  decisions: { title: string; text: string }[];
  evaluation: string[];
  challenges: { title: string; text: string }[];
  evidence: string;
  source?: string;
  architecture: "mcp" | "rag" | "resume" | "email";
};
export const projects: Project[] = [
  {
    slug: "multi-mcp-enterprise-operations",
    number: "01",
    title: "Multi-MCP Enterprise Operations",
    category: "FLAGSHIP / MCP + RETRIEVAL",
    summary:
      "An operations copilot that connects alarm intelligence, maintenance history and document evidence through two independent MCP servers.",
    stack: ["Python", "FastAPI", "MCP", "SQLite", "TF-IDF", "Docker"],
    repository:
      "https://github.com/Sumanthh381/Multi-MCP-Enterprise-Operations",
    problem:
      "Investigating an equipment alarm means joining multiple kinds of evidence: asset data, alarm analytics, maintenance records and operating procedures. Disconnected sources make it difficult to explain how an escalation was reached.",
    objective:
      "Build a traceable, self-contained operations investigation workflow that combines real MCP tool invocation with retrieval and separates a proposed action from an approved write.",
    implementation: [
      {
        title: "Two independent tool domains",
        text: "The official Python MCP SDK connects the backend to two stdio JSON-RPC processes. Alarm Management exposes 14 tools backed by an authenticated FastAPI simulator; Work Orders exposes three tools for SQLite maintenance history, drafts and local mock tickets.",
      },
      {
        title: "Schema-aware orchestration",
        text: "An explicit intent planner resolves asset IDs, discovers tool schemas, validates inputs and outputs, and chains analytics with maintenance reads. A common trace records tool inputs, outputs, timing and errors. The implementation uses deterministic planning and extractive composition, not a remote LLM.",
      },
      {
        title: "Grounded retrieval",
        text: "Three synthetic Markdown documents yield eight paragraph-aware chunks. Sparse TF-IDF unigram/bigram vectors are combined with lexical coverage and asset filters. Returned passages include revision, paragraph, chunk ID, hash and relevance score.",
      },
      {
        title: "Human confirmation at the write boundary",
        text: "Preparing an escalation creates a draft. A separate confirmation checks conversation ownership before creating an idempotent local mock ticket. The application does not create GitHub issues or control equipment.",
      },
    ],
    decisions: [
      {
        title: "Local and inspectable",
        text: "Stdio MCP, SQLite and a JSON retrieval index keep the demo reproducible without enterprise credentials, an external vector database or a paid LLM.",
      },
      {
        title: "Evidence before recommendations",
        text: "An extractive composer cites retrieved procedures and labels possible causes as hypotheses. Document content cannot authorize tool execution.",
      },
      {
        title: "Visible partial failure",
        text: "Optional maintenance failures preserve available alarm and document evidence. Required alarm-source failure stops the investigation with a safe error.",
      },
    ],
    evaluation: [
      "51 pytest tests passed, including real MCP subprocess, retrieval, integration and end-to-end coverage.",
      "651 of 666 executable lines covered: 97.75% line coverage; branch coverage was not measured.",
      "62 Postman requests passed across baseline, scenario and chaining collections.",
      "The repository defines GitHub Actions checks; live remote CI status has not been independently verified here.",
    ],
    challenges: [
      {
        title: "Connecting sources without coupling them",
        text: "The orchestrator depends on discovered MCP schemas rather than importing the source connector. Resolved IDs are passed between domains through typed tool calls.",
      },
      {
        title: "Preventing accidental writes",
        text: "Drafting and ticket creation are distinct operations. Confirmation, ownership validation and idempotence protect the local ticket workflow.",
      },
    ],
    evidence:
      "Repository evidence reviewed at commit 6a5fd84. Validation reports are dated 27 October 2026. All operations data is synthetic; these are project validation results, not commercial production metrics.",
    source:
      "https://github.com/Sumanthh381/Multi-MCP-Enterprise-Operations/blob/6a5fd845b4e1d16bb6dd3e583cd7befd20d23ee2/docs/evidence/coverage-summary.md",
    architecture: "mcp",
  },
  {
    slug: "aviation-rag-chatbot",
    number: "02",
    title: "Aviation RAG Chatbot",
    category: "DOCUMENT INTELLIGENCE / RAG",
    summary:
      "A domain-specific document intelligence project exploring retrieval, context assembly and grounded answers for aviation information.",
    stack: ["Python", "FAISS", "OpenAI", "PDF Processing", "RAG"],
    repository: "https://github.com/Sumanthh381/multimodal-rag",
    problem:
      "Technical documents contain useful answers that are difficult to find with a conversational query. A grounded assistant must retrieve relevant passages before generating an answer.",
    objective:
      "Develop a document-to-answer pipeline, with an aviation-focused extension described by the owner: six PDFs, 10,767 document chunks and a 50-question evaluation set.",
    implementation: [
      {
        title: "Verified public baseline",
        text: "The linked repository contains a multimodal Python prototype. Its PDF loader uses PdfReader, image extraction uses Tesseract OCR and audio is transcribed with an OpenAI model. Each modality becomes text before indexing.",
      },
      {
        title: "Chunking and vector indexing",
        text: "The inspected code uses 400-word chunks with a 100-word overlap. OpenAI text-embedding-3-small produces float32 vectors stored in a FAISS IndexFlatL2 index.",
      },
      {
        title: "Context-grounded generation",
        text: "The query is embedded and the top three passages are assembled into a prompt for gpt-4o-mini. The prompt instructs the model to answer only from the context and say when information is unavailable; this instruction alone does not guarantee groundedness.",
      },
      {
        title: "Aviation extension",
        text: "The owner’s brief describes BM25 hybrid retrieval, a FastAPI service and an evaluation framework. These are not present in the inspected public source and are presented as owner-reported extension details, not verified implementation.",
      },
    ],
    decisions: [
      {
        title: "One text boundary",
        text: "Converting documents, images and audio into text allows a shared chunking, embedding and retrieval path in the public prototype.",
      },
      {
        title: "Separate source evidence from reported scope",
        text: "The interactive diagram shows the verified FAISS baseline. Aviation corpus figures and hybrid-search extensions are labeled separately until supporting code and reports are available.",
      },
    ],
    evaluation: [
      "Owner-reported aviation scope: six PDFs, 10,767 chunks and 50 evaluation questions.",
      "No aviation evaluation report or accuracy measurement was available in the linked public repository.",
      "The public prototype was inspected, not executed; it requires external model credentials and local input files.",
    ],
    challenges: [
      {
        title: "Retrieving precise context",
        text: "Overlapping chunks preserve context across boundaries. The public prototype retrieves three vector neighbors; the owner describes a BM25 hybrid extension to complement semantic retrieval.",
      },
      {
        title: "Measuring answer quality",
        text: "An evaluation set can test relevance and groundedness, but question count alone is not evidence of accuracy. No unsupported quality score is claimed.",
      },
    ],
    evidence:
      "Public baseline reviewed at commit 515e2b8, in Day1/rag.py/code.py. Aviation-specific corpus counts, BM25, FastAPI and evaluation details are owner-reported and await matching public evidence.",
    source:
      "https://github.com/Sumanthh381/multimodal-rag/blob/515e2b80f40c8467bc41e2a710b56e7fc37969c4/Day1/rag.py/code.py",
    architecture: "rag",
  },
  {
    slug: "ai-resume-parser",
    number: "03",
    title: "AI Resume Parser & Job Matching",
    category: "NLP / STRUCTURED EXTRACTION",
    summary:
      "AI-assisted recruitment workflows for extracting resume information and comparing candidates with job requirements.",
    stack: ["Python", "Flask", "Hugging Face", "Ollama", "NLP"],
    repository: null,
    problem:
      "Resumes express comparable information in inconsistent formats. Recruiters need structured candidate details and a clear connection between a candidate profile and a job description.",
    objective:
      "Extract structured resume information and support candidate matching through NLP and LLM-assisted analysis.",
    implementation: [
      {
        title: "Information extraction",
        text: "The owner describes resume parsing, NLP entity extraction and LLM-based structured information extraction using Python, Hugging Face and Ollama.",
      },
      {
        title: "Matching and APIs",
        text: "The described workflow analyzes job descriptions and compares candidate information, exposed through Flask backend APIs. Exact endpoints, schemas and scoring rules await source verification.",
      },
    ],
    decisions: [
      {
        title: "Structured information first",
        text: "The project brief centers extraction before matching. Detailed model selection, ranking logic and deployment choices are not specified and are not inferred here.",
      },
    ],
    evaluation: [
      "Project scope and stack supplied by the owner.",
      "No public repository, test report, accuracy metric or production usage figures were supplied.",
    ],
    challenges: [
      {
        title: "Variability in resume formats",
        text: "The stated approach combines NLP and LLM extraction. Format support, validation behavior and comparative quality require source or evaluation evidence before making stronger claims.",
      },
    ],
    evidence:
      "Owner-supplied project description. The diagram is a conceptual workflow, not a verified deployment topology.",
    architecture: "resume",
  },
  {
    slug: "intelligent-email-automation",
    number: "04",
    title: "Intelligent Email Automation",
    category: "AUTOMATION / API INTEGRATION",
    summary:
      "Python-based email processing and communication workflows using Google APIs and OAuth 2.0.",
    stack: ["Python", "Google APIs", "OAuth 2.0", "Workflow Automation"],
    repository: null,
    problem:
      "Repeated email processing and recipient management can become manual, fragmented work. Automation needs a clear authentication boundary and an intentional communication workflow.",
    objective:
      "Automate email processing, recipient management and bulk communication using authorized Google API access.",
    implementation: [
      {
        title: "Authenticated workflows",
        text: "The owner’s brief specifies Google OAuth authentication and Google APIs with Python. Permission scopes, token storage and endpoint details await implementation evidence.",
      },
      {
        title: "Communication automation",
        text: "The project description includes email processing, recipient management, automated workflows and bulk communication. Delivery volumes, deployment details and reliability figures have not been supplied.",
      },
    ],
    decisions: [
      {
        title: "Use an explicit authorization boundary",
        text: "OAuth 2.0 is the stated authentication method. The conceptual diagram illustrates that boundary without asserting unverified internal services or scheduling infrastructure.",
      },
    ],
    evaluation: [
      "Project description and stack supplied by the owner.",
      "No public repository or automated test evidence was supplied; no delivery or production statistics are claimed.",
    ],
    challenges: [
      {
        title: "Making automation accountable",
        text: "Recipient validation, permission handling and API error recovery are important evaluation areas. Their exact implementation has not been independently reviewed.",
      },
    ],
    evidence:
      "Owner-supplied project description. Detailed implementation and validation evidence can be added when available.",
    architecture: "email",
  },
];

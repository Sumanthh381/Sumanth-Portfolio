"use client";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  Database,
  FileText,
  GitBranch,
  Layers,
  Network,
  ShieldCheck,
} from "lucide-react";

type Kind = "mcp" | "rag" | "resume" | "email";
const flows = {
  mcp: {
    label: "MULTI-MCP / VERIFIED IMPLEMENTATION",
    nodes: [
      [
        "Request",
        "Chat interface",
        "The browser sends same-origin JSON to the FastAPI /api/chat endpoint.",
      ],
      [
        "Plan",
        "Intent planner",
        "A bounded-vocabulary planner resolves the asset and selects an investigation path. No remote LLM is used.",
      ],
      [
        "Connect",
        "MCP registry",
        "Official MCP client discovers schemas and invokes two independent stdio JSON-RPC servers.",
      ],
      [
        "Gather",
        "Tools + retrieval",
        "Alarm MCP reads the synthetic API; Work Orders MCP reads SQLite. TF-IDF plus lexical retrieval supplies cited procedures.",
      ],
      [
        "Compose",
        "Evidence + draft",
        "Extractive composition joins observations with citations. Creating a mock ticket requires separate human confirmation.",
      ],
    ],
    caption:
      "Two real MCP servers. One traceable workflow. Synthetic source data and local mock tickets keep the demonstration self-contained.",
  },
  rag: {
    label: "RAG / VERIFIED PUBLIC BASELINE",
    nodes: [
      [
        "Ingest",
        "Documents",
        "PDFs, images and audio enter modality-specific loaders. The aviation corpus figures are owner-reported separately.",
      ],
      [
        "Extract",
        "Text + chunks",
        "PDF text, OCR and audio transcripts become text, split into 400-word chunks with 100-word overlap.",
      ],
      [
        "Index",
        "Embeddings / FAISS",
        "text-embedding-3-small produces vectors indexed with FAISS IndexFlatL2.",
      ],
      [
        "Retrieve",
        "Top 3 + context",
        "An embedded query retrieves three vector neighbors; their text is assembled into the prompt context.",
      ],
      [
        "Generate",
        "LLM → answer",
        "gpt-4o-mini is prompted to use only the retrieved context and acknowledge missing information.",
      ],
    ],
    caption:
      "Documents → extraction → chunking → embeddings / indexing → retrieval → context assembly → LLM → answer. BM25 and FastAPI belong to the owner-reported aviation extension, not the inspected baseline.",
  },
  resume: {
    label: "RESUME PARSER / CONCEPTUAL WORKFLOW",
    nodes: [
      [
        "Input",
        "Resume + job",
        "Resume information and job requirements form the inputs described in the owner’s brief.",
      ],
      [
        "Extract",
        "NLP + LLM",
        "NLP entity extraction and LLM-assisted structured information extraction.",
      ],
      [
        "Compare",
        "Candidate matching",
        "Analyze candidate information against the job description; exact ranking logic awaits verification.",
      ],
      [
        "Serve",
        "Flask APIs",
        "Backend APIs are described in the brief; detailed endpoint contracts were not supplied.",
      ],
    ],
    caption:
      "A conceptual representation of the owner-supplied project scope. No deployment topology or ranking accuracy is implied.",
  },
  email: {
    label: "EMAIL AUTOMATION / CONCEPTUAL WORKFLOW",
    nodes: [
      [
        "Authorize",
        "Google OAuth",
        "User-authorized Google API access using OAuth 2.0, as described by the owner.",
      ],
      [
        "Process",
        "Python workflows",
        "Email processing and recipient management form the stated automation scope.",
      ],
      [
        "Connect",
        "Google APIs",
        "Authorized API integration supports communication workflows. Exact scopes and API contracts await verification.",
      ],
      [
        "Act",
        "Communication",
        "Automated and bulk communication are described; no throughput or delivery guarantees are claimed.",
      ],
    ],
    caption:
      "Conceptual flow based on the project brief. Authentication, processing and communication boundaries are shown without invented infrastructure.",
  },
};
export function Architecture({
  kind = "mcp",
  compact = false,
}: {
  kind?: Kind;
  compact?: boolean;
}) {
  const [selected, setSelected] = useState(0);
  const flow = flows[kind];
  return (
    <div className={`architecture ${compact ? "compact" : ""}`}>
      <div className="diagram-toolbar">
        <span className="status-dot" />
        <span>{flow.label}</span>
        <Network size={15} />
      </div>
      <div className="flow" aria-label={`${kind} architecture stages`}>
        {flow.nodes.map((node, i) => (
          <div className="flow-unit" key={node[1]}>
            <button
              className={`flow-node ${selected === i ? "selected" : ""}`}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
            >
              <span className="node-index">
                0{i + 1} / {node[0]}
              </span>
              {i === 0 ? (
                <FileText size={21} />
              ) : i === 1 ? (
                <GitBranch size={21} />
              ) : i === 2 ? (
                <Database size={21} />
              ) : i === 3 ? (
                <Layers size={21} />
              ) : (
                <ShieldCheck size={21} />
              )}
              <strong>{node[1]}</strong>
            </button>
            {i < flow.nodes.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                <ArrowRight size={18} />
                <ArrowDown size={18} />
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="node-detail" aria-live="polite">
        <span className="mono">
          0{selected + 1} <ChevronRight size={13} />
        </span>
        <p>{flow.nodes[selected][2]}</p>
      </div>
      {!compact && <p className="diagram-caption">{flow.caption}</p>}
    </div>
  );
}
export function ArchitectureShowcase() {
  const [kind, setKind] = useState<"mcp" | "rag">("mcp");
  return (
    <>
      <div
        className="diagram-tabs"
        role="group"
        aria-label="Choose system architecture"
      >
        <button aria-pressed={kind === "mcp"} onClick={() => setKind("mcp")}>
          <Box size={16} /> Enterprise operations{" "}
          {kind === "mcp" && <Check size={14} />}
        </button>
        <button aria-pressed={kind === "rag"} onClick={() => setKind("rag")}>
          <Layers size={16} /> Retrieval pipeline{" "}
          {kind === "rag" && <Check size={14} />}
        </button>
      </div>
      <Architecture key={kind} kind={kind} />
    </>
  );
}

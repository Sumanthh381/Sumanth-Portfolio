import {
  ArrowDown,
  ArrowRight,
  Database,
  FileText,
  GitBranch,
  Network,
  ShieldCheck,
} from "lucide-react";
export function HeroSystem() {
  return (
    <div
      className="hero-system"
      aria-label="Conceptual AI engineering flow: inputs, orchestration, tools and retrieval, grounded output"
    >
      <div className="system-top">
        <span className="mono">SYSTEM / 001</span>
        <span>
          <i className="status-dot" /> ENGINEERING VIEW
        </span>
      </div>
      <div className="system-canvas">
        <div className="system-input">
          <span className="mini-label">INPUT LAYER</span>
          <div>
            <FileText size={17} /> Documents <span>/</span> APIs <span>/</span>{" "}
            Intent
          </div>
        </div>
        <div className="system-connector">
          <ArrowDown size={20} />
        </div>
        <div className="system-core">
          <div className="core-icon">
            <Network size={30} strokeWidth={1.2} />
          </div>
          <span>
            <small>INTELLIGENCE LAYER</small>
            <strong>Orchestration</strong>
            <em>Context · tools · reasoning</em>
          </span>
          <GitBranch size={21} />
        </div>
        <div className="system-split">
          <span />
          <span />
          <span />
        </div>
        <div className="system-branches">
          <div>
            <Network size={20} />
            <strong>Tool integration</strong>
            <small>MCP / APIs</small>
          </div>
          <div>
            <Database size={20} />
            <strong>Knowledge retrieval</strong>
            <small>INDEX / CONTEXT</small>
          </div>
        </div>
        <div className="system-connector">
          <ArrowDown size={20} />
        </div>
        <div className="system-output">
          <ShieldCheck size={18} />
          <span>Grounded output</span>
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="system-bottom">
        <span>DESIGNED FOR CLARITY</span>
        <span>01 — 04</span>
      </div>
    </div>
  );
}

import {
  Braces,
  Database,
  Fingerprint,
  Layers,
  Mail,
  Network,
} from "lucide-react";
const studies = [
  {
    name: "CONNECTED OPERATIONS",
    icon: Network,
    layers: ["SOURCE SYSTEMS", "MCP / RETRIEVAL", "ORCHESTRATION"],
  },
  {
    name: "DOCUMENT INTELLIGENCE",
    icon: Database,
    layers: ["DOCUMENT CORPUS", "VECTOR INDEX", "GROUNDED CONTEXT"],
  },
  {
    name: "STRUCTURED UNDERSTANDING",
    icon: Fingerprint,
    layers: ["UNSTRUCTURED INPUT", "ENTITY EXTRACTION", "CANDIDATE PROFILE"],
  },
  {
    name: "INTENT INTO ACTION",
    icon: Mail,
    layers: ["AUTHORIZATION", "WORKFLOW LOGIC", "COMMUNICATION"],
  },
];
export function ProjectSculpture({ index }: { index: number }) {
  const study = studies[index];
  const Icon = study.icon;
  return (
    <div className={`project-art study-${index}`} aria-hidden="true">
      <div className="art-grid" />
      <span className="study-number">0{index + 1}</span>
      <div className="isometric-stage">
        <div className="sculpture-shadow" />
        {study.layers.map((layer, i) => (
          <div className={`iso-plane plane-${i}`} key={layer}>
            <span className="plane-index">0{i + 1}</span>
            {i === 2 ? (
              <Icon size={42} strokeWidth={1} />
            ) : i === 1 ? (
              <Layers size={35} strokeWidth={0.8} />
            ) : (
              <Braces size={30} strokeWidth={0.8} />
            )}
            <span className="plane-label">{layer}</span>
            <span className="plane-dots">···</span>
          </div>
        ))}
      </div>
      <span className="art-caption">{study.name}</span>
      <span className="study-mark">SYSTEM STUDY / 0{index + 1}</span>
    </div>
  );
}

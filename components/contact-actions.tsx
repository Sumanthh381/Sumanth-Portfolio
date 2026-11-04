"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/lib/content";
export function CopyEmail() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("copied");
    } catch {
      setState("failed");
    }
  }
  return (
    <div className="copy-wrap">
      <button
        className="icon-button"
        onClick={copy}
        aria-label="Copy email address"
      >
        {state === "copied" ? <Check size={18} /> : <Copy size={18} />}
      </button>
      <span className="copy-status" role="status">
        {state === "copied"
          ? "Email copied"
          : state === "failed"
            ? "Select the email link to open your mail app."
            : ""}
      </span>
    </div>
  );
}

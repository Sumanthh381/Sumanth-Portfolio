import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";
export function Footer() {
  return (
    <footer className="site-footer container">
      <Link className="brand" href="/">
        <span className="brand-symbol">
          s<span>.</span>
        </span>
        <span>
          Sumanth N M<small>AI ENGINEER / INDIA</small>
        </span>
      </Link>
      <p>Thoughtfully engineered. Always evolving.</p>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        GitHub <ArrowUpRight size={14} />
      </a>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </footer>
  );
}

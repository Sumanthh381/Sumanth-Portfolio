import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found container">
      <span className="eyebrow">404 / ROUTE NOT FOUND</span>
      <h1>A missing connection.</h1>
      <p>This page isn’t part of the system. Let’s get you back to the work.</p>
      <div className="hero-actions">
        <Link className="button primary" href="/">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <Link className="button secondary" href="/#projects">
          Explore projects <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}

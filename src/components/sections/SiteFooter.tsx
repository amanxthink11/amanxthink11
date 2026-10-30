import { PROFILE } from "@/data/site-data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-3 py-8 font-mono text-xs text-ink-dim sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
        </p>
        <a href="#top" className="transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

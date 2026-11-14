import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-[1fr_auto] sm:px-8">
        <div>
          <p className="text-3xl font-light tracking-tight">{profile.name}</p>
          <p className="mt-2 text-sm text-muted">{profile.role}</p>
        </div>
        <div className="text-sm">
          <p className="text-lg font-light">Contact:</p>
          <ul className="mt-3 space-y-1.5 text-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-ink hover:underline">
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink hover:underline"
              >
                Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-faint sm:px-8">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

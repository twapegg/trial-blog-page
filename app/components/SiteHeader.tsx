import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/eck-logo.png"
            alt="EyeCare Kids logo"
            width={180}
            height={52}
          />
        </Link>
        <nav className="hidden items-center gap-8 text-base font-semibold text-[#4b4b4b] md:flex">
          <Link href="/" className="hover:text-[var(--primary)]">
            Home
          </Link>
          <span>About Us</span>
          <span>Children’s Vision</span>
          <span>Services</span>
          <Link href="/blog" className="hover:text-[var(--primary)]">
            Resources
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white p-2 text-[#4b4b4b] hover:border-[var(--primary)] hover:text-[var(--primary)] md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(159,208,103,0.35)] transition-colors hover:bg-white hover:text-[var(--primary)]"
          >
            Book an Eye Test
          </Link>
        </div>
      </div>
    </header>
  );
}

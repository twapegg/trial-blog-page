import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page-shell text-[var(--foreground)] font-sans">
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              EyeCare Kids
            </p>
            <h1 className="mt-4 text-3xl font-extrabold text-[#1f1f1f] sm:text-5xl">
              Kids-first eye health resources and community updates.
            </h1>
            <p className="mt-4 max-w-xl text-base text-[var(--muted)] sm:mt-5 sm:text-lg">
              This is a placeholder landing page for the blog experience. We’ll
              feature the latest articles, highlights, and care tips as new
              content comes in.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <Link
                href="/blog/photokeratitis"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--primary)] sm:w-auto"
              >
                Read the featured post
              </Link>
              <Link
                href="/blog"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[#4b4b4b] hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto"
              >
                Browse all posts
              </Link>
            </div>
          </div>

          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
            <h2 className="text-xl font-bold text-[#1f1f1f]">Featured</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-md border border-[var(--border)] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Guide
                </p>
                <p className="mt-2 text-lg font-semibold text-[#1f1f1f]">
                  UV Eye Protection for Kids: Everyday Habits That Matter
                </p>
                <Link
                  href="/blog/photokeratitis"
                  className="mt-3 inline-block text-sm font-semibold text-[var(--primary)]"
                >
                  Read now →
                </Link>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-white p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Coming soon
                </p>
                <p className="mt-2 text-lg font-semibold text-[#1f1f1f]">
                  Frame fitting checklist for active kids
                </p>
                <span className="mt-3 inline-block text-sm text-[var(--muted)]">
                  Drafting content
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

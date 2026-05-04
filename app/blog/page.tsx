import Link from "next/link";

const posts = [
  {
    title: "UV Eye Protection for Kids: Everyday Habits That Matter",
    excerpt:
      "Practical tips to reduce UV exposure and build healthy habits for children and families.",
    href: "/blog/photokeratitis",
    tag: "Guide",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="page-shell text-[var(--foreground)] font-sans">
      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#1f1f1f]">Blog</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {post.tag}
              </p>
              <h2 className="mt-3 text-xl font-bold text-[#1f1f1f]">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{post.excerpt}</p>
              <Link
                href={post.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--primary)]"
              >
                Read post →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

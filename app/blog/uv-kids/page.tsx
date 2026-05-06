"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sunburnParagraphs = [
  <>
    We all know how to lather on sunscreen and pop a hat on the kids before a
    day outside. But it’s just as important to think about their
    <strong> eyes</strong>—because <strong>the sun can hurt them too</strong>.
  </>,
  <>
    Sunlight contains invisible <strong>ultraviolet (UV) rays</strong> that can
    bother and even injure the surface of the eye. When UV exposure is intense,
    this can lead to a condition similar to sunburn—but on the eyes instead of
    the skin. This can feel like <strong>grittiness, watering, soreness</strong>{" "}
    or being overly sensitive to bright light.
  </>,
  <>
    Kids often spend a lot of time outdoors laughing, running around or playing
    sport. They might not speak up when their eyes feel uncomfortable, so it’s
    up to us as parents to make sure they’re
    <strong> properly shielded</strong> from harmful rays.
  </>,
  <>
    In Australia, <strong>UV exposure can be strong</strong> even when it’s not
    blazing hot or it’s cloudy, and light can reflect off things like water,
    sand and concrete. Little eyes are more vulnerable to
    <strong> cumulative UV exposure</strong> over time, which can increase the
    risk of issues later in life—from glare sensitivity to more serious
    conditions that develop slowly with repeated sun exposure.
  </>,
];

const categoryList = [
  {
    label: "Category 2",
    text: "offers good protection for everyday outdoor activities",
  },
  {
    label: "Category 3",
    text: "provides stronger protection and is ideal for bright conditions.",
  },
  {
    label: "Category 4",
    text: "offers very high protection but is not suitable for driving.",
  },
];

const eyewearExamples = [
  {
    title: "Category 2",
    summary: "Everyday outdoor wear with solid UV coverage.",
    image: "/assets/category-2.jpg",
  },
  {
    title: "Category 3",
    summary: "High UV protection for bright conditions.",
    image: "/assets/category-3.jpeg",
  },
  {
    title: "Category 4",
    summary: "Maximum protection (not for driving).",
    image: "/assets/category-4.jpg",

  },
];

export default function PhotokeratitisPost() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="page-shell text-foreground font-sans">
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <motion.section
          className="relative mt-6 overflow-hidden rounded-(--radius) shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:mt-8"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-21/9">
            <Image
              src="/assets/hero-uv-kids.svg"
              alt="Family wearing sunglasses outdoors"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              style={{ objectFit: "cover" }}
              id="hero"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/25 to-black/10" />
          </div>
          <div className="absolute bottom-4 left-4 max-w-2xl text-white sm:bottom-6 sm:left-8">
            <p className="text-[10px] uppercase tracking-[0.3em] sm:text-xs">
              Resources
            </p>
            <h1 className="mt-2 text-2xl font-extrabold leading-tight sm:mt-3 sm:text-4xl">
              UV EYE PROTECTION FOR KIDS: EVERYDAY HABITS THAT MATTER
            </h1>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">
          <motion.article
            className="bg-white"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.01 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="article-body">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-[#1f1f1f]">
                  The Sunburn Risk Many Australians Don’t Realise
                </h2>
                {sunburnParagraphs.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}

                <figure className="relative mt-6 overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-6">
                  <div className="absolute -top-6 right-4 text-7xl font-extrabold text-black/5">
                    “
                  </div>
                  <figcaption className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    Eyecare Kids optometrist Dr. Christine Do states
                  </figcaption>
                  <blockquote className="mt-3 border-l-4 border-[var(--primary)] pl-4 text-base italic text-[#1f1f1f]">
                    “You may not see the affects of sun damage straight away,
                    but <strong>cumulative UV exposure</strong> can cause
                    <strong> irreversible damage</strong> many years later
                    including cataracts, cancers, pyteriums and macula
                    degeneration.”
                  </blockquote>
                </figure>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h2 className="text-[#1f1f1f]">
                  Choosing sunglasses that actually protect
                </h2>
                <p>
                  <strong>Not all sunglasses protect eyes equally.</strong>
                  When you’re picking sunnies for the family, look for ones
                  labelled under the{" "}
                  <strong>Australian and New Zealand Standard</strong> with a{" "}
                  <strong>lens category rating of 2, 3 or 4</strong>. Sunglasses
                  in these categories meet the standard for{" "}
                  <strong>good UV protection</strong> and help block a high
                  level of harmful UV radiation.
                </p>
                <ul className="list-disc pl-5 text-[#2f2f2f]">
                  {categoryList.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Wraparound styles</strong> and well-fitting frames
                  help stop UV rays sneaking in around the edges, and pairing
                  sunglasses with a <strong>broad-brimmed hat</strong> gives
                  even better coverage.
                </p>
              </motion.div>

              <div className="mt-8">
                <div
                  className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  aria-label="Eyewear examples"
                >
                  {eyewearExamples.map((item) => (
                    <div
                      key={item.title}
                      className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_10px_22px_rgba(0,0,0,0.12)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={`${item.title} sunglasses example`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            style={{
                              objectFit: "cover",
                              objectPosition: item.objectPosition ?? "center",
                            }}
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 via-black/0 to-black/0" />
                      </div>
                      <div className="border-t border-[var(--border)] p-4">
                        <h4 className="text-base font-semibold text-[#1f1f1f]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h2 className="text-[#1f1f1f]">
                  Everyday habits build better eye health
                </h2>
                <p>
                  Protecting children’s eyes shouldn’t be something you only
                  think about on beach days or during summer holidays. Making
                  quality sunglasses part of <strong>everyday life</strong>—for
                  school drop-offs, sport, park visits and weekends outdoors—can
                  help protect their eyesight <strong>long term</strong>. If
                  you’re looking for sunglasses that meet these standards,
                  Eyecare Kids has a wide range of options for both children and
                  adults. We also have a special interest in
                  <strong> customising sunglasses</strong> to suit individual
                  prescriptions, so your family can enjoy clear vision and
                  <strong> reliable UV protection</strong> every day.
                </p>
              </motion.div>
            </div>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#hero"
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(123,177,58,0.35)] transition-colors hover:bg-white hover:text-[var(--primary)] sm:w-auto"
              >
                Download PDF
              </Link>
              <button className="inline-flex w-full items-center justify-center rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[#4b4b4b] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] sm:w-auto">
                Share article
              </button>
            </div>

            <div className="mt-12 border-t border-[var(--border)] pt-8">
              <h3 className="text-xl font-bold text-[#1f1f1f]">
                Leave a Reply
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <label
                    className="block text-sm font-semibold text-[#2f2f2f]"
                    htmlFor="comment"
                  >
                    Comment *
                  </label>
                  <textarea
                    id="comment"
                    rows={6}
                    className="mt-2 w-full rounded-md border border-[var(--border)] px-4 py-3 text-sm text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="block text-sm font-semibold text-[#2f2f2f]"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="mt-2 w-full rounded-md border border-[var(--border)] px-4 py-2 text-sm text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-[#2f2f2f]"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-2 w-full rounded-md border border-[var(--border)] px-4 py-2 text-sm text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--primary)]"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </motion.article>

          <motion.aside
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.01 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-bold text-[#1f1f1f]">
                Quick takeaways
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>
                  <strong>UV damage</strong> can affect eyes even on cloudy
                  days.
                </li>
                <li>
                  Look for <strong>lens category ratings 2–4</strong> for real
                  protection.
                </li>
                <li>
                  <strong>Wraparound frames and hats</strong> improve coverage.
                </li>
              </ul>
            </div>

            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-white p-6">
              <h3 className="text-lg font-bold text-[#1f1f1f]">
                Book an Eye Test
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Need help choosing frames or managing UV exposure? Our team can
                guide your family.
              </p>
              <Link
                href="#hero"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] px-auto py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(159,208,103,0.35)] transition-colors hover:bg-white hover:text-[var(--primary)]"
              >
                Schedule an appointment
              </Link>
            </div>
          </motion.aside>
        </section>
      </main>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sunburnParagraphs = [
  "We all know how to lather on sunscreen and pop a hat on the kids before a day outside. But it’s just as important to think about their eyes—because the sun can hurt them too.",
  "Sunlight contains invisible ultraviolet (UV) rays that can bother and even injure the surface of the eye. When UV exposure is intense, this can lead to a condition similar to sunburn—but on the eyes instead of the skin. This can feel like grittiness, watering, soreness or being overly sensitive to bright light.",
  "Kids often spend a lot of time outdoors laughing, running around or playing sport. They might not speak up when their eyes feel uncomfortable, so it’s up to us as parents to make sure they’re properly shielded from harmful rays.",
  "In Australia, UV exposure can be strong even when it’s not blazing hot or it’s cloudy, and light can reflect off things like water, sand and concrete. Little eyes are more vulnerable to cumulative UV exposure over time, which can increase the risk of issues later in life—from glare sensitivity to more serious conditions that develop slowly with repeated sun exposure.",
];

const categoryList = [
  "Category 2 offers good protection for everyday outdoor activities",
  "Category 3 provides stronger protection and is ideal for bright conditions.",
  "Category 4 offers very high protection but is not suitable for driving.",
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
            viewport={{ once: true, amount: 0.1 }}
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

                <p>
                  Eyecare Kids optometrist Dr Christine Do states, "You may not
                  see the affects of sun damage straight away, but cumulative UV
                  exposure can cause irreversible damage many years later
                  including cataracts, cancers, pyteriums and macula
                  degeneration."
                </p>
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
                  Not all sunglasses protect eyes equally. When you’re picking
                  sunnies for the family, look for ones labelled under the
                  Australian and New Zealand Standard with a lens category
                  rating of 2, 3 or 4. Sunglasses in these categories meet the
                  standard for good UV protection and help block a high level of
                  harmful UV radiation.
                </p>
                <ul className="list-disc pl-5 text-[#2f2f2f]">
                  {categoryList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Wraparound styles and well-fitting frames help stop UV rays
                  sneaking in around the edges, and pairing sunglasses with a
                  broad-brimmed hat gives even better coverage.
                </p>
              </motion.div>

              <div className="mt-8">
                <div
                  className="mt-4 flex gap-4 overflow-x-auto scroll-smooth pb-3 snap-x snap-mandatory"
                  aria-label="Eyewear examples carousel"
                >
                  {eyewearExamples.map((item) => (
                    <div
                      key={item.title}
                      className="min-w-[220px] snap-start rounded-[var(--radius)] border border-[var(--border)] bg-white p-4 shadow-sm sm:min-w-[260px]"
                    >
                      <div className="relative h-32 overflow-hidden rounded-md bg-[var(--surface)]">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={`${item.title} sunglasses example`}
                            fill
                            sizes="260px"
                            style={{ objectFit: "cover" }}
                          />
                        ) : null}
                      </div>
                      <h4 className="mt-3 text-base font-bold text-[#1f1f1f]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {item.summary}
                      </p>
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
                  quality sunglasses part of everyday life—for school drop-offs,
                  sport, park visits and weekends outdoors—can help protect
                  their eyesight long term. If you’re looking for sunglasses
                  that meet these standards, Eyecare Kids has a wide range of
                  options for both children and adults. We also have a special
                  interest in customising sunglasses to suit individual
                  prescriptions, so your family can enjoy clear vision and
                  reliable UV protection every day.
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
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="text-lg font-bold text-[#1f1f1f]">
                Quick takeaways
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                <li>UV damage can affect eyes even on cloudy days.</li>
                <li>Look for lens category ratings 2–4 for real protection.</li>
                <li>Wraparound frames and hats improve coverage.</li>
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

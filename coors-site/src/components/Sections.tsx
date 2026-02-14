"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import coorsLogo from "../../public/coorslight_logo.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function SectionShell({
  children,
  id,
  bg = "bg-[#0A0E14]",
}: {
  children: React.ReactNode;
  id?: string;
  bg?: string;
}) {
  return (
    <section id={id} className={`relative ${bg}`}>
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28 lg:px-24 xl:px-32">
        {children}
      </div>
    </section>
  );
}

/* ─── PRODUCT ─── */
export function ProductSection() {
  return (
    <SectionShell id="product" bg="bg-[#0A0E14]">
      <motion.div {...fadeUp} className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/60">01 — PRODUCT</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Born in the<br />Rocky Mountains
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#8A9BB5] md:text-base">
            Since 1978, Coors Light has been the silver bullet of American brewing. Born in Golden,
            Colorado, at the foot of the Rocky Mountains, every batch is brewed with pure mountain
            water for a taste that&apos;s as crisp and refreshing as a Colorado morning.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#8A9BB5] md:text-base">
            Our cold-filtered process ensures a smooth, clean finish with only 102 calories per can.
            It&apos;s the beer that was made for those moments when nothing but cold, pure refreshment
            will do.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl border border-[#1A3A52] bg-[#0F1620] p-12">
            <Image
              src={coorsLogo}
              alt="Coors Light"
              width={400}
              height={300}
              className="w-full max-w-xs object-contain"
            />
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─── INGREDIENTS ─── */
export function IngredientsSection() {
  const ingredients = [
    {
      name: "Rocky Mountain Water",
      desc: "Pure water sourced from the Rocky Mountains, cold-filtered for unmatched crispness.",
    },
    {
      name: "Barley Malt",
      desc: "Premium two-row lager malt, selected for a clean and balanced flavor profile.",
    },
    {
      name: "Corn Syrup",
      desc: "Used in the brewing process for fermentation — not in the final beer.",
    },
    {
      name: "Hop Extract",
      desc: "A refined hop blend delivering subtle bitterness and a crisp, clean finish.",
    },
    {
      name: "Yeast",
      desc: "Proprietary lager yeast strain cultivated for generations for consistent, clean fermentation.",
    },
  ];

  return (
    <SectionShell id="ingredients" bg="bg-[#0F1620]">
      <motion.div {...fadeUp}>
        <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/60">02 — INGREDIENTS</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          Simple. Pure.<br />Nothing to Hide.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-5">
        {ingredients.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-[#1A3A52]/50 bg-[#0A0E14]/80 p-6 transition-all duration-300 hover:border-[#7AB8E0]/30 hover:bg-[#0A0E14] md:p-8"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A3A52]/50 text-xs font-bold text-[#7AB8E0]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-white">
              {item.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-[#8A9BB5]/70">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ─── NUTRITION ─── */
export function NutritionSection() {
  const facts = [
    { label: "Calories", value: "102" },
    { label: "Total Fat", value: "0g" },
    { label: "Sodium", value: "10mg" },
    { label: "Total Carbs", value: "5g" },
    { label: "Protein", value: "1g" },
    { label: "Alcohol by Vol.", value: "4.2%" },
  ];

  return (
    <SectionShell id="nutrition" bg="bg-[#0A0E14]">
      <motion.div {...fadeUp} className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/60">03 — NUTRITION</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Light Done<br />Right
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#8A9BB5] md:text-base">
            At just 102 calories per 12 fl oz serving, Coors Light is proof that great taste
            doesn&apos;t have to come at a cost. Refreshing, clean, and always satisfying.
          </p>
        </div>

        <div className="rounded-2xl border border-[#1A3A52] bg-[#0F1620] p-6 md:p-8">
          <div className="border-b border-[#1A3A52] pb-4">
            <h3 className="font-display text-lg font-bold tracking-wide text-white">
              Nutrition Facts
            </h3>
            <p className="mt-1 text-xs text-[#8A9BB5]/50">Serving Size 12 fl oz (355mL)</p>
          </div>
          <div className="divide-y divide-[#1A3A52]/50">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between py-3">
                <span className="text-xs text-[#8A9BB5]/70">{fact.label}</span>
                <span className="font-mono text-sm font-semibold text-[#7AB8E0]">{fact.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-[#1A3A52] pt-4">
            <p className="text-[10px] leading-relaxed text-[#8A9BB5]/40">
              * Percent Daily Values are based on a 2,000 calorie diet. Beer should be enjoyed
              responsibly. Must be 21+ to consume.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

/* ─── REVIEWS ─── */
export function ReviewsSection() {
  const reviews = [
    {
      name: "Jake M.",
      rating: 5,
      text: "Nothing beats a cold Coors Light after a long day on the mountain. Clean, crisp, and always refreshing.",
      location: "Denver, CO",
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "My go-to at every BBQ. Low calorie, great taste, and the cold-activated can is genius.",
      location: "Austin, TX",
    },
    {
      name: "Marcus T.",
      rating: 4,
      text: "Smooth and easy to drink. The silver bullet never disappoints. Perfect tailgate beer.",
      location: "Nashville, TN",
    },
  ];

  return (
    <SectionShell id="reviews" bg="bg-[#0F1620]">
      <motion.div {...fadeUp}>
        <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/60">04 — REVIEWS</span>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          What People<br />Are Saying
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-2xl border border-[#1A3A52]/50 bg-[#0A0E14]/60 p-6 md:p-8"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg
                  key={j}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill={j < review.rating ? "#7AB8E0" : "none"}
                  stroke="#7AB8E0"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#8A9BB5]">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A3A52] text-[10px] font-bold text-[#7AB8E0]">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{review.name}</p>
                <p className="text-[10px] text-[#8A9BB5]/50">{review.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ─── FAQ ─── */
export function FAQSection() {
  const faqs = [
    {
      q: "What makes Coors Light different from other light beers?",
      a: "Coors Light is brewed with pure Rocky Mountain water and cold-filtered for an exceptionally crisp, clean taste. Our proprietary cold-lagering process sets us apart from every other light beer on the market.",
    },
    {
      q: "How many calories are in a Coors Light?",
      a: "Each 12 fl oz serving of Coors Light contains just 102 calories and 5g of carbs, making it one of the lightest full-flavored beers available.",
    },
    {
      q: "What does the cold-activated can do?",
      a: "The mountains on your Coors Light can turn blue when the beer reaches optimal drinking temperature (around 39°F / 4°C), letting you know it's perfectly cold and ready to enjoy.",
    },
    {
      q: "Is Coors Light gluten-free?",
      a: "Coors Light is brewed with barley malt, which contains gluten. It is not considered gluten-free. For a gluten-free option, check out Coors Peak.",
    },
    {
      q: "Where is Coors Light brewed?",
      a: "Coors Light is primarily brewed at the Coors Brewery in Golden, Colorado — the largest single-site brewery in the world, nestled at the base of the Rocky Mountains.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionShell id="faq" bg="bg-[#0A0E14]">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp} className="text-center">
          <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/60">05 — FAQ</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Questions?<br />Answered.
          </h2>
        </motion.div>

        <div className="mt-16 divide-y divide-[#1A3A52]/50">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-sm font-medium text-white md:text-base">{faq.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className={`shrink-0 text-[#7AB8E0] transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-sm leading-relaxed text-[#8A9BB5]">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ─── FINAL CTA ─── */
export function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0F1620]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(122,184,224,0.06)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 sm:py-20 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <motion.div {...fadeUp}>
          <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/60">06 — GET YOURS</span>
          <h2 className="mt-4 font-display text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Ready to<br />Refresh?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[#8A9BB5] md:text-base">
            Find Coors Light at a store near you, or order online for delivery.
            Cold as the Rockies, delivered to your door.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full border border-[#7AB8E0]/30 px-7 py-3 text-[10px] font-semibold tracking-[0.2em] text-white transition-all duration-300 hover:border-[#7AB8E0]/60 hover:bg-[#7AB8E0]/10 sm:px-10 sm:py-4 sm:text-xs">
              FIND A STORE
            </button>
            <button className="rounded-full bg-[#7AB8E0] px-7 py-3 text-[10px] font-semibold tracking-[0.2em] text-[#0A0E14] transition-all duration-300 hover:bg-[#93C8EA] sm:px-10 sm:py-4 sm:text-xs">
              ORDER NOW
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

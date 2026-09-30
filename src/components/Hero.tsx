import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowRight, Sparkle, Star } from "@phosphor-icons/react";
import { IMAGES, STATS } from "../data/portfolioData";

const headline = "Video Editor & Visual Storyteller";

export function Hero({ onOpenShowreel }: { onOpenShowreel: () => void }) {
  const reduce = useReducedMotion();

  const words = headline.split(" ");
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-floaty" />
        <div className="absolute top-1/3 right-10 h-80 w-80 rounded-full bg-teal/15 blur-3xl animate-floaty [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,169,60,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full hairline bg-white/5 px-4 py-1.5 text-xs font-medium text-gold-soft"
          >
            <Sparkle size={14} weight="fill" />
            Top Rated Video Editor on Upwork
          </motion.div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.5, ease: "easeOut" }}
                className={`mr-3 inline-block ${
                  w === "Visual" || w === "Storyteller"
                    ? "text-gradient-gold"
                    : ""
                }`}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I craft smooth, engaging story flow that keeps viewers watching and
            turns raw footage into videos that convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View My Work
              <ArrowRight size={18} weight="bold" />
            </a>
            <button
              onClick={onOpenShowreel}
              className="group inline-flex items-center gap-3 rounded-full hairline bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/20 text-gold transition-transform group-hover:scale-110">
                <Play size={14} weight="fill" />
              </span>
              Watch Showreel
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {IMAGES.portrait && (
                <img
                  src={IMAGES.portrait}
                  alt="Yosef Tamagn"
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-ink"
                />
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} weight="fill" />
                ))}
              </div>
              <span>Trusted by creators &amp; agencies worldwide</span>
            </div>
          </motion.div>
        </div>

        {/* showreel preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <button
            onClick={onOpenShowreel}
            className="group relative block w-full overflow-hidden rounded-2xl hairline glow-gold"
          >
            <img
              src={IMAGES.heroShowreel}
              alt="Showreel preview"
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play size={26} weight="fill" />
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-left">
              <p className="font-display text-sm font-semibold">2024 Showreel</p>
              <p className="text-xs text-muted-foreground">
                Smooth. Engaging. Cinematic.
              </p>
            </div>
          </button>
        </motion.div>
      </div>

      {/* credibility grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute inset-x-0 bottom-0 border-t border-white/5"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="py-5 text-center md:text-left">
              <p className="font-display text-2xl font-bold text-gold sm:text-3xl">
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

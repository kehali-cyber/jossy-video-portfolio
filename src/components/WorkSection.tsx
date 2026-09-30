import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "@phosphor-icons/react";
import { CATEGORIES, PROJECTS } from "../data/portfolioData";
import type { CategoryKey, Project } from "../types";

export function WorkSection({
  onOpen,
}: {
  onOpen: (p: Project) => void;
}) {
  const [active, setActive] = useState<CategoryKey | "all">("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Selected Work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
            Edits built to <span className="text-gradient-gold">hold attention</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c.key
                  ? "bg-gold text-ink"
                  : "hairline bg-white/5 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={
                p.format === "horizontal"
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }
            >
              <button
                onClick={() => onOpen(p)}
                className="group relative block w-full overflow-hidden rounded-2xl hairline bg-ink-2 text-left transition-all duration-300 hover:ring-1 hover:ring-gold/40 hover:glow-gold"
              >
                <div
                  className={`w-full overflow-hidden ${
                    p.format === "vertical"
                      ? "aspect-[9/16]"
                      : "aspect-[16/9]"
                  }`}
                >
                  <img
                    src={p.poster}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {p.client}
                </div>

                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 translate-y-3 place-items-center rounded-full bg-gold text-ink opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Play size={22} weight="fill" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-lg font-bold leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.deliverables.slice(0, 2).map((d) => (
                      <span
                        key={d}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-foreground/80"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

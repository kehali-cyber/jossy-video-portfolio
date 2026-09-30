import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Quotes, ArrowUpRight } from "@phosphor-icons/react";
import type { Project } from "../types";

export function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-ink-2 hairline lg:grid-cols-[1.3fr_1fr]"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
            >
              <X size={20} />
            </button>

            <div className="bg-black">
              <video
                key={project.id}
                src={project.videoUrl}
                poster={project.poster}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-black object-cover"
              />
            </div>

            <div className="flex flex-col gap-5 p-6 sm:p-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-gold">
                  {project.client} · {project.year}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Deliverables
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <li
                      key={d}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium ring-1 ring-white/10"
                    >
                      <Check size={13} weight="bold" className="text-teal" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gold/5 p-4 ring-1 ring-gold/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Outcome
                </p>
                <p className="mt-1 text-sm text-foreground/90">{project.result}</p>
              </div>

              {project.quote && (
                <figure className="relative rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <Quotes size={22} className="text-gold/60" weight="fill" />
                  <blockquote className="mt-2 text-sm italic leading-relaxed text-foreground/90">
                    {project.quote.text}
                  </blockquote>
                  <figcaption className="mt-2 text-xs font-semibold text-muted-foreground">
                    {project.quote.author} · {project.quote.role}
                  </figcaption>
                </figure>
              )}

              <a
                href="#contact"
                onClick={onClose}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Start a project like this
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

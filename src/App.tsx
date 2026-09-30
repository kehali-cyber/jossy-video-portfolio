import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkSection } from "./components/WorkSection";
import { VideoModal } from "./components/VideoModal";
import { ContentSections } from "./components/ContentSections";
import { SHOWREEL } from "./data/portfolioData";
import type { Project } from "./types";

export default function App() {
  const [active, setActive] = useState<Project | null>(null);
  const { scrollY } = useScroll();
  const [showTop, setShowTop] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShowTop(v > 700));

  return (
    <div className="grain relative min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero onOpenShowreel={() => setActive(SHOWREEL)} />
        <WorkSection onOpen={(p) => setActive(p)} />
        <ContentSections />
      </main>

      <VideoModal project={active} onClose={() => setActive(null)} />

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-gold text-ink shadow-lg transition-transform hover:scale-105"
          >
            <ArrowUp size={20} weight="bold" />
          </motion.button>
        )}
      </AnimatePresence>

      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#101013",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />
    </div>
  );
}

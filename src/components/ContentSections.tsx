import { type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Lightning,
  Megaphone,
  PlayCircle,
  Waveform,
  MagicWand,
  Palette,
  MusicNotes,
  TextT,
  FilmSlate,
  SealCheck,
  SquaresFour,
  Eye,
  Target,
  BracketsCurly,
  RocketLaunch,
  Envelope,
  WhatsappLogo,
  TelegramLogo,
  Briefcase,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
  Star,
  Quotes,
  Copy,
  Check,
  ArrowUpRight,
  ArrowRight,
  Sparkle,
  CalendarCheck,
} from "@phosphor-icons/react";
import { toast } from "sonner";
import {
  CONTACTS,
  IMAGES,
  PILLARS,
  PROCESS,
  SERVICES,
  TESTIMONIALS,
  TIMELINE,
  TOOLS,
} from "../data/portfolioData";

type IconProps = {
  size?: number | string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
};

const ICONS: Record<string, ComponentType<IconProps>> = {
  Lightning,
  Megaphone,
  PlayCircle,
  Waveform,
  MagicWand,
  Palette,
  MusicNotes,
  TextT,
  FilmSlate,
  SealCheck,
  SquaresFour,
  Eye,
  Target,
  BracketsCurly,
  RocketLaunch,
  Envelope,
  WhatsappLogo,
  TelegramLogo,
  Briefcase,
  LinkedinLogo,
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo,
};

function Icon({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const C = ICONS[name] ?? Sparkle;
  return <C size={size} weight="fill" className={className} />;
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
      {children}
    </p>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <Eyebrow>What I Do</Eyebrow>
        <h2 className="mt-2 max-w-[24ch] font-display text-3xl font-bold tracking-tighter sm:text-5xl">
          Everything you need to turn footage into{" "}
          <span className="text-gradient-gold">story</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal
            key={s.id}
            delay={i * 0.04}
            className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
          >
            <div className="group h-full rounded-2xl hairline bg-ink-2 p-6 transition-colors hover:ring-1 hover:ring-gold/30">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-transform group-hover:scale-110">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why Jossy ---------------- */
function WhyJossy() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Why Work With Me</Eyebrow>
          <h2 className="mt-2 max-w-[22ch] font-display text-3xl font-bold tracking-tighter sm:text-5xl">
            The difference is{" "}
            <span className="text-gradient-gold">smooth story flow</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl hairline bg-ink p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal ring-1 ring-teal/20">
                  <Icon name={p.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <Eyebrow>
          <span className="inline-flex items-center gap-2">
            <CalendarCheck size={14} weight="fill" /> How We Work
          </span>
        </Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
          A simple, predictable process
        </h2>
      </Reveal>
      <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="absolute left-0 top-8 hidden h-px w-full bg-gradient-to-r from-gold/40 via-white/10 to-teal/40 md:block" />
        {PROCESS.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.08}>
            <div className="relative rounded-2xl hairline bg-ink-2 p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-extrabold text-white/10">
                  {step.step}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                  <Icon name={step.icon} size={18} />
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 to-teal/10 blur-2xl" />
            <img
              src={IMAGES.portrait}
              alt="Yosef Tamagn"
              className="aspect-[3/4] w-full rounded-3xl object-cover hairline"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl glass hairline px-4 py-3">
              <p className="font-display text-sm font-bold">Yosef &ldquo;Jossy&rdquo; Tamagn</p>
              <p className="text-xs text-gold">Video Editor &amp; Visual Storyteller</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Meet Jossy</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tighter sm:text-4xl">
              From a first cut at 13 to Top Rated on Upwork
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I started editing out of pure curiosity and turned it into a
              craft obsessed with pacing, rhythm and story. Today I help
              creators, founders and brands ship videos that feel premium and
              keep viewers watching.
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.age} delay={i * 0.06}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    {i < TIMELINE.length - 1 && (
                      <span className="mt-1 h-full w-px bg-white/10" />
                    )}
                  </div>
                  <div className="pb-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {t.age}
                    </p>
                    <h3 className="font-display text-base font-bold">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool.name}
                  className="rounded-full hairline bg-white/5 px-3.5 py-1.5 text-xs font-medium"
                >
                  {tool.name}
                  <span className="ml-1 text-muted-foreground">{tool.note}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[0];
  const rest = TESTIMONIALS.filter((t) => t.id !== featured.id);
  return (
    <section
      id="testimonials"
      className="border-y border-white/5 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tighter sm:text-5xl">
            Trusted by the people I edit for
          </h2>
        </Reveal>

        <Reveal>
          <figure className="mt-10 rounded-3xl hairline bg-ink p-8 sm:p-12">
            <Quotes size={40} weight="fill" className="text-gold/40" />
            <blockquote className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={IMAGES.portrait}
                alt=""
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-sm font-bold">
                  {featured.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {featured.role} · {featured.company}
                </p>
              </div>
              <div className="ml-auto flex text-gold">
                {Array.from({ length: featured.rating }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {rest.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-2xl hairline bg-ink-2 p-6">
                <div className="mb-3 flex text-gold">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} weight="fill" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span>{" "}
                  · {t.role}, {t.company}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact + Footer ---------------- */
function copy(text: string) {
  navigator.clipboard
    ?.writeText(text)
    .then(() => toast.success("Copied to clipboard"))
    .catch(() => toast.error("Could not copy"));
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/15 via-ink-2 to-teal/10 p-8 text-center hairline sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,169,60,0.12),transparent_65%)]" />
          <Eyebrow>Let&apos;s Work Together</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-[20ch] font-display text-3xl font-extrabold tracking-tighter sm:text-5xl">
            Ready for edits that keep viewers watching?
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-muted-foreground">
            Tell me about your project and I&apos;ll show you how smooth story
            flow can lift your retention and results.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:Josephjosi149@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <Envelope size={18} weight="fill" />
              Email Me
            </a>
            <a
              href="https://wa.me/251937219466"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full hairline bg-white/5 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <WhatsappLogo size={18} weight="fill" />
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CONTACTS.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.03}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl hairline bg-ink-2 p-4 transition-colors hover:ring-1 hover:ring-gold/30"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-gold ring-1 ring-white/10">
                  <Icon name={c.icon} size={18} />
                </span>
                {c.copy ? (
                  <button
                    aria-label={`Copy ${c.label}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      copy(c.copy as string);
                    }}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Copy size={16} />
                  </button>
                ) : (
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </div>
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="truncate text-sm font-medium">{c.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold/15 font-display font-extrabold text-gold ring-1 ring-gold/30">
            J
          </span>
          <div>
            <p className="font-display text-sm font-bold">
              Yosef &ldquo;Jossy&rdquo; Tamagn
            </p>
            <p className="text-xs text-muted-foreground">
              Video Editor &amp; Visual Storyteller
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Check size={16} className="text-teal" />
          <span className="text-xs">
            Available for freelance &amp; agency work
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline"
          >
            Back to top <ArrowRight size={12} />
          </a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Jossy. Crafted for smooth story flow.
      </p>
    </footer>
  );
}

export function ContentSections() {
  return (
    <>
      <Services />
      <WhyJossy />
      <Process />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

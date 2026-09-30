import type {
  CategoryMeta,
  ContactLink,
  Pillar,
  ProcessStep,
  Project,
  Service,
  Stat,
  Testimonial,
  TimelineItem,
  Tool,
} from "../types";

const IMG =
  "https://dala-prod-public-storage.s3.eu-west-1.amazonaws.com/generated-images/0a3fff86-a017-4508-9ed4-4eaf7eef6ba1";

export const IMAGES = {
  heroShowreel: `${IMG}/hero-showreel-5c1daf5e-1790702655112.webp`,
  yummie: `${IMG}/proj-yummie-ugc-7174a056-1790702655027.webp`,
  murad: `${IMG}/proj-murad-vsl-e15fbb64-1790702655016.webp`,
  joel: `${IMG}/proj-joel-doc-f9770c83-1790702655162.webp`,
  brandFilm: `${IMG}/proj-brand-film-28f3e4e2-1790702654757.webp`,
  ecom: `${IMG}/proj-ecom-ad-50c4b233-1790702656223.webp`,
  fitness: `${IMG}/proj-fitness-short-0e33864c-1790702655963.webp`,
  portrait: `${IMG}/yosef-portrait-dd9387db-1790702655446.webp`,
};

const SAMPLE =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample";

export const SHOWREEL: Project = {
  id: "showreel",
  title: "2024 Showreel",
  client: "Selected Work",
  category: "short-form",
  format: "horizontal",
  poster: IMAGES.heroShowreel,
  videoUrl: `${SAMPLE}/ForBiggerJoyrides.mp4`,
  year: "2024",
  summary:
    "A fast-cut montage of retention-driven edits across short-form, ads and long-form storytelling.",
  deliverables: ["Story flow", "Motion graphics", "Color grade", "Sound design"],
  result: "A single reel that shows how smooth pacing keeps viewers watching.",
};

export const PROJECTS: Project[] = [
  {
    id: "yummie",
    title: "AI UGC Campaign",
    client: "Yummie",
    category: "ads-ugc",
    format: "vertical",
    poster: IMAGES.yummie,
    videoUrl: `${SAMPLE}/ForBiggerBlazes.mp4`,
    year: "2024",
    summary:
      "AI-generated UGC style ads built with Kling 3.0, cut for thumb-stopping hooks and clean product focus.",
    deliverables: ["Hook-first edit", "AI UGC", "Captions", "CTA end-card"],
    result: "Scroll-stopping vertical ads engineered for Meta and TikTok placements.",
  },
  {
    id: "murad",
    title: "Welcome Video / VSL",
    client: "Murad",
    category: "vsl-long",
    format: "horizontal",
    poster: IMAGES.murad,
    videoUrl: `${SAMPLE}/ForBiggerEscapes.mp4`,
    year: "2024",
    summary:
      "A direct-response welcome video that builds trust in the first seconds and guides the viewer to a single action.",
    deliverables: ["Script pacing", "B-roll", "Text overlays", "Retention beats"],
    result: "A conversion-focused VSL with a smooth, persuasive story arc.",
  },
  {
    id: "joel",
    title: "Documentary Long-form",
    client: "Joel Neto",
    category: "vsl-long",
    format: "horizontal",
    poster: IMAGES.joel,
    videoUrl: `${SAMPLE}/ForBiggerFun.mp4`,
    year: "2024",
    summary:
      "Devin Jatho style long-form narrative blending cinematic b-roll, sound design and tight story flow.",
    deliverables: ["Story structure", "Cinematic grade", "Sound design", "Motion titles"],
    result: "A premium long-form piece that feels like a short film.",
    quote: {
      text: "Jossy turned raw footage into a story that kept my audience watching to the very end. The flow is unreal.",
      author: "Joel Neto",
      role: "Creator",
    },
  },
  {
    id: "ecom",
    title: "E-commerce Meta Ad",
    client: "Skincare Brand",
    category: "ads-ugc",
    format: "vertical",
    poster: IMAGES.ecom,
    videoUrl: `${SAMPLE}/ForBiggerMeltdowns.mp4`,
    year: "2024",
    summary:
      "High-converting product ad with punchy cuts, benefit overlays and a hook engineered for paid social.",
    deliverables: ["Hook variants", "Benefit overlays", "SFX", "A/B cuts"],
    result: "Ad creative built to scale spend while holding attention.",
  },
  {
    id: "fitness",
    title: "Retention Reel",
    client: "Fitness Creator",
    category: "short-form",
    format: "vertical",
    poster: IMAGES.fitness,
    videoUrl: `${SAMPLE}/TearsOfSteel.mp4`,
    year: "2024",
    summary:
      "High-energy short-form edit with pattern interrupts, beat-synced cuts and dynamic captions.",
    deliverables: ["Beat sync", "Captions", "Zoom punch-ins", "Loop hook"],
    result: "A reel designed to loop and lift average watch time.",
  },
  {
    id: "brand",
    title: "Cinematic Brand Film",
    client: "Lifestyle Label",
    category: "short-form",
    format: "horizontal",
    poster: IMAGES.brandFilm,
    videoUrl: `${SAMPLE}/ElephantsDream.mp4`,
    year: "2024",
    summary:
      "A mood-driven brand film with anamorphic grade, layered sound and a calm, confident story flow.",
    deliverables: ["Color grade", "Sound design", "Pacing", "Title design"],
    result: "A cinematic brand piece that elevates perceived value.",
  },
];

export const CATEGORIES: CategoryMeta[] = [
  { key: "all", label: "All Work" },
  { key: "short-form", label: "Short-form" },
  { key: "ads-ugc", label: "Ads / UGC" },
  { key: "vsl-long", label: "VSL & Long-form" },
];

export const STATS: Stat[] = [
  { value: "3+", label: "Years Editing" },
  { value: "600+", label: "Projects Delivered" },
  { value: "60+", label: "Meta Ads Shipped" },
  { value: "Top Rated", label: "Upwork Video Editor" },
];

export const SERVICES: Service[] = [
  { id: "s1", title: "Short-form Editing", description: "Reels, TikTok and Shorts cut for hooks, pacing and loopable retention.", icon: "Lightning", tags: ["Reels", "TikTok", "Shorts"] },
  { id: "s2", title: "Ads & UGC", description: "Paid social creative with hook variants, overlays and clean product focus.", icon: "Megaphone", tags: ["Meta Ads", "TikTok Ads", "UGC"] },
  { id: "s3", title: "VSL & Long-form", description: "Direct-response and narrative videos with persuasive story structure.", icon: "PlayCircle", tags: ["VSL", "Documentary", "YouTube"] },
  { id: "s4", title: "Story Flow & Pacing", description: "The core differentiator: smooth, engaging edits that keep viewers watching.", icon: "Waveform", tags: ["Retention", "Rhythm", "Pacing"] },
  { id: "s5", title: "Motion Graphics", description: "Titles, kinetic text and animated overlays that elevate the frame.", icon: "MagicWand", tags: ["Titles", "Kinetic Text", "Overlays"] },
  { id: "s6", title: "Color Grading", description: "Cinematic looks and consistent brand color across every cut.", icon: "Palette", tags: ["Cinematic", "LUTs", "Brand Color"] },
  { id: "s7", title: "Sound Design", description: "SFX, music beds and mix that make the edit feel premium.", icon: "MusicNotes", tags: ["SFX", "Music", "Mix"] },
  { id: "s8", title: "Captions & Subtitles", description: "On-brand, readable captions tuned for silent autoplay.", icon: "TextT", tags: ["Subtitles", "Styled Captions"] },
  { id: "s9", title: "End-to-End Editing", description: "From raw footage to final export, handled start to finish.", icon: "FilmSlate", tags: ["Full Pipeline", "Delivery"] },
];

export const PILLARS: Pillar[] = [
  { title: "Smooth Storytelling", description: "Every cut serves the story, so the flow feels effortless and viewers stay.", icon: "Waveform" },
  { title: "Professional Experience", description: "3+ years and 600+ projects shipping for creators and brands at scale.", icon: "SealCheck" },
  { title: "Versatile Editing", description: "Short-form, ads, VSL and cinematic long-form across every niche.", icon: "SquaresFour" },
  { title: "Attention to Detail", description: "Frame-level polish on pacing, captions, color and sound.", icon: "Eye" },
  { title: "End-to-End Editing", description: "One editor from first cut to final export, no handoffs, no chaos.", icon: "FilmSlate" },
];

export const PROCESS: ProcessStep[] = [
  { step: "01", title: "Understand", description: "We map your goal, audience and the story you want to tell.", icon: "Target" },
  { step: "02", title: "Build", description: "I assemble the cut, shaping hooks and smooth story flow.", icon: "BracketsCurly" },
  { step: "03", title: "Refine", description: "Pacing, captions, color and sound are polished frame by frame.", icon: "MagicWand" },
  { step: "04", title: "Deliver", description: "Platform-ready exports delivered on time, every time.", icon: "RocketLaunch" },
];

export const TIMELINE: TimelineItem[] = [
  { age: "Age 13", title: "First Cut", description: "Started editing out of pure curiosity and never stopped chasing better story flow." },
  { age: "Age 17", title: "Going Pro", description: "Turned a hobby into a craft, editing daily and studying retention like an obsession." },
  { age: "Today", title: "Top Rated on Upwork", description: "600+ projects delivered for creators, founders and brands worldwide." },
];

export const TOOLS: Tool[] = [
  { name: "Premiere Pro", note: "Editing" },
  { name: "After Effects", note: "Motion" },
  { name: "DaVinci Resolve", note: "Color" },
  { name: "CapCut", note: "Short-form" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Joel Neto",
    role: "Creator",
    company: "Long-form",
    quote:
      "Jossy turned raw footage into a story that kept my audience watching to the very end. The flow is unreal and the delivery is always on time.",
    rating: 5,
    featured: true,
  },
  {
    id: "t2",
    name: "Murad",
    role: "Founder",
    company: "DTC Brand",
    quote:
      "Our welcome VSL finally feels premium. Clean pacing, sharp overlays and a story that actually converts.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Yummie",
    role: "Marketing Lead",
    company: "Food & Beverage",
    quote:
      "The AI UGC ads stopped the scroll. Hooks, captions and product focus were exactly what our Meta campaigns needed.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Fitness Creator",
    role: "Coach",
    company: "Short-form",
    quote:
      "My reels loop and watch time jumped. Jossy understands rhythm and retention better than anyone I have worked with.",
    rating: 5,
  },
];

export const CONTACTS: ContactLink[] = [
  { label: "Email", value: "Josephjosi149@gmail.com", href: "mailto:Josephjosi149@gmail.com", icon: "Envelope", copy: "Josephjosi149@gmail.com" },
  { label: "WhatsApp", value: "+251 937 219 466", href: "https://wa.me/251937219466", icon: "WhatsappLogo" },
  { label: "Telegram", value: "@YosefEdit", href: "https://t.me/YosefEdit", icon: "TelegramLogo" },
  { label: "Upwork", value: "Hire on Upwork", href: "https://www.upwork.com/", icon: "Briefcase" },
  { label: "LinkedIn", value: "Connect", href: "https://www.linkedin.com/", icon: "LinkedinLogo" },
  { label: "Instagram", value: "@jossy.edits", href: "https://www.instagram.com/", icon: "InstagramLogo" },
  { label: "TikTok", value: "@jossy.edits", href: "https://www.tiktok.com/", icon: "TiktokLogo" },
  { label: "YouTube", value: "Watch", href: "https://www.youtube.com/", icon: "YoutubeLogo" },
];

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

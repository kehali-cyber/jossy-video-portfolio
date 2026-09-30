export type CategoryKey = "short-form" | "ads-ugc" | "vsl-long";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: CategoryKey;
  format: "vertical" | "horizontal";
  poster: string;
  videoUrl: string;
  year: string;
  summary: string;
  deliverables: string[];
  result: string;
  quote?: { text: string; author: string; role: string };
}

export interface CategoryMeta {
  key: CategoryKey | "all";
  label: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Tool {
  name: string;
  note: string;
}

export interface TimelineItem {
  age: string;
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  copy?: string;
}

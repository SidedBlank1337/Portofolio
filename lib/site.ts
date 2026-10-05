import type { SpriteName } from "@/components/art/sprites";

export const site = {
  name: "Deepta",
  tagline: "Portfolio of Deepta: projects, skills and how to reach me",
  url: "https://example.com",
  author: "Deepta",
  // Replace with your real address; the contact form opens a pre-filled email to it.
  email: "hello@example.com",
  // Decorative only: no live server data is connected.
  gameVersion: "1.21.x",
};

export const nav: { label: string; href: string; icon: SpriteName; key: string }[] = [
  { label: "Home", href: "/", icon: "grass", key: "1" },
  { label: "Projects", href: "/projects", icon: "chest", key: "2" },
  { label: "Skills", href: "/skills", icon: "enchantedBook", key: "3" },
  { label: "About", href: "/about", icon: "player", key: "4" },
  { label: "Contact", href: "/contact", icon: "writableBook", key: "5" },
];

// Replace these with your real profile URLs.
export const socials: { label: string; href: string; icon: SpriteName; lore: string }[] = [
  { label: "GitHub", href: "https://github.com", icon: "writableBook", lore: "Code for every project here." },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "sign", lore: "Work history and recommendations." },
  { label: "YouTube", href: "https://youtube.com", icon: "disc", lore: "Demos and build videos." },
  { label: "Discord", href: "https://discord.com", icon: "horn", lore: "Say hi in chat." },
];

export const profile = {
  username: "Deepta",
  title: "Developer & Builder",
  world: "Portfolio Survival",
  playtime: "1,247 hours",
  biome: "Cherry Grove",
  block: "Stone",
  mob: "Wolf",
  level: 42,
};

export type SkillGroup = { title: string; icon: SpriteName; skills: Skill[] };
export type Skill = {
  name: string;
  icon: SpriteName;
  /** 0 to 1 */
  value: number;
  level: number;
  /** Shown like an enchantment line in the tooltip. */
  enchant: string;
  lore: string;
};

// Sample skill data: replace with your own.
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "diamond",
    skills: [
      { name: "React", icon: "diamond", value: 0.9, level: 38, enchant: "Efficiency V", lore: "Components, hooks, state." },
      { name: "TypeScript", icon: "enchantedBook", value: 0.82, level: 33, enchant: "Protection IV", lore: "Types that catch bugs early." },
      { name: "CSS & Design", icon: "brick", value: 0.86, level: 35, enchant: "Silk Touch", lore: "Layouts, motion, accessibility." },
      { name: "Next.js", icon: "compass", value: 0.8, level: 31, enchant: "Swift Sneak III", lore: "Routing, SSG, deployment." },
    ],
  },
  {
    title: "Backend",
    icon: "redstone",
    skills: [
      { name: "Node.js", icon: "redstone", value: 0.78, level: 29, enchant: "Unbreaking III", lore: "APIs, scripts and tooling." },
      { name: "Databases", icon: "chest", value: 0.66, level: 22, enchant: "Fortune II", lore: "SQL, schemas, queries." },
      { name: "Python", icon: "emerald", value: 0.6, level: 19, enchant: "Looting II", lore: "Automation and data work." },
    ],
  },
  {
    title: "Tools",
    icon: "pickaxe",
    skills: [
      { name: "Git", icon: "map", value: 0.84, level: 34, enchant: "Mending", lore: "Branches, reviews, history." },
      { name: "Figma", icon: "feather", value: 0.7, level: 24, enchant: "Aqua Affinity", lore: "Wireframes to prototypes." },
      { name: "Vercel", icon: "pearl", value: 0.75, level: 27, enchant: "Feather Falling IV", lore: "Previews and production deploys." },
    ],
  },
];

// Sample timeline: replace with your own milestones.
export const timeline: { year: string; title: string; text: string; icon: SpriteName }[] = [
  { year: "2019", title: "Stone Age", text: "Wrote my first HTML page and broke it immediately.", icon: "pickaxe" },
  { year: "2021", title: "Getting an Upgrade", text: "Learned JavaScript and React; shipped my first real project.", icon: "brick" },
  { year: "2023", title: "Diamonds!", text: "Started building full-stack apps for real users.", icon: "diamond" },
  { year: "2026", title: "The End?", text: "Not even close. Still building.", icon: "endstone" },
];

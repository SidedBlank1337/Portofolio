import type { Metadata } from "next";
import { Pixel } from "@/components/art/Pixel";
import { Breadcrumb } from "@/components/portfolio/Breadcrumb";
import { PlayerProfile } from "@/components/portfolio/PlayerProfile";
import { MinecraftButton } from "@/components/mc/MinecraftButton";
import { MinecraftCard } from "@/components/mc/MinecraftCard";
import { timeline } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About", description: "Who I am and how I got here." };

export default function AboutPage() {
  return (
    <div className="container page">
      <Breadcrumb items={[{ label: "World", href: "/" }, { label: "About" }]} />
      <h1 className="page-title section-head">
        <Pixel sprite="sign" size={36} />
        About me
      </h1>

      <div className={styles.grid}>
        <MinecraftCard as="section" aria-labelledby="story-title" className="prose" data-xp="story">
          <h2 id="story-title">Hi, I&apos;m Deepta</h2>
          <p>
            This intro is placeholder text. Replace it in <code>app/about/page.tsx</code> with your own story.
          </p>
          <p>
            I&apos;m a developer who likes building things people enjoy using. Minecraft taught me that big projects are just a
            lot of small blocks placed carefully, and I still work that way.
          </p>
          <p>I care about fast, accessible interfaces, clean code, and the small details that make something feel finished.</p>
          <h3>Currently</h3>
          <ul>
            <li>Building web apps with React and Next.js</li>
            <li>Learning more about backend systems</li>
            <li>Open to new projects and roles</li>
          </ul>
          <div className={styles.actions}>
            <MinecraftButton href="/contact" variant="grass">
              Get in touch
            </MinecraftButton>
            <MinecraftButton href="/projects">See my work</MinecraftButton>
          </div>
        </MinecraftCard>

        <PlayerProfile />
      </div>

      <section className={styles.timeline} aria-labelledby="timeline-title" data-xp="timeline">
        <h2 id="timeline-title" className="section-head">
          <Pixel sprite="map" size={28} />
          Advancements
        </h2>
        <ol className={styles.tree}>
          {timeline.map((t) => (
            <li key={t.year} className={styles.node}>
              <span className={styles.frame}>
                <Pixel sprite={t.icon} size={32} />
              </span>
              <div className={styles.card}>
                <p className={styles.year}>{t.year}</p>
                <h3 className={styles.title}>{t.title}</h3>
                <p className={styles.text}>{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

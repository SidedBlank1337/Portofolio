import { Pixel } from "@/components/art/Pixel";
import type { SpriteName } from "@/components/art/sprites";
import { InventorySlot } from "@/components/mc/InventorySlot";
import { MinecraftProgressBar } from "@/components/mc/MinecraftProgressBar";
import { profile } from "@/lib/site";
import { DiamondEgg } from "./EasterEggs";
import styles from "./PlayerProfile.module.css";

const STATS: { label: string; value: string; icon: SpriteName }[] = [
  { label: "Username", value: profile.username, icon: "sign" },
  { label: "World", value: profile.world, icon: "map" },
  { label: "Playtime", value: profile.playtime, icon: "clock" },
  { label: "Favorite biome", value: profile.biome, icon: "feather" },
  { label: "Favorite block", value: profile.block, icon: "brick" },
  { label: "Favorite mob", value: profile.mob, icon: "heart" },
];

const HOTBAR: { item: SpriteName; name: string; lore: string; rarity?: "rare" | "epic" | "uncommon"; count?: number }[] = [
  { item: "sword", name: "Diamond Sword", lore: "Sharpness V. Named “Old Reliable”.", rarity: "epic" },
  { item: "pickaxe", name: "Diamond Pickaxe", lore: "Used for mining valuable resources.", rarity: "rare" },
  { item: "torch", name: "Torch", lore: "Never go caving without them.", count: 64 },
  { item: "book", name: "Book and Quill", lore: "Where these blog posts start." },
  { item: "map", name: "Explorer Map", lore: "Leads to the next adventure." },
  { item: "pearl", name: "Ender Pearl", lore: "For emergencies. And shortcuts.", count: 16, rarity: "uncommon" },
  { item: "emerald", name: "Emerald", lore: "Trading currency of choice.", count: 23 },
];

export function PlayerProfile() {
  return (
    <section id="profile" className={styles.profile} aria-labelledby="profile-title">
      <h2 id="profile-title" className={styles.heading}>
        Player profile
      </h2>
      <div className={styles.layout}>
        <div className={styles.avatarSlot}>
          <Pixel sprite="player" size={64} label={`${profile.username}'s player skin`} className={styles.avatar} />
          <span className={styles.nametag}>{profile.username}</span>
        </div>
        <dl className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statIcon}>
                <Pixel sprite={s.icon} size={20} />
              </span>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <MinecraftProgressBar value={0.68} level={profile.level} label={`Level ${profile.level}, 68% to next level`} className={styles.xp} />
      <div className={styles.hotbar} role="list" aria-label="Hotbar">
        {HOTBAR.map((h, i) => (
          <span role="listitem" key={h.name}>
            <InventorySlot item={h.item} name={h.name} lore={h.lore} rarity={h.rarity} count={h.count} selected={i === 0} />
          </span>
        ))}
        <span role="listitem">
          <DiamondEgg />
        </span>
      </div>
    </section>
  );
}

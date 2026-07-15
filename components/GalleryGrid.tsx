import { gallery } from "@/lib/gallery";
import styles from "./Gallery.module.css";

export default function GalleryGrid({ limit }: { limit?: number }) {
  const list = limit ? gallery.slice(0, limit) : gallery;
  return (
    <div className={styles.grid}>
      {list.map((item, i) => (
        <figure
          key={item.src}
          className={`${styles.item} ${i % 5 === 0 ? styles.wide : ""}`}
        >
          {/* Plain <img> zodat zowel de SVG-placeholders als straks echte
              foto's van Nino direct werken. Vervang src in lib/gallery.ts. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          <figcaption className={styles.tag}>{item.tag}</figcaption>
        </figure>
      ))}
    </div>
  );
}

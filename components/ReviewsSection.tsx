import { Star } from "lucide-react";
import { reviews, reviewSummary } from "@/lib/reviews";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function ReviewsSection() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Wat klanten zeggen</span>
          <h2>
            Beoordeeld met een {reviewSummary.rating.toFixed(1)} door de vaste
            klanten
          </h2>
        </div>

        <div className={styles.reviews}>
          {reviews.map((r, i) => (
            <Reveal key={r.name} className={styles.review} delay={(i % 4) * 80}>
              <div className={styles.stars}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
              <span className={styles.reviewName}>{r.name}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

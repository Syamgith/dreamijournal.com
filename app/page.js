import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Dreami Diary</h1>
        <p className={styles.description}>Capture and explore your dreams</p>
        <div className={styles.cta}>
          <Link href="https://web.dreamidiary.com" className={styles.ctaButton}>
            Open DreamiDiary Web
          </Link>
        </div>
      </div>

      <section className={styles.features}>
        <h2>Why Choose Dreami Diary?</h2>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✏️</div>
            <h3>Easy Dream Recording</h3>
            <p>
              Quickly capture your dreams before they fade away with our
              intuitive interface.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>Dream Analysis</h3>
            <p>
              Discover patterns and meanings in your dreams with our smart
              analysis tool powered by AI.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Private & Secure</h3>
            <p>
              Your dreams stay private with our secure storage and privacy-first
              approach.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Explore Your Dreams?</h2>
        <p>Join us</p>
        <Link href="https://web.dreamidiary.com" className={styles.ctaButton}>
          Open DreamiDiary Web
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>© 2025 Dreami Diary. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          {/* <Link href="/terms">Terms of Service</Link> */}
          {/* <Link href="/contact">Contact Us</Link> */}
        </div>
      </footer>
    </main>
  );
}

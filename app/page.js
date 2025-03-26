import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Dreami Diary</h1>
        <p className={styles.description}>
          Capture, explore, and understand your dreams like never before
        </p>
        <div className={styles.cta}>
          <Link href="https://web.dreamidiary.com" className={styles.ctaButton}>
            Start Your Dream Journey
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
              analysis tools.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Dream Insights</h3>
            <p>
              Track your dream patterns over time and gain valuable insights
              into your subconscious.
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

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌙</div>
            <h3>Sleep Tracking</h3>
            <p>
              Understand the connection between your sleep quality and dream
              experiences.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧠</div>
            <h3>Lucid Dreaming Tools</h3>
            <p>
              Resources and techniques to help you achieve and master lucid
              dreaming.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Dreamers Are Saying</h2>

        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>
              "Dreami Diary has helped me remember my dreams in vivid detail.
              I've discovered patterns I never noticed before!"
            </p>
            <p className={styles.testimonialAuthor}>- Sarah K.</p>
          </div>

          <div className={styles.testimonialCard}>
            <p>
              "The insights from tracking my dreams over months have been
              incredible. I understand myself better now."
            </p>
            <p className={styles.testimonialAuthor}>- Michael T.</p>
          </div>

          <div className={styles.testimonialCard}>
            <p>
              "I've finally achieved lucid dreaming thanks to the techniques and
              tracking in this app. Life-changing!"
            </p>
            <p className={styles.testimonialAuthor}>- Jamie L.</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Explore Your Dreams?</h2>
        <p>
          Join thousands of dreamers who are discovering the hidden meanings in
          their subconscious.
        </p>
        <Link href="https://web.dreamidiary.com" className={styles.ctaButton}>
          Start Your Free Trial
        </Link>
      </section>

      <footer className={styles.footer}>
        <p>© 2023 Dreami Diary. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </footer>
    </main>
  );
}

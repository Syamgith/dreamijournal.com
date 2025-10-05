import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Dreami Diary AI</h1>
        <p className={styles.description}>
          Capture and Explore Your Dreams <br />
          Using Artificial Intelligence
        </p>
        <p
          style={{
            color: "#999999",
            marginTop: "-10px",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          Available on Android and Web
        </p>
        <div className={styles.cta}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <Link
              href="https://play.google.com/store/apps/details?id=com.tinystars.dreamidiary"
              className={styles.ctaButton}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "2px solid #0066ff",
                borderRadius: "8px",
              }}
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                style={{ height: "48px", verticalAlign: "middle" }}
              />
            </Link>
            <Link
              href="https://web.dreamidiary.com"
              className={styles.ctaButton}
              style={{
                width: "100%",
                textAlign: "center",
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "2px solid #0066ff",
                borderRadius: "8px",
              }}
            >
              Open DreamiDiary Web
            </Link>
          </div>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.tinystars.dreamidiary"
            className={styles.ctaButton}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000000",
              color: "#ffffff",
              border: "2px solid #0066ff",
              borderRadius: "8px",
            }}
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              style={{ height: "48px", verticalAlign: "middle" }}
            />
          </Link>
          <Link
            href="https://web.dreamidiary.com"
            className={styles.ctaButton}
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "#000000",
              color: "#ffffff",
              border: "2px solid #0066ff",
              borderRadius: "8px",
            }}
          >
            Open DreamiDiary Web
          </Link>
        </div>
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

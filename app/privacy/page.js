import styles from "./privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Effective Date: 26th March 2025</p>
      <p>
        Welcome to Dreami Diary! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        When you use Dreami Diary, we may collect the following information:
      </p>
      <ul>
        <li>
          Personal details (e.g., email, username) when creating an account.
        </li>
        <li>Dream entries and notes you save within the app.</li>
        <li>Analytics data (e.g., usage patterns) to improve our services.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and enhance the Dreami Diary experience.</li>
        <li>Secure your data and personalize your experience.</li>
        <li>Analyze trends to improve app performance.</li>
      </ul>

      <h2>3. Data Protection</h2>
      <p>
        Your data is securely stored, and we take reasonable steps to prevent
        unauthorized access or disclosure. We do not sell your data to third
        parties.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We may use third-party services (e.g., analytics, cloud storage) that
        comply with industry standards for data protection.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to access, edit, or delete your data. Contact us at
        dreamydiaryai@gmail.com for any privacy-related concerns.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at dreamydiaryai@gmail.com.
      </p>
    </div>
  );
}

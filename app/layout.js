import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dreami Diary - Capture and Explore Your Dreams",
  description:
    "Dreami Diary helps you record, analyze, and understand your dreams with powerful tools for dream journaling and lucid dreaming.",
  icons: {
    icon: [
      { url: "/favicons/favicon.ico" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicons/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

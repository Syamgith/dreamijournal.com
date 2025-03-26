import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dreami Diary - Capture and Explore Your Dreams",
  description:
    "Dreami Diary helps you record, analyze, and understand your dreams with powerful tools for dream journaling and lucid dreaming.",
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

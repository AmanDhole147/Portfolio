import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman Dhole | Portfolio",
  description:
    "Frontend Developer specializing in React, WordPress & Shopify. I build fast, responsive, SEO-optimized websites that convert visitors into customers.",

  // ✅ Only ONE metadataBase (no trailing slash)
  metadataBase: new URL("https://amandhole147.github.io/Portfolio"),

  // ✅ Canonical
  alternates: {
    canonical: "/",
  },

  // ✅ Keywords
  keywords: [
    "Aman Dhole",
    "Frontend Developer",
    "React Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Web Developer Portfolio",
    "SEO Optimized Websites",
    "Freelance Web Developer",
  ],

  // ✅ Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ✅ Open Graph (FIXED URL)
  openGraph: {
    title: "Aman Dhole | Portfolio",
    description:
      "Frontend Developer specializing in React, WordPress & Shopify.",
    url: "https://amandhole147.github.io/Portfolio",
    siteName: "Aman Dhole Portfolio",
    type: "website",
  },

  // ✅ Twitter
  twitter: {
    card: "summary_large_image",
    title: "Aman Dhole | Portfolio",
    description:
      "Frontend Developer specializing in React, WordPress & Shopify.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />

        <Script id="fix-gh-pages-images" strategy="afterInteractive">
          {`
            if (location.hostname.includes('github.io')) {
              const prefix = '/Portfolio';

              function fixImages() {
                document.querySelectorAll('img').forEach(img => {
                  const src = img.getAttribute('src');
                  if (src && src.startsWith('/') && !src.startsWith(prefix)) {
                    img.src = prefix + src;
                  }
                });
              }

              fixImages();

              const observer = new MutationObserver(() => fixImages());
              observer.observe(document.body, { childList: true, subtree: true });
            }
          `}
        </Script>
      </body>
    </html>
  );
}

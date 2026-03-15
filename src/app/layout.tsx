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
  title: "Aman Dhole – Web Developer",
  description:
    "Frontend Developer specializing in React, WordPress & Shopify. I build fast, responsive, SEO-optimized websites that convert visitors into customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />

        {children}

        <Footer />

        {/* Fix image paths for GitHub Pages */}
        <Script id="fix-gh-pages-images" strategy="afterInteractive">
          {`
            if (location.hostname.includes('github.io')) {
              const prefix = '/Portfolio';
              document.querySelectorAll('img[src^="/"]').forEach(img => {
                if (!img.src.includes(prefix)) {
                  img.src = prefix + img.getAttribute('src');
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Figtree } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Prove — Stop Betting on the Wrong People | Commitment Quotient",
    template: "%s | Prove",
  },
  description: site.description,
  openGraph: {
    title: "Prove — Stop Betting on the Wrong People",
    description:
      "Behavioral proof of who will deliver — before you invest in them.",
    url: site.domain,
    siteName: "Prove",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prove — Stop Betting on the Wrong People",
    description:
      "Behavioral proof of who will deliver — before you invest in them.",
  },
};

/** Organization JSON-LD (handoff §5: Organization + FAQPage schema). */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Prove",
  legalName: "Be Legendary",
  url: site.domain,
  description: site.description,
  brand: { "@type": "Brand", name: "Commitment Quotient" },
  parentOrganization: {
    "@type": "Organization",
    name: "Be Legendary",
    url: site.parentUrl,
  },
  founder: { "@type": "Person", name: "James Carter" },
  telephone: site.telephone,
  areaServed: "US",
  knowsAbout: [
    "employee commitment",
    "leadership readiness",
    "promotion decisions",
    "hiring",
    "employee retention",
    "EOS capacity",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${figtree.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaMeasurementId}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}

/**
 * Site-wide configuration: canonical URLs, booking link, nav.
 * Booking is HubSpot (handoff §5): meetings-na2.hubspot.com/jcarter28.
 */
export const site = {
  name: "Prove",
  legalName: "Be Legendary",
  domain: "https://www.provecq.com",
  tagline: "Stop betting on the wrong people.",
  description:
    "Prove gives founders and CEOs behavioral proof of who will deliver — before they promote, hire, or hand over the keys. Powered by the Commitment Quotient (Initiative, Applied Grit, Learnability).",
  bookingUrl: "https://meetings-na2.hubspot.com/jcarter28",
  parentUrl: "https://www.belegendary.org",
  telephone: "+1-800-513-8759",
} as const;

/** Primary nav (dark header). */
export const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "For EOS", href: "/for-eos" },
  { label: "Free tools", href: "/free-tools" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Ethics", href: "/ethics" },
] as const;

/** Footer link columns. */
export const footerCols = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "The Heatmap", href: "/heatmap" },
      { label: "Free tools", href: "/free-tools" },
      { label: "Better Every Day", href: "/better-every-day" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "For EOS", href: "/for-eos" },
      { label: "About", href: "/about" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Work with us", href: "/work-with-us" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Guides", href: "/guides" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
      { label: "What CQ is & isn't", href: "/ethics" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Book a call", href: site.bookingUrl },
      { label: "Be Legendary ↗", href: site.parentUrl },
    ],
  },
] as const;

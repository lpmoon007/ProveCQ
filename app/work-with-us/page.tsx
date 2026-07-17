import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ButtonLink, Container, Eyebrow, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Us — Run Prove With Your Team",
  description:
    "Three ways to work with Prove: a done-with-you Prove sprint for your next big people decision, ongoing Better Every Day for your proven players, and a partner track for EOS Implementers. Start with a call.",
};

const OFFERS = [
  {
    label: "Start here",
    featured: true,
    title: "Prove Sprint",
    price: "$10,000 · up to 35 people · +$100/additional",
    body: "A done-with-you, six-week behavioral sprint for your next big people decision. You get a Commitment Map, the Heatmap, and a blunt leader debrief — proof before you promote, hire, or hand over ownership.",
    best: "Best for: one high-stakes decision, right now.",
    cta: { label: "Book a call", href: site.bookingUrl, variant: "primary" as const },
  },
  {
    label: "Ongoing",
    featured: false,
    title: "Better Every Day",
    price: "$500/mo base + $150/active seat",
    body: "Once players are proven, keep them growing and in motion with weekly tracking, monthly commitments, and drift alerts — the development function SMBs never had. Subscription, per active seat.",
    best: "Best for: keeping your proven core sharp.",
    cta: { label: "See Better Every Day", href: "/better-every-day", variant: "dark" as const },
  },
  {
    label: "Partners",
    featured: false,
    title: "For EOS Implementers",
    price: null,
    body: "Bring a real capacity-measurement tool to your clients. Prove plugs into the People Analyzer and Quarterly Conversations — hard data to pair with your EOS discipline.",
    best: "Best for: implementers & advisors.",
    cta: { label: "See the EOS fit", href: "/for-eos", variant: "dark" as const },
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prove",
  serviceType: "Behavioral assessment for people decisions",
  provider: { "@type": "Organization", name: "Be Legendary", url: site.parentUrl },
  areaServed: "US",
  description:
    "Behavioral proof of who will deliver — before you promote, hire, or hand over the keys. Powered by the Commitment Quotient.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ways to work with Prove",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Prove Sprint",
        price: "10000",
        priceCurrency: "USD",
        description:
          "A done-with-you, six-week behavioral sprint for your next big people decision — a Commitment Map, the Heatmap, and a leader debrief.",
        url: `${site.domain}/work-with-us`,
      },
      {
        "@type": "Offer",
        name: "Better Every Day",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "500",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        description:
          "Ongoing development for your proven players: weekly tracking, monthly commitments, and drift alerts. $500/mo base + $150/active seat.",
        url: `${site.domain}/better-every-day`,
      },
      {
        "@type": "Offer",
        name: "Prove for EOS Implementers",
        description:
          "A capacity-measurement tool that plugs into the People Analyzer and Quarterly Conversations — a complement to your EOS practice.",
        url: `${site.domain}/for-eos`,
      },
    ],
  },
};

export default function WorkWithUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Nav />
      <PageHero
        crumb="Work with us"
        eyebrow="Work with us"
        title="Start where the pain is sharpest."
      >
        Most leaders start with one high-stakes decision — a promotion, a key
        hire, a project handoff — and run a single Prove sprint. From there it
        becomes how you bet on people.
      </PageHero>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {OFFERS.map((o) => (
              <div
                key={o.title}
                className={`flex flex-col rounded-[18px] bg-white p-7 ${o.featured ? "border-2 border-green" : "border border-edge-light"}`}
              >
                <div className={`eyebrow ${o.featured ? "text-green" : "text-content-faint"}`}>
                  {o.label}
                </div>
                <h2 className="mb-1.5 mt-3 font-display text-[24px] font-bold tracking-[-.02em]">
                  {o.title}
                </h2>
                {o.price && (
                  <p className="m-0 mb-3 text-[15px] font-semibold text-content">
                    {o.price}
                  </p>
                )}
                <p className="m-0 mb-4 text-[15px] leading-[1.6] text-[#615B4F]">
                  {o.body}
                </p>
                <p className="m-0 mb-5 text-[14px] font-semibold text-content">
                  {o.best}
                </p>
                <div className="mt-auto">
                  <ButtonLink
                    href={o.cta.href}
                    variant={o.cta.variant}
                    className="w-full px-5 py-3.5 text-[15px]"
                  >
                    {o.cta.label}
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[760px] text-center text-[14.5px] leading-[1.6] text-content-muted">
            Pricing is scoped to your team size and the decision at hand. The
            fastest way to a number is a 20-minute call — we&rsquo;ll recommend the
            smallest first step that gets you proof.
          </p>
        </Container>
      </Section>

      {/* CTA card */}
      <Section tone="paper" className="!pt-0">
        <Container>
          <div className="rounded-[18px] bg-green px-6 py-14 text-center text-white on-dark">
            <h2 className="m-0 mb-4 font-display text-[30px] font-bold tracking-[-.02em] sm:text-[38px]">
              Book a call
            </h2>
            <p className="mx-auto m-0 mb-8 max-w-[620px] text-[18px] leading-[1.6] text-[#E4F5EB]">
              Twenty minutes. Bring your hardest people decision. You&rsquo;ll
              leave knowing exactly how Prove would run it — whether or not we work
              together.
            </p>
            <ButtonLink href={site.bookingUrl} variant="dark" className="text-[17px]">
              Grab a time
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

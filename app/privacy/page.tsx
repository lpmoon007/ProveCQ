import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Section } from "@/components/ui";
import { PageHero } from "@/components/PageParts";
import { site } from "@/lib/site";

const CANONICAL = "/privacy";

export const metadata: Metadata = {
  title: "Privacy & Cookies",
  description:
    "How Prove (provecq.com) handles data and cookies: privacy-friendly analytics that stay off until you consent, form submissions handled by HubSpot, and no selling of personal data.",
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <PageHero crumb="Privacy" eyebrow="Privacy & cookies" title={<>Privacy &amp; cookies</>}>
        Plainly: we collect as little as we can, we don&rsquo;t sell your data,
        and analytics stay off until you say yes. This page explains what that
        means in practice.
      </PageHero>

      <Section tone="paper">
        <Container className="max-w-[760px]">
          <div className="prose-block text-[17px] leading-[1.7] text-[#3A362C]">
            <h2 className="mb-3 mt-0 font-display text-[24px] font-bold tracking-[-.02em]">
              Analytics cookies
            </h2>
            <p className="m-0 mb-6">
              We use Google Analytics 4 to understand which pages are useful and
              where the site can be better. Under Google Consent Mode, analytics
              storage is set to <strong>denied by default</strong> &mdash; no
              analytics cookies are written until you choose{" "}
              <em>Accept</em> on the cookie banner. If you decline, or simply
              ignore the banner, analytics stays off. You can change your mind any
              time by clearing this site&rsquo;s data in your browser, which brings
              the banner back.
            </p>

            <h2 className="mb-3 mt-0 font-display text-[24px] font-bold tracking-[-.02em]">
              Forms and contact
            </h2>
            <p className="m-0 mb-6">
              When you submit a form (for example, the Hidden Gem Identifier) or
              book a call, that information is handled through HubSpot so we can
              respond to you. We use it to reply and to follow up about Prove
              &mdash; nothing else. Booking a call takes you to HubSpot&rsquo;s
              scheduling page, which operates under its own terms.
            </p>

            <h2 className="mb-3 mt-0 font-display text-[24px] font-bold tracking-[-.02em]">
              What we don&rsquo;t do
            </h2>
            <p className="m-0 mb-6">
              We don&rsquo;t sell your personal data, and we don&rsquo;t run
              advertising or ad-personalization cookies on this site. The site is
              served over HTTPS.
            </p>

            <h2 className="mb-3 mt-0 font-display text-[24px] font-bold tracking-[-.02em]">
              Your choices
            </h2>
            <p className="m-0 mb-6">
              You can decline analytics on the banner, use your browser&rsquo;s
              controls to block or delete cookies, and ask us about the
              information we hold. For any privacy question, or to request that we
              update or delete your details,{" "}
              <Link href="/contact" className="font-semibold text-green">
                get in touch
              </Link>
              .
            </p>

            <p className="m-0 text-[14px] text-[#8A8474]">
              This page summarizes how provecq.com currently handles data and is
              provided for transparency. It isn&rsquo;t legal advice; for
              formal requests, contact {site.legalName} via the{" "}
              <Link href="/contact" className="font-semibold text-green">
                contact page
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

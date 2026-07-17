import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, Container, Eyebrow } from "./ui";
import { site } from "@/lib/site";

/** Dark page hero with a Home breadcrumb, eyebrow, H1, and lede. */
export function PageHero({
  crumb,
  eyebrow,
  title,
  children,
}: {
  crumb: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="bg-ink px-5 py-16 text-paper sm:px-8 md:py-[84px] on-dark">
      <Container>
        <div className="mb-3.5 text-[13px] font-semibold text-content-faint">
          <Link href="/" className="text-content-faint hover:text-paper">
            Home
          </Link>{" "}
          &rsaquo; {crumb}
        </div>
        <Eyebrow tone="soft">{eyebrow}</Eyebrow>
        <h1 className="mb-4 mt-3.5 max-w-[860px] font-display text-[36px] font-bold leading-[1.05] tracking-tightest sm:text-[52px]">
          {title}
        </h1>
        <div className="max-w-[700px] text-[18px] leading-[1.6] text-[#B8B4A6]">
          {children}
        </div>
      </Container>
    </section>
  );
}

/**
 * Green closing CTA band — a two-rung conversion ladder: the high-commitment
 * ask (book a call) plus a low-commitment path (free diagnostic), with a
 * risk-reversal microline. Pass `secondary={null}` to show only the primary.
 */
export function CTASection({
  title,
  children,
  cta = "Book a call",
  href = site.bookingUrl,
  secondaryCta = "Or take the free 2-minute diagnostic",
  secondaryHref = "/free-tools/certainty-diagnostic",
  note = "20-minute call · no prep, no pitch, no obligation",
}: {
  title: string;
  children: ReactNode;
  cta?: string;
  href?: string;
  secondaryCta?: string | null;
  secondaryHref?: string;
  note?: string | null;
}) {
  return (
    <section className="bg-green px-5 py-16 text-center text-white sm:px-8 md:py-20 on-dark">
      <div className="mx-auto max-w-[760px]">
        <h2 className="m-0 mb-4 font-display text-[30px] font-bold leading-[1.06] tracking-[-.02em] sm:text-[40px]">
          {title}
        </h2>
        <p className="m-0 mb-8 text-[18px] leading-[1.6] text-[#E4F5EB]">
          {children}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <ButtonLink href={href} variant="dark" className="text-[17px]">
            {cta}
          </ButtonLink>
          {secondaryCta && (
            <Link
              href={secondaryHref}
              className="text-[15px] font-bold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
            >
              {secondaryCta} &rarr;
            </Link>
          )}
        </div>
        {note && (
          <p className="m-0 mt-6 text-[13.5px] font-medium text-[#CDEBD9]">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}

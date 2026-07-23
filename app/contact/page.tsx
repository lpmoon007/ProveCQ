import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Container, Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Book a Call — Prove",
  description:
    "Book a 20-minute call to see how Prove would run your next big people decision — a promotion, a key hire, a project handoff. Bring your hardest call; leave with a plan.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-20">
        <Container className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Book a call</Eyebrow>
            <h1 className="mb-4 mt-3.5 font-display text-[34px] font-bold leading-[1.05] tracking-tightest sm:text-[44px]">
              Bring your hardest people decision.
            </h1>
            <p className="m-0 mb-8 text-[18px] leading-[1.6] text-content-muted">
              Twenty minutes. We&rsquo;ll walk a real Heatmap and map how a Prove
              cycle would run for your next promotion, key hire, or project
              handoff — whether or not we end up working together.
            </p>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[11px] bg-green px-7 py-4 text-base font-bold text-white transition-colors hover:bg-green-700"
            >
              <span aria-hidden>📅</span> Grab a time on the calendar
            </a>
            <div className="mt-6 flex flex-col gap-1.5 text-[15px] text-content-muted">
              <span>
                Prefer email?{" "}
                <a href="mailto:hello@provecq.com" className="text-green">
                  hello@provecq.com
                </a>
              </span>
              <span>
                Phone:{" "}
                <a href="tel:8005138759" className="text-green">
                  800-513-8759
                </a>
              </span>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
      <Footer />
    </>
  );
}

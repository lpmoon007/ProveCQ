import Link from "next/link";
import { footerCols, site } from "@/lib/site";
import { BrandMark } from "./ui";

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  const cls = "text-[#8C877A] transition-colors hover:text-paper";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {label}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink-2 px-5 pb-10 pt-[54px] text-[#8C877A] sm:px-8 on-dark">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-9 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5 text-paper">
            <BrandMark size={30} />
            <span className="font-display text-[17px] font-bold">Prove</span>
          </div>
          <p className="m-0 max-w-[280px] text-sm leading-relaxed">
            Behavioral proof of who will deliver — before you bet on them.
            Powered by the Commitment Quotient™. A Be Legendary company.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <div className="mb-3 text-sm font-bold text-paper">{col.title}</div>
            <div className="flex flex-col gap-2 text-sm">
              {col.links.map((l) => (
                <FooterLink key={l.label} href={l.href} label={l.label} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[34px] max-w-content border-t border-[#221F17] pt-[22px] text-[13px] text-[#605C51]">
        ©2026 {site.legalName}. All rights reserved. Commitment Quotient™, Prove™
        and Better Every Day™ are trademarks of Be Legendary.
      </div>
    </footer>
  );
}

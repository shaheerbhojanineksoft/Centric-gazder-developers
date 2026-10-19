import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';
import { residencia } from '../data/projects';
import { formatNumber, formatPKR } from '../lib/format';
import { whatsappHref } from '../data/site';

const terms = [
  'All instalments are payable before the 10th of each month.',
  'Payments by cash, cheque, pay-order or demand draft in favour of the company.',
  'Two car parking spaces are included in the unit price.',
  'Corner and west-open apartments carry additional charges as per company policy.',
  'Documentation, utility and sub-lease charges are payable on demand.',
];

export function PaymentPlan() {
  return (
    <section id="payment-plan" className="border-t border-cream/10 bg-ink py-24 sm:py-32">
      <div className="container-cg">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionLabel index="09">Payment Plan</SectionLabel>
            <h2 className="display mt-5 text-[clamp(2.8rem,5vw,4.8rem)]">
              A payment plan designed <em className="gold-text italic">around you.</em>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="max-w-xl text-sm leading-relaxed text-cream/60 sm:text-[15px]">
              Transparent, staged and built around construction milestones. Choose your
              residence and review the complete schedule below — our team can confirm current
              availability and terms.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {residencia.units.map((unit, index) => (
            <Reveal key={unit.id} delay={index * 70}>
              <article className="flex h-full flex-col border border-cream/10 bg-charcoal p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow">{unit.label}</p>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                      {formatNumber(unit.areaSqFt)} sq ft &middot; {unit.bedrooms} bedrooms
                    </p>
                  </div>
                  <span className="font-serif text-2xl text-cream/20">0{index + 1}</span>
                </div>

                <div className="mt-7">
                  <p className="font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-none text-gold">
                    {formatPKR(unit.totalPrice)}
                  </p>
                  <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/40">
                    Total price
                  </p>
                </div>

                <div className="mt-6 divide-y divide-cream/10 border-y border-cream/10">
                  <div className="flex items-start justify-between gap-4 py-3">
                    <div>
                      <p className="text-[11px] text-cream/75">On booking</p>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-cream/35">15%</p>
                    </div>
                    <p className="text-right text-[11px] font-medium text-cream/80">
                      {formatPKR(unit.booking)}
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4 py-3">
                    <div>
                      <p className="text-[11px] text-cream/75">Start of work</p>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-cream/35">10%</p>
                    </div>
                    <p className="text-right text-[11px] font-medium text-cream/80">
                      {formatPKR(unit.startOfWork)}
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4 py-3">
                    <div>
                      <p className="text-[11px] text-cream/75">Monthly instalments</p>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-cream/35">
                        &times; {unit.monthlyCount} months
                      </p>
                    </div>
                    <p className="text-right text-[11px] font-medium text-cream/80">
                      {formatPKR(unit.monthly)}
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-4 py-3">
                    <div>
                      <p className="text-[11px] text-cream/75">On possession</p>
                      <p className="text-[9px] uppercase tracking-[0.16em] text-cream/35">10%</p>
                    </div>
                    <p className="text-right text-[11px] font-medium text-cream/80">
                      {formatPKR(unit.possession)}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-2.5 pt-6">
                  <a
                    href={whatsappHref(
                      `Hello Centric Gazdar, I would like the full payment schedule and availability for ${unit.label} at Residencia.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold w-full"
                  >
                    Request full schedule
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/downloads/centric-gazdar-residencia-payment-plan.pdf"
                    download
                    className="btn-outline w-full"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download plan
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-8 border border-cream/10 p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-gold">
                Terms &amp; conditions
              </p>
              <p className="mt-3 text-xs leading-relaxed text-cream/45">
                Payment schedule as per the current plan. Please confirm availability and
                current terms with our team before booking.
              </p>
            </div>
            <ul className="space-y-2.5">
              {terms.map((term) => (
                <li key={term} className="flex gap-3 text-[11px] leading-relaxed text-cream/60">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

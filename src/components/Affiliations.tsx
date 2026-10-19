const affiliations = [
  ['A subsidiary of', 'Pakasia Group of Companies'],
  ['Architecture by', 'A.R.A Studio'],
  ['Marketed by', 'Alif Estate'],
  ['Visualised by', 'Render 360'],
];

export function Affiliations() {
  return (
    <section className="border-y border-cream/10 bg-charcoal">
      <div className="container-cg grid grid-cols-2 gap-x-6 gap-y-6 py-7 sm:py-8 lg:grid-cols-4 lg:gap-10">
        {affiliations.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1.5">
            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-gold/70 sm:text-[9px]">
              {label}
            </span>
            <span className="text-xs font-medium text-cream/85 sm:text-sm">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

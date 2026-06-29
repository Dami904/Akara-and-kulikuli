import Image from "next/image";

/* ─── DATA ────────────────────────────────────────────────────── */

const niches = [
  {
    key: "akara",
    label: "The morning rush",
    name: "Akara",
    accent: "palm" as const,
    desc: "Roadside frying pots are turning into branded breakfast spots. We build sites that show your menu, take pre-orders before the oil is even hot, and make people drive across town for your beans.",
    lead: "/images/hero.jpg",
    leadAlt: "Golden akara served with dipping sauce",
    a: "/images/frying-2.jpg",
    aAlt: "Akara frying street-style in a wide pan",
    b: "/images/akara-bread.jpg",
    bAlt: "Akara tucked into agege bread",
  },
  {
    key: "kulikuli",
    label: "The shelf snack",
    name: "Kulikuli",
    accent: "nut" as const,
    desc: "Crunchy groundnut cake is going premium — gold pouches, real labels, real brands. We give kulikuli makers an online store worth screenshotting, so a snack from one market reaches three states.",
    lead: "/images/kulikuli-owner.jpg",
    leadAlt: "Kulikuli founder holding her branded pack",
    a: "/images/kulikuli-gold-pack.jpg",
    aAlt: "Gold-foil branded kulikuli pouch",
    b: "/images/kulikuli-floral-pack.jpg",
    bAlt: "Floral-printed kulikuli pouch",
  },
];

const offerings = [
  { title: "Brand website", desc: "A homepage that carries your story — who you are, what you sell, where to find you." },
  { title: "Order on WhatsApp", desc: "A tap-to-order button wired to your phone. No commission, no middleman, no app." },
  { title: "Built for phones", desc: "Almost every customer is on mobile. Your site looks sharp there first, always." },
  { title: "Menu & gallery", desc: "Every variant — spicy, plain, combo, pack sizes — laid out to make people hungry." },
  { title: "Found on the map", desc: "Google Maps, hours, and delivery zones so nobody guesses where you are." },
  { title: "Fast & searchable", desc: "Loads in a blink and shows up when people search your food in your city." },
];

const steps = [
  { n: "01", title: "Tell us your story", desc: "A short call and a simple form. Your menu, your prices, your vibe — we take it from there." },
  { n: "02", title: "We design & build", desc: "Photos, words, and code come together in about a week. You watch it take shape." },
  { n: "03", title: "Go live & grow", desc: "We launch, walk you through it, and stay on for 30 days while the orders start." },
];

const quotes = [
  { accent: "palm" as const, text: "It was live in twelve days. Now people pre-order before I start frying. I doubled what I make in a month.", name: "Adaeze Nwosu", biz: "Akara by Ada — Enugu" },
  { accent: "nut" as const, text: "I didn't think a website could move kulikuli. Two months later I'm shipping to three states because people find me online.", name: "Bola Okafor", biz: "Bola's Kulikuli — Lagos" },
  { accent: "leaf" as const, text: "The order button alone changed everything. Customers screenshot my menu and send it to their people. Business feels proper now.", name: "Fatima Musa", biz: "Fatima's Spot — Abuja" },
];

const plans = [
  { name: "Roadside", price: "150k", note: "for the home kitchen", feats: ["5-page website", "Menu & gallery", "WhatsApp orders", "Mobile-ready", "1 month support"], featured: false },
  { name: "Storefront", price: "280k", note: "for the growing brand", feats: ["Everything in Roadside", "Online order system", "Maps & search setup", "Instagram feed", "3 months support"], featured: true },
  { name: "Flagship", price: "500k", note: "for the premium label", feats: ["Everything in Storefront", "Custom brand identity", "Delivery-zone map", "Loyalty / waitlist", "6 months support"], featured: false },
];

const tickerWords = ["Fresh akara", "Crunchy kulikuli", "Order online", "Built for phones", "Live in 14 days", "Made in Naija"];

/* ─── SMALL PIECES ────────────────────────────────────────────── */

const accentBg: Record<string, string> = { palm: "bg-palm", nut: "bg-nut", leaf: "bg-leaf", gold: "bg-gold" };
const accentText: Record<string, string> = { palm: "text-palm", nut: "text-nut", leaf: "text-leaf", gold: "text-gold" };

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[11px] tracking-[0.25em] uppercase ${className}`}>{children}</span>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-12 py-4 bg-paper/90 backdrop-blur border-b-2 border-ink">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-ink">
            <span className="w-2.5 h-2.5 rounded-full bg-palm" />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight">
            web3<span className="text-palm">nova</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Niches", "What you get", "Pricing"].map((l) => (
            <a key={l} href={`#${l.replace(/\s+/g, "-").toLowerCase()}`} className="font-mono text-xs tracking-wide uppercase text-ink/60 hover:text-ink transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-ink text-paper font-display font-bold text-sm px-5 py-2.5 rounded-lg shadow-[4px_4px_0_0_var(--color-palm)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-palm)] transition-all"
        >
          Start a site
        </a>
      </nav>

      <main id="top">
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="px-5 md:px-12 pt-14 md:pt-20 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <Eyebrow className="text-nut">Web studio · building for Naija food</Eyebrow>
            <h1 className="font-display font-extrabold tracking-[-0.02em] leading-[0.92] text-[clamp(2.6rem,7vw,5rem)] mt-5">
              Bold websites
              <br />
              for <span className="text-palm">akara</span> &amp;
              <br />
              <span className="text-nut">kulikuli</span> brands.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/70 max-w-md">
              From the frying pan to the front page. We design fast, beautiful sites that take orders and turn your street-food into a brand people remember.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-palm text-paper font-display font-bold px-7 py-3.5 rounded-lg border-2 border-ink shadow-[5px_5px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_var(--color-ink)] transition-all"
              >
                Start your website
              </a>
              <a
                href="#niches"
                className="bg-paper font-display font-bold px-7 py-3.5 rounded-lg border-2 border-ink hover:bg-ink hover:text-paper transition-colors"
              >
                See the work
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[11px] tracking-wide uppercase text-ink/55">
              <span><b className="text-ink">50+</b> brands built</span>
              <span><b className="text-ink">14-day</b> delivery</span>
              <span><b className="text-ink">orders</b> on whatsapp</span>
            </div>
          </div>

          {/* Composed anchor: real founder, framed like a printed photo */}
          <div className="relative mx-auto w-[min(20rem,78vw)] sm:w-[min(22rem,70vw)] lg:w-full lg:max-w-none mt-12 mb-10 lg:my-0">
            {/* offset color block behind */}
            <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 md:translate-x-5 md:translate-y-5 bg-leaf rounded-2xl" aria-hidden />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-ink">
              <Image src="/images/kulikuli-owner.jpg" alt="A kulikuli founder holding her branded pack" fill priority className="object-cover object-top" sizes="(max-width:1024px) 78vw, 40vw" />
            </div>
            {/* rotated stamp */}
            <div className="absolute -top-7 -left-3 sm:-left-5 rotate-[-12deg]">
              <div className="grid place-items-center w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 rounded-full bg-gold border-2 border-ink text-center shadow-[3px_3px_0_0_var(--color-ink)]">
                <span className="font-mono text-[9px] sm:text-[10px] leading-tight tracking-widest uppercase font-bold">
                  Fresh
                  <br />
                  daily
                  <br />
                  ★
                </span>
              </div>
            </div>
            {/* small pinned product label */}
            <div className="absolute -bottom-6 -right-2 sm:right-2 md:right-6 rotate-[6deg] w-24 sm:w-28 rounded-lg overflow-hidden border-2 border-ink shadow-[3px_3px_0_0_var(--color-ink)] bg-paper">
              <div className="relative aspect-square">
                <Image src="/images/hero.jpg" alt="Golden akara" fill className="object-cover" sizes="120px" />
              </div>
              <div className="px-2 py-1 font-mono text-[9px] tracking-widest uppercase">Akara · hot</div>
            </div>
          </div>
        </section>

        {/* ── TICKER (signature) ────────────────────────────────── */}
        <div className="bg-ink text-paper border-y-2 border-ink overflow-hidden py-3 select-none">
          <div className="ticker-track flex w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
                {tickerWords.map((w, i) => (
                  <span key={i} className="flex items-center font-display font-bold text-xl md:text-2xl px-6">
                    {w}
                    <span className="ml-6 text-palm">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── NICHES ────────────────────────────────────────────── */}
        <section id="niches" className="px-5 md:px-12 py-20 md:py-28">
          <header className="max-w-2xl">
            <Eyebrow className="text-palm">Two trends, one studio</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] mt-3">
              We only build for Nigerian street food.
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              That focus is the point. We know your customer, your rush hours, and what makes someone order again — because we&apos;ve done it for both of these.
            </p>
          </header>

          <div className="mt-16 flex flex-col gap-20 md:gap-28">
            {niches.map((n, idx) => {
              const flipped = idx % 2 === 1;
              return (
                <article key={n.key} className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                  {/* text */}
                  <div className={flipped ? "md:order-2" : ""}>
                    <div className="flex items-center gap-3">
                      <span className={`inline-block w-3.5 h-3.5 ${accentBg[n.accent]} border-2 border-ink rounded-sm`} />
                      <Eyebrow className="text-ink/55">{n.label}</Eyebrow>
                    </div>
                    <h3 className={`font-display font-extrabold tracking-tight text-[clamp(2.4rem,5vw,3.5rem)] leading-none mt-3 ${accentText[n.accent]}`}>
                      {n.name}
                    </h3>
                    <p className="mt-5 text-ink/70 leading-relaxed max-w-md">{n.desc}</p>
                    <a
                      href="#contact"
                      className={`inline-block mt-7 ${accentBg[n.accent]} text-paper font-display font-bold px-6 py-3 rounded-lg border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all`}
                    >
                      Build my {n.name.toLowerCase()} site →
                    </a>
                  </div>

                  {/* images — lead + two supporting, deliberate framing */}
                  <div className={`grid grid-cols-5 grid-rows-2 gap-2.5 sm:gap-3 h-[300px] sm:h-[340px] md:h-[380px] ${flipped ? "md:order-1" : ""}`}>
                    <div className="col-span-3 row-span-2 relative">
                      <div className={`absolute inset-0 translate-x-3 translate-y-3 ${accentBg[n.accent]} rounded-xl`} aria-hidden />
                      <div className="relative h-full rounded-xl overflow-hidden border-2 border-ink">
                        <Image src={n.lead} alt={n.leadAlt} fill className="object-cover object-top" sizes="40vw" />
                      </div>
                    </div>
                    <div className="col-span-2 relative rounded-xl overflow-hidden border-2 border-ink">
                      <Image src={n.a} alt={n.aAlt} fill className="object-cover" sizes="25vw" />
                    </div>
                    <div className="col-span-2 relative rounded-xl overflow-hidden border-2 border-ink">
                      <Image src={n.b} alt={n.bAlt} fill className="object-cover" sizes="25vw" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── WHAT YOU GET ──────────────────────────────────────── */}
        <section id="what-you-get" className="bg-ink text-paper px-5 md:px-12 py-20 md:py-28">
          <header className="max-w-2xl">
            <Eyebrow className="text-gold">What you get</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] mt-3">
              Everything the website needs. Nothing it doesn&apos;t.
            </h2>
          </header>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {offerings.map((o) => (
              <div key={o.title} className="border-t-2 border-paper/25 pt-5">
                <div className="flex items-baseline gap-3">
                  <span className="w-2.5 h-2.5 bg-palm rounded-sm shrink-0 translate-y-[-2px]" />
                  <h3 className="font-display font-bold text-xl">{o.title}</h3>
                </div>
                <p className="mt-2 text-paper/60 leading-relaxed pl-[22px]">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GALLERY ───────────────────────────────────────────── */}
        <section className="px-5 md:px-12 py-20 md:py-28">
          <header className="max-w-2xl">
            <Eyebrow className="text-palm">Straight from the pan</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] mt-3">
              We know your world.
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">
              The bubbling oil, the gold pouch, the agege bread. We design like people who actually eat this.
            </p>
          </header>
          <div className="mt-12 columns-2 md:columns-3 gap-3 [&>*]:mb-3">
            {[
              { s: "/images/akara-plate-2.jpg", a: "A plate of fresh akara" },
              { s: "/images/kulikuli-gold-pack.jpg", a: "Premium gold kulikuli pack" },
              { s: "/images/frying-2.jpg", a: "Akara frying street-style" },
              { s: "/images/kulikuli-floral-pack.jpg", a: "Floral kulikuli pack" },
              { s: "/images/akara-bread.jpg", a: "Akara in agege bread" },
              { s: "/images/chips-bowl.jpg", a: "Crispy akara chips in a bowl" },
            ].map((g) => (
              <div key={g.s} className="break-inside-avoid rounded-xl overflow-hidden border-2 border-ink">
                <Image src={g.s} alt={g.a} width={600} height={420} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────────── */}
        <section className="bg-leaf text-paper px-5 md:px-12 py-20 md:py-28">
          <header className="max-w-2xl">
            <Eyebrow className="text-paper/70">How it goes</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] mt-3">
              Pan to published in two weeks.
            </h2>
          </header>
          <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="grid place-items-center w-14 h-14 rounded-lg bg-paper text-ink font-display font-extrabold text-xl border-2 border-ink shadow-[4px_4px_0_0_rgba(0,0,0,0.35)]">
                  {s.n}
                </div>
                <h3 className="font-display font-bold text-2xl mt-5">{s.title}</h3>
                <p className="mt-2 text-paper/75 leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────── */}
        <section className="px-5 md:px-12 py-20 md:py-28">
          <header className="max-w-2xl">
            <Eyebrow className="text-palm">In their words</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] mt-3">
              The sellers who went online.
            </h2>
          </header>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {quotes.map((q) => (
              <figure key={q.name} className="bg-paper border-2 border-ink rounded-xl p-7 flex flex-col shadow-[5px_5px_0_0_var(--color-ink)]">
                <span className={`font-display font-extrabold text-5xl leading-none ${accentText[q.accent]}`} aria-hidden>&ldquo;</span>
                <blockquote className="mt-2 text-ink/80 leading-relaxed flex-1">{q.text}</blockquote>
                <figcaption className="mt-6 pt-4 border-t-2 border-ink/10">
                  <div className="font-display font-bold">{q.name}</div>
                  <div className="font-mono text-[11px] tracking-wide uppercase text-ink/50 mt-0.5">{q.biz}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────────── */}
        <section id="pricing" className="px-5 md:px-12 py-20 md:py-28 bg-gold/15 border-y-2 border-ink">
          <header className="max-w-2xl">
            <Eyebrow className="text-nut">Pick your pack</Eyebrow>
            <h2 className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2rem,4.5vw,3.25rem)] mt-3">
              One price. Yours to keep.
            </h2>
            <p className="mt-4 text-ink/65 leading-relaxed">No subscriptions, no hidden fees. Pay once, own the website forever.</p>
          </header>
          <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-xl border-2 border-ink p-8 flex flex-col ${
                  p.featured
                    ? "bg-ink text-paper shadow-[7px_7px_0_0_var(--color-palm)] md:-translate-y-3"
                    : "bg-paper shadow-[5px_5px_0_0_var(--color-ink)]"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-7 bg-palm text-paper font-mono text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded border-2 border-ink">
                    Most picked
                  </span>
                )}
                <div className={`font-mono text-[11px] tracking-widest uppercase ${p.featured ? "text-gold" : "text-nut"}`}>{p.name}</div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-5xl tracking-tight">₦{p.price}</span>
                </div>
                <div className={`font-mono text-[11px] tracking-wide uppercase mt-1 ${p.featured ? "text-paper/55" : "text-ink/45"}`}>{p.note}</div>
                <ul className="mt-6 flex flex-col gap-3 flex-1">
                  {p.feats.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-snug">
                      <span className={`font-bold mt-px ${p.featured ? "text-palm" : "text-palm"}`}>✓</span>
                      <span className={p.featured ? "text-paper/85" : "text-ink/75"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 text-center font-display font-bold py-3 rounded-lg border-2 border-ink transition-all ${
                    p.featured
                      ? "bg-palm text-paper shadow-[4px_4px_0_0_var(--color-paper)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-paper)]"
                      : "bg-paper hover:bg-ink hover:text-paper"
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT / CTA ─────────────────────────────────────── */}
        <section id="contact" className="px-5 md:px-12 py-24 md:py-32 text-center">
          <Eyebrow className="text-palm">Let&apos;s cook</Eyebrow>
          <h2 className="font-display font-extrabold tracking-[-0.02em] leading-[0.9] text-[clamp(2.4rem,6vw,4.5rem)] mt-4 max-w-3xl mx-auto">
            Put your food on the map.
          </h2>
          <p className="mt-5 text-ink/65 leading-relaxed max-w-md mx-auto">
            Akara, kulikuli, or whatever you fry next — tell us about it and we&apos;ll build the website this week.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:hello@web3nova.com"
              className="bg-palm text-paper font-display font-bold px-8 py-4 rounded-lg border-2 border-ink shadow-[5px_5px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_var(--color-ink)] transition-all"
            >
              Start your website
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paper font-display font-bold px-8 py-4 rounded-lg border-2 border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-ink text-paper px-5 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-7 h-7 rounded-md bg-paper">
                <span className="w-2.5 h-2.5 rounded-full bg-palm" />
              </span>
              <span className="font-display font-extrabold text-xl">
                web3<span className="text-palm">nova</span>
              </span>
            </div>
            <p className="mt-3 font-mono text-[11px] tracking-wide uppercase text-paper/50 max-w-xs leading-relaxed">
              Websites for Nigeria&apos;s street-food brands.
            </p>
          </div>
          <div className="flex gap-6 font-mono text-xs tracking-wide uppercase">
            {["Instagram", "Twitter / X", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="text-paper/60 hover:text-palm transition-colors">{s}</a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t-2 border-paper/15 font-mono text-[11px] tracking-wide uppercase text-paper/40">
          © 2025 Web3Nova · Made in Naija
        </div>
      </footer>
    </>
  );
}

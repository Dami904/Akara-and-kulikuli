import Image from "next/image";

/* ─── DATA ────────────────────────────────────────────────────── */

const niches = [
  {
    tag: "🫘 Akara",
    title: "Akara Businesses",
    desc: "From roadside frying pots to branded breakfast cafés — we build sites that help akara entrepreneurs take orders, list their menu, and go viral.",
    color: "orange",
    images: [
      { src: "/images/hero.jpg", alt: "Premium akara served" },
      { src: "/images/akara-bread.jpg", alt: "Akara in agege bread" },
      { src: "/images/frying-2.jpg", alt: "Akara frying street-style" },
    ],
  },
  {
    tag: "🥜 Kulikuli",
    title: "Kulikuli Businesses",
    desc: "Nigeria's crunchiest snack is getting premium packaging and brand identities. We help kulikuli sellers go from market stalls to online stores with real brand presence.",
    color: "amber",
    images: [
      { src: "/images/kulikuli-owner.jpg", alt: "Kulikuli brand owner" },
      { src: "/images/kulikuli-gold-pack.jpg", alt: "Gold branded kulikuli pouch" },
      { src: "/images/kulikuli-floral-pack.jpg", alt: "Floral branded kulikuli pouch" },
    ],
  },
];

const services = [
  { icon: "🌐", title: "Brand Website", desc: "A stunning homepage that tells your food story — menu, photos, location, and social links all in one place." },
  { icon: "🛒", title: "Online Ordering", desc: "Customers order directly via WhatsApp or a custom checkout. No third-party commission fees." },
  { icon: "📱", title: "Mobile-First Design", desc: "95% of your customers are on phones. Every site we build is flawless on mobile from day one." },
  { icon: "📸", title: "Photo Gallery & Menu", desc: "Mouth-watering food galleries with a clean digital menu — every variant laid out beautifully." },
  { icon: "📍", title: "Location & Hours", desc: "Google Maps embed, opening hours, and delivery zones so customers always know where to find you." },
  { icon: "⚡", title: "Fast & SEO-Ready", desc: "Built with Next.js for lightning speed. Rank on Google when people search your product in your city." },
];

const steps = [
  { num: "01", title: "Brief & Discovery", desc: "We hop on a quick call, learn your brand, your menu, your vibe. You fill in a simple form — we handle the rest." },
  { num: "02", title: "Design & Build", desc: "Our team designs your site, writes the content, and builds it in Next.js — fast, modern, mobile-perfect." },
  { num: "03", title: "Launch & Grow", desc: "You review, we tweak, then go live. We hand you the keys with a full walkthrough and 30-day support." },
];

const testimonials = [
  { quote: "Web3Nova built my akara site in 12 days. Now I get pre-orders every morning before I even start frying. Revenue doubled in month one.", name: "Adaeze Nwosu", biz: "Akara by Ada, Enugu", initial: "A", color: "orange" },
  { quote: "I was sceptical a website could help sell kulikuli. Two months later I'm shipping across three states because customers find me on Google.", name: "Bola Okafor", biz: "Bola's Kulikuli, Lagos", initial: "B", color: "amber" },
  { quote: "The WhatsApp order button alone changed my life. People screenshot my menu and share it. My business finally feels proper.", name: "Fatima Musa", biz: "Fatima's Akara Spot, Abuja", initial: "F", color: "orange" },
];

const plans = [
  {
    name: "Starter",
    price: "₦150k",
    desc: "Perfect for home-based food sellers",
    features: ["5-page brand website", "Menu & photo gallery", "WhatsApp order button", "Mobile-optimised", "1 month support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "₦280k",
    desc: "For food businesses ready to scale",
    features: ["Everything in Starter", "Online ordering system", "Google Maps & SEO setup", "Instagram feed integration", "3 months support"],
    featured: true,
  },
  {
    name: "Premium",
    price: "₦500k",
    desc: "Full-service for premium food brands",
    features: ["Everything in Growth", "Custom brand identity", "Delivery zone map", "Loyalty / waitlist system", "6 months support"],
    featured: false,
  },
];

const gallery = [
  { src: "/images/akara-plate-2.jpg", alt: "Fresh akara on a plate" },
  { src: "/images/kulikuli-owner.jpg", alt: "Kulikuli brand owner" },
  { src: "/images/frying-2.jpg", alt: "Akara frying street-style" },
  { src: "/images/kulikuli-gold-pack.jpg", alt: "Premium gold kulikuli pack" },
  { src: "/images/akara-bread.jpg", alt: "Akara in agege bread" },
  { src: "/images/kulikuli-floral-pack.jpg", alt: "Floral kulikuli pack" },
];

/* ─── PAGE ────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 bg-white/95 backdrop-blur border-b border-gray-100">
        <span className="text-lg font-bold tracking-tight text-[#111]">
          web3<span className="text-orange-500">nova</span>
        </span>
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-500">
          {["Services", "Niches", "Pricing", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-[#111] transition-colors">{l}</a>
          ))}
        </div>
        <a href="#contact" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
          Get Your Website →
        </a>
      </nav>

      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative grid md:grid-cols-2 gap-10 items-center px-6 md:px-14 py-20 min-h-[90vh] bg-[#fffaf5]">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[80px] opacity-60" />
            <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-amber-100 rounded-full blur-[80px] opacity-40" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Nigeria&apos;s Street Food is Going Premium
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#111] mb-5">
              We Build Websites<br />
              for <span className="text-orange-500">Akara</span> &<br />
              <span className="text-amber-600">Kulikuli</span> Businesses.
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Beautiful, fast websites that take orders, tell your food story, and grow your brand online — built specifically for Nigerian street food entrepreneurs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold px-7 py-3.5 rounded-xl text-base shadow-lg shadow-orange-200">
                Start Your Website Today
              </a>
              <a href="#niches" className="border border-gray-200 hover:border-gray-400 transition-colors text-[#111] font-semibold px-7 py-3.5 rounded-xl text-base bg-white">
                See What We Build ↓
              </a>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden border border-orange-100 shadow-lg h-[340px] col-span-2">
              <Image src="/images/kulikuli-owner.jpg" alt="Kulikuli business owner" fill className="object-cover object-top" priority />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur border border-orange-100 rounded-xl px-4 py-3 text-sm shadow">
                <span className="text-orange-500 text-2xl font-extrabold block leading-none">50+</span>
                <span className="text-gray-600">Food brands launched</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow h-[180px]">
              <Image src="/images/hero.jpg" alt="Premium akara" fill className="object-cover" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-amber-100 shadow h-[180px]">
              <Image src="/images/kulikuli-gold-pack.jpg" alt="Branded kulikuli pack" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── STATS ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-100 bg-gray-50">
          {[
            { num: "50+", label: "Websites Launched" },
            { num: "14", label: "Days Avg Delivery" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "3×", label: "Avg Revenue Increase" },
          ].map((s, i) => (
            <div key={i} className={`px-8 py-9 text-center ${i < 3 ? "border-r border-gray-100" : ""}`}>
              <div className="text-3xl md:text-4xl font-extrabold text-orange-500 tracking-tight">{s.num}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── NICHES ─────────────────────────────────────────────── */}
        <section id="niches" className="px-6 md:px-14 py-24">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">🎯 Our Niches</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-2">
            We Specialise in Nigerian<br />Street Food Businesses
          </h2>
          <p className="text-gray-400 text-sm mb-16 max-w-md">Two booming niches. One agency that knows them deeply.</p>

          <div className="flex flex-col gap-20">
            {niches.map((n, idx) => (
              <div key={n.title} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 ${n.color === "orange" ? "bg-orange-50 text-orange-600" : "bg-amber-50 text-amber-700"}`}>
                    {n.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#111] mb-3">{n.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 max-w-md">{n.desc}</p>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors ${
                      n.color === "orange"
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-100"
                        : "bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-100"
                    }`}
                  >
                    Build my {n.color === "orange" ? "Akara" : "Kulikuli"} site →
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[280px] row-span-2">
                    <Image src={n.images[0].src} alt={n.images[0].alt} fill className="object-cover object-top" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[132px]">
                    <Image src={n.images[1].src} alt={n.images[1].alt} fill className="object-cover" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[132px]">
                    <Image src={n.images[2].src} alt={n.images[2].alt} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SERVICES ───────────────────────────────────────────── */}
        <section id="services" className="px-6 md:px-14 py-24 bg-gray-50">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">🛠 What We Build</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-2">Everything Your Business<br />Needs Online</h2>
          <p className="text-gray-400 text-sm mb-12 max-w-md">One agency that handles it all — design, dev, content, and launch.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-2xl mb-5">{s.icon}</div>
                <h3 className="font-bold text-[#111] mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── GALLERY ────────────────────────────────────────────── */}
        <section className="px-6 md:px-14 py-24">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">📸 The Products</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-2">We Know Your World</h2>
          <p className="text-gray-400 text-sm mb-12 max-w-md">We don&apos;t just build sites — we understand akara, kulikuli, your customers, and the culture around it all.</p>
          <div className="columns-2 md:columns-3 gap-3 space-y-3">
            {gallery.map((img) => (
              <div key={img.src} className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm break-inside-avoid">
                <Image src={img.src} alt={img.alt} width={600} height={400} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────────────────────── */}
        <section className="px-6 md:px-14 py-24 bg-[#fffaf5]">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">⚙️ The Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111]">From Idea to Live Website<br />in 14 Days</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px border-t-2 border-dashed border-orange-200" />
            {steps.map((s) => (
              <div key={s.num} className="text-center px-4">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white text-lg font-extrabold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">{s.num}</div>
                <h3 className="font-bold text-[#111] mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────── */}
        <section className="px-6 md:px-14 py-24">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">💬 Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-12">Food Entrepreneurs<br />Who Went Digital</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col gap-5 shadow-sm">
                <div className="text-orange-400 text-sm">★★★★★</div>
                <p className="text-gray-500 text-sm leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0 ${t.color === "orange" ? "bg-gradient-to-br from-orange-400 to-orange-600" : "bg-gradient-to-br from-amber-400 to-amber-600"}`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#111]">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.biz}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PRICING ────────────────────────────────────────────── */}
        <section id="pricing" className="px-6 md:px-14 py-24 bg-gray-50">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">💰 Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111] mb-3">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 text-sm">No hidden fees. No surprises. Pay once, own it forever.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl p-8 flex flex-col gap-5 border ${p.featured ? "border-orange-400 bg-white shadow-xl shadow-orange-100" : "border-gray-200 bg-white shadow-sm"}`}>
                {p.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${p.featured ? "text-orange-500" : "text-gray-400"}`}>{p.name}</p>
                  <div className="text-4xl font-extrabold tracking-tight text-[#111]">{p.price}</div>
                  <div className="text-gray-400 text-xs mt-0.5">one-time</div>
                  <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-orange-500 font-bold mt-0.5 shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`block text-center py-3 rounded-xl text-sm font-bold transition-colors ${p.featured ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-100" : "border border-gray-200 hover:border-gray-400 text-[#111]"}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section id="contact" className="relative px-6 md:px-14 py-32 text-center overflow-hidden bg-[#fffaf5]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-100 rounded-full blur-[100px] opacity-60" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111] mb-4">
              Ready to Take Your<br />Food Business Online?
            </h2>
            <p className="text-gray-400 text-base mb-10">
              Whether it&apos;s akara, kulikuli, or any Nigerian street food — we build it. Join 50+ entrepreneurs who chose Web3Nova.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:hello@web3nova.com" className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold px-8 py-4 rounded-xl text-base shadow-lg shadow-orange-200">
                Start Your Website Today →
              </a>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 hover:border-gray-400 transition-colors text-[#111] font-semibold px-8 py-4 rounded-xl text-base shadow-sm">
                💬 WhatsApp Us First
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer className="px-6 md:px-14 py-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 bg-white">
        <span className="font-bold text-base text-[#111]">web3<span className="text-orange-500">nova</span></span>
        <span>© 2025 Web3Nova. Built for Nigerian food entrepreneurs.</span>
        <div className="flex gap-6">
          {["Instagram", "Twitter", "WhatsApp"].map((s) => (
            <a key={s} href="#" className="hover:text-[#111] transition-colors">{s}</a>
          ))}
        </div>
      </footer>
    </>
  );
}

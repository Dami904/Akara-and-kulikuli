"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

/* ─── MOCK DATA (demo only — no real payment is taken) ────────── */

type ChainKey = "btc" | "eth" | "sol";

const PRODUCTS = [
  {
    key: "akara",
    name: "Akara",
    tagline: "Hot, gold, street-fried",
    price: 1_500_000,
    img: "/images/hero.jpg",
    accent: "palm" as const,
  },
  {
    key: "kulikuli",
    name: "Kulikuli",
    tagline: "Premium groundnut crunch",
    price: 2_500_000,
    img: "/images/kulikuli-gold-pack.jpg",
    accent: "nut" as const,
  },
];

// USD → NGN and crypto → USD. Hardcoded, but near real-world (indicative).
const USD_NGN = 1550;

const CHAINS: Record<
  ChainKey,
  {
    label: string;
    symbol: string;
    scheme: string;
    usd: number;
    decimals: number;
    address: string;
    accent: "gold" | "nut" | "leaf";
  }
> = {
  btc: {
    label: "Bitcoin",
    symbol: "BTC",
    scheme: "bitcoin",
    usd: 98_000,
    decimals: 6,
    address: "bc1qak4r4x0s9v2m7pd3f8h2n6t5q9wz0c7l3e8k2r",
    accent: "gold",
  },
  eth: {
    label: "Ethereum",
    symbol: "ETH",
    scheme: "ethereum",
    usd: 3_400,
    decimals: 4,
    address: "0xAk4Ra9C3f81D5e72B0a6F4c8E1d9B2a7C0f3D6E5",
    accent: "nut",
  },
  sol: {
    label: "Solana",
    symbol: "SOL",
    scheme: "solana",
    usd: 200,
    decimals: 3,
    address: "AkaRa7Kuroa9Fq2Zx8Vn3Pd5Tg1Hs6Wm4Yb0Lc9Ru2E",
    accent: "leaf",
  },
};

const COUPONS: Record<string, { kind: "pct" | "flat"; value: number; label: string }> = {
  NAIJA10: { kind: "pct", value: 10, label: "10% off" },
  FRESHOIL: { kind: "flat", value: 50_000, label: "₦50,000 off" },
};

/* ─── HELPERS ─────────────────────────────────────────────────── */

const naira = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);

const accentBg: Record<string, string> = {
  palm: "bg-palm",
  gold: "bg-gold",
  nut: "bg-nut",
  leaf: "bg-leaf",
};

type Step = "order" | "coupon" | "pay" | "done";
const STEPS: Step[] = ["order", "coupon", "pay", "done"];

/* ─── MODAL ───────────────────────────────────────────────────── */

function OrderModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("order");
  const [productKey, setProductKey] = useState(PRODUCTS[0].key);
  const [qty, setQty] = useState(1);
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");
  const [chain, setChain] = useState<ChainKey>("btc");
  const [copied, setCopied] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  const product = PRODUCTS.find((p) => p.key === productKey)!;

  const { subtotal, discount, total } = useMemo(() => {
    const sub = product.price * qty;
    let disc = 0;
    if (appliedCoupon) {
      const c = COUPONS[appliedCoupon];
      disc = c.kind === "pct" ? Math.round((sub * c.value) / 100) : c.value;
    }
    return { subtotal: sub, discount: Math.min(disc, sub), total: Math.max(0, sub - disc) };
  }, [product.price, qty, appliedCoupon]);

  const chainInfo = CHAINS[chain];
  const cryptoAmount = total / USD_NGN / chainInfo.usd;
  const cryptoStr = cryptoAmount.toFixed(chainInfo.decimals);
  const paymentUri = `${chainInfo.scheme}:${chainInfo.address}?amount=${cryptoStr}`;

  // Close on ESC + lock body scroll while open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    if (COUPONS[code]) {
      setAppliedCoupon(code);
      setCouponError("");
    } else {
      setAppliedCoupon(null);
      setCouponError("That code isn't valid.");
    }
  };

  const copyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(chainInfo.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op in this demo */
    }
  }, [chainInfo.address]);

  const confirmPaid = () => {
    const ref = "AK-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    setOrderRef(ref);
    setStep("done");
  };

  const stepIndex = STEPS.indexOf(step);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm p-0 sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Preorder"
        className="w-full sm:max-w-md max-h-[92vh] overflow-y-auto bg-paper border-2 border-ink rounded-t-2xl sm:rounded-2xl shadow-[6px_6px_0_0_var(--color-ink)]"
      >
        {/* header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 py-3.5 bg-paper border-b-2 border-ink">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-6 h-6 rounded-md bg-ink">
              <span className="w-2 h-2 rounded-full bg-palm" />
            </span>
            <span className="font-display font-extrabold tracking-tight">Preorder</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid place-items-center w-8 h-8 rounded-lg border-2 border-ink hover:bg-ink hover:text-paper transition-colors font-mono"
          >
            ✕
          </button>
        </div>

        {/* progress */}
        <div className="flex gap-1.5 px-5 pt-4">
          {STEPS.map((s, i) => (
            <span
              key={s}
              className={`h-1.5 flex-1 rounded-full border border-ink ${
                i <= stepIndex ? "bg-palm" : "bg-paper"
              }`}
            />
          ))}
        </div>

        <div className="px-5 py-5">
          {/* ── STEP: ORDER ─────────────────────────────────────── */}
          {step === "order" && (
            <>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">
                Pick your batch
              </p>
              <div className="mt-3 grid gap-3">
                {PRODUCTS.map((p) => {
                  const active = p.key === productKey;
                  return (
                    <button
                      key={p.key}
                      onClick={() => setProductKey(p.key)}
                      className={`flex items-center gap-3.5 text-left p-2.5 rounded-xl border-2 border-ink transition-all ${
                        active
                          ? "bg-ink text-paper shadow-[4px_4px_0_0_var(--color-palm)]"
                          : "bg-paper hover:translate-x-[1px] hover:translate-y-[1px]"
                      }`}
                    >
                      <span className="relative w-14 h-14 shrink-0 rounded-lg overflow-hidden border-2 border-ink">
                        <Image src={p.img} alt={p.name} fill className="object-cover" sizes="56px" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-display font-bold text-lg leading-tight">{p.name}</span>
                        <span className={`block text-xs ${active ? "text-paper/60" : "text-ink/55"}`}>
                          {p.tagline}
                        </span>
                      </span>
                      <span className="font-display font-bold">{naira(p.price)}</span>
                    </button>
                  );
                })}
              </div>

              {/* quantity */}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="grid place-items-center w-9 h-9 rounded-lg border-2 border-ink font-display font-bold hover:bg-ink hover:text-paper transition-colors"
                  >
                    –
                  </button>
                  <span className="w-8 text-center font-display font-bold text-lg tabular-nums">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    aria-label="Increase quantity"
                    className="grid place-items-center w-9 h-9 rounded-lg border-2 border-ink font-display font-bold hover:bg-ink hover:text-paper transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t-2 border-ink pt-4">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">Total</span>
                <span className="font-display font-extrabold text-2xl">{naira(subtotal)}</span>
              </div>

              <button
                onClick={() => setStep("coupon")}
                className="mt-5 w-full bg-palm text-paper font-display font-bold py-3.5 rounded-lg border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all"
              >
                Continue →
              </button>
              <button
                onClick={() => setStep("coupon")}
                className="mt-3 w-full font-mono text-[11px] tracking-[0.2em] uppercase text-ink/45 hover:text-ink transition-colors"
              >
                Skip →
              </button>
            </>
          )}

          {/* ── STEP: COUPON ────────────────────────────────────── */}
          {step === "coupon" && (
            <>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">Got a code?</p>
              <div className="mt-3 flex gap-2">
                <input
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value);
                    setCouponError("");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                  placeholder="e.g. NAIJA10"
                  className="flex-1 min-w-0 px-3.5 py-3 rounded-lg border-2 border-ink bg-paper font-mono text-sm uppercase tracking-wide placeholder:normal-case placeholder:tracking-normal placeholder:text-ink/35 focus:outline-none focus:shadow-[3px_3px_0_0_var(--color-gold)]"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-ink text-paper font-display font-bold px-5 rounded-lg border-2 border-ink hover:bg-nut transition-colors"
                >
                  Apply
                </button>
              </div>
              {couponError && <p className="mt-2 text-sm text-palm font-medium">{couponError}</p>}
              {appliedCoupon && (
                <p className="mt-2 text-sm text-leaf font-semibold">
                  ✓ {appliedCoupon} applied — {COUPONS[appliedCoupon].label}
                </p>
              )}

              {/* summary */}
              <div className="mt-5 rounded-xl border-2 border-ink p-4 space-y-2 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-ink/60">
                    {product.name} × {qty}
                  </span>
                  <span>{naira(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-leaf">
                    <span>Discount</span>
                    <span>−{naira(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t-2 border-ink pt-2 font-display font-extrabold text-lg">
                  <span>Total</span>
                  <span>{naira(total)}</span>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => setStep("order")}
                  className="px-5 py-3.5 rounded-lg border-2 border-ink font-display font-bold hover:bg-ink hover:text-paper transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep("pay")}
                  className="flex-1 bg-palm text-paper font-display font-bold py-3.5 rounded-lg border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all"
                >
                  Pay with crypto →
                </button>
              </div>
              <button
                onClick={() => setStep("pay")}
                className="mt-3 w-full font-mono text-[11px] tracking-[0.2em] uppercase text-ink/45 hover:text-ink transition-colors"
              >
                Skip →
              </button>
            </>
          )}

          {/* ── STEP: PAY ───────────────────────────────────────── */}
          {step === "pay" && (
            <>
              <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">Pay with</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {(Object.keys(CHAINS) as ChainKey[]).map((k) => {
                  const c = CHAINS[k];
                  const active = k === chain;
                  return (
                    <button
                      key={k}
                      onClick={() => setChain(k)}
                      className={`py-2.5 rounded-lg border-2 border-ink font-display font-bold text-sm transition-all ${
                        active ? `${accentBg[c.accent]} text-paper` : "bg-paper hover:bg-ink hover:text-paper"
                      }`}
                    >
                      {c.symbol}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 grid place-items-center">
                <div className="p-3 bg-paper rounded-xl border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)]">
                  <QRCodeSVG
                    value={paymentUri}
                    size={168}
                    bgColor="#faf2e2"
                    fgColor="#1c1206"
                    level="M"
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-display font-extrabold text-2xl leading-none">
                  {cryptoStr} <span className="text-base align-middle">{chainInfo.symbol}</span>
                </p>
                <p className="mt-1 font-mono text-xs text-ink/55">≈ {naira(total)}</p>
              </div>

              <p className="mt-4 font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">
                {chainInfo.label} address
              </p>
              <div className="mt-2 flex gap-2">
                <code className="flex-1 min-w-0 px-3 py-2.5 rounded-lg border-2 border-ink bg-ink text-paper font-mono text-[11px] break-all">
                  {chainInfo.address}
                </code>
                <button
                  onClick={copyAddress}
                  className="shrink-0 px-3 rounded-lg border-2 border-ink font-mono text-xs font-bold hover:bg-ink hover:text-paper transition-colors"
                >
                  {copied ? "✓" : "Copy"}
                </button>
              </div>

              <div className="mt-5 flex gap-2">
                <button
                  onClick={() => setStep("coupon")}
                  className="px-5 py-3.5 rounded-lg border-2 border-ink font-display font-bold hover:bg-ink hover:text-paper transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={confirmPaid}
                  className="flex-1 bg-leaf text-paper font-display font-bold py-3.5 rounded-lg border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all"
                >
                  I&apos;ve sent it
                </button>
              </div>
              <button
                onClick={confirmPaid}
                className="mt-3 w-full font-mono text-[11px] tracking-[0.2em] uppercase text-ink/45 hover:text-ink transition-colors"
              >
                Skip →
              </button>
            </>
          )}

          {/* ── STEP: DONE ──────────────────────────────────────── */}
          {step === "done" && (
            <div className="text-center py-2">
              <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-leaf text-paper border-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] font-display font-extrabold text-3xl">
                ✓
              </div>
              <h3 className="mt-5 font-display font-extrabold text-2xl">Preorder successful</h3>
              <p className="mt-2 text-ink/65 leading-relaxed">
                Your {product.name.toLowerCase()} is locked in. We&apos;ll fry it fresh and reach out to confirm pickup.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-paper px-4 py-2.5 font-mono text-sm">
                <span className="text-ink/55">Order ref</span>
                <span className="font-bold tracking-wide">{orderRef}</span>
              </div>

              <button
                onClick={onClose}
                className="mt-5 w-full bg-ink text-paper font-display font-bold py-3.5 rounded-lg border-2 border-ink shadow-[4px_4px_0_0_var(--color-palm)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_var(--color-palm)] transition-all"
              >
                Back to site
              </button>
            </div>
          )}
        </div>

        {/* footer note */}
        <div className="px-5 pb-4 -mt-1">
          <p className="font-mono text-[10px] tracking-wide uppercase text-ink/40 text-center">
            Demo — no real payment is taken
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── TRIGGER BUTTON ──────────────────────────────────────────── */

export function PreorderButton({
  className = "",
  children = "Preorder",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && <OrderModal onClose={() => setOpen(false)} />}
    </>
  );
}

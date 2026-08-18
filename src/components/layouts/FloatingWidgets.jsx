import { useEffect, useState } from "react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/4407777999277"
      aria-label="Chat on WhatsApp"
      className="fixed right-5.5 bottom-5.5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-[0_12px_26px_-10px_rgba(0,0,0,0.5)]"
    >
      💬
    </a>
  );
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(id);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 right-5 z-50 max-w-md rounded-2xl border border-line bg-white p-6 shadow-[0_20px_45px_-25px_rgba(15,43,42,0.35)] transition-transform duration-400 ${
        visible ? "translate-y-0" : "translate-y-[140%]"
      }`}
    >
      <h4 className="mb-2 text-base font-semibold">Your Privacy Matters</h4>
      <p className="mb-4 text-sm text-ink-soft">
        We use cookies to enhance your browsing experience and understand how our site is used. We
        never use cookies to collect personal or sensitive health information.
      </p>
      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full bg-navy-deep px-4.5 py-2.5 text-sm font-bold text-white"
        >
          Accept All
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full bg-cream-dim px-4.5 py-2.5 text-sm font-bold text-navy-deep"
        >
          Deny
        </button>
      </div>
    </div>
  );
}

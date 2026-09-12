"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently,
      // the value is still visible and selectable as plain text.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${label} to clipboard`}
      className="inline-flex items-center justify-center rounded-md p-1 text-slate transition-colors hover:text-gold"
    >
      <Icon name={copied ? "check" : "copy"} className="h-4 w-4" />
      <span className="sr-only">{copied ? "Copied" : `Copy ${label}`}</span>
    </button>
  );
}

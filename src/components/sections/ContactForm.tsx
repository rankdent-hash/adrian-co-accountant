"use client";

import { useState, type FormEvent } from "react";
import { serviceHubChildren, site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "not-configured" | "error";

const helpOptions = [
  "General enquiry",
  ...serviceHubChildren.map((item) => item.label),
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!message) nextErrors.message = "Please tell us a little about what you need.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: form.get("phone"),
          topic: form.get("topic"),
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const data = await response.json().catch(() => null);
        setStatus(data?.reason === "not_configured" ? "not-configured" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-paper p-8 text-center">
        <p className="font-sans text-h3 font-semibold text-ink">Thank you</p>
        <p className="mt-2 text-sm text-slate">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  if (status === "not-configured") {
    return (
      <div className="rounded-lg border border-gold/40 bg-gold-light/20 p-8 text-center">
        <p className="font-sans text-h3 font-semibold text-ink">
          Our online form isn&apos;t connected yet
        </p>
        <p className="mt-2 text-sm text-slate">
          In the meantime, please call us on{" "}
          <a href={site.phone.href} className="font-semibold text-ink underline">
            {site.phone.display}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-ink underline">
            {site.email}
          </a>{" "}
          and we&apos;ll get back to you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field label="Name" name="name" error={errors.name} required />
      <Field label="Email" name="email" type="email" error={errors.email} required />
      <Field label="Phone" name="phone" type="tel" />

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-ink">
          What can we help with?
        </label>
        <select
          id="topic"
          name="topic"
          className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-slate focus-visible:outline-2 focus-visible:outline-gold"
        >
          {helpOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-slate focus-visible:outline-2 focus-visible:outline-gold"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-btn font-semibold text-paper transition-colors duration-200 ease-soft hover:bg-gold-light disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please call{" "}
          <a href={site.phone.href} className="underline">
            {site.phone.display}
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-slate focus-visible:outline-2 focus-visible:outline-gold"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

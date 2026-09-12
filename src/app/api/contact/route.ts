import { NextResponse } from "next/server";

// TODO(integration): this endpoint is not yet wired to an email service or
// CRM. Before launch, connect it (e.g. Resend, Postmark, or a forwarding
// mailbox) and remove the 501 response below. Do not fake a success
// response in the meantime — the client shows a clear fallback message.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { ok: false, reason: "invalid" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { ok: false, reason: "not_configured" },
    { status: 501 }
  );
}

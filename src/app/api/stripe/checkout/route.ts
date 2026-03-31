import { NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(req) {
  try {
    const body = await req.json();
    const priceId = body.priceId as string;
    const customerEmail = body.customerEmail as string | undefined;
    const origin =
      (req.headers?.get("origin") as string) ?? "http://localhost:3000";
    const successUrl = `${origin}/dashboard?success=true`;
    const cancelUrl = `${origin}/dashboard?canceled=true`;
    const sessionUrl = await createCheckoutSession(
      priceId,
      customerEmail ?? "",
      successUrl,
      cancelUrl,
    );
    return NextResponse.json({ url: sessionUrl?.url ?? "" });
  } catch (err) {
    console.error("Checkout route error", err);
    return NextResponse.json({ error: "Checkout error" }, { status: 500 });
  }
}

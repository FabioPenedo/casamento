import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

interface Product {
    title: string;
    img: string;
    price: number;
}

export async function POST(req: NextRequest) {
    try {
        const { item }: { item: Product } = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "brl",
                        product_data: {
                            name: item.title,
                            images: [item.img],
                        },
                        unit_amount: item.price * 100, // Stripe usa valores em centavos
                    },
                    quantity: 1,
                }
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`, // URL de sucesso
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // URL de cancelamento
        });
        console.log("Sessão criada:", session);
        return NextResponse.json({ sessionId: session.id }, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Erro desconhecido";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";

interface Product {
    title: string;
    img: string;
    price: number;
}

export async function POST(req: NextRequest) {
    try {
        const { item }: { item: Product } = await req.json();

        if (!item || !item.title || !item.price) {
            throw new Error("Dados do item inválidos");
        }

        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error("STRIPE_SECRET_KEY não configurada");
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "brl",
                        product_data: {
                            name: item.title,
                        },
                        unit_amount: Math.round(item.price * 100), // Garantir que seja um número inteiro
                    },
                    quantity: 1,
                }
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sucesso`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        });

        
        return NextResponse.json({ 
            sessionId: session.id 
        }, { 
            status: 200 
        });
    } catch (error) {
        console.error("Erro detalhado na criação da sessão:", error);
        const message = error instanceof Error ? error.message : "Erro desconhecido";
        return NextResponse.json({ 
            error: message,
            details: error instanceof Error ? error.stack : undefined
        }, { 
            status: 500 
        });
    }
}

"use client"

import { List } from "@/mock/List";
import { ListType } from "@/types/ListType";
import { Button, Card, CardBody, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Spinner } from "@heroui/react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

export default function SectionTwo() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { key: "outros", label: "Outros" },
    { key: "cozinha", label: "Cozinha" },
    { key: "quarto", label: "Quarto" },
    { key: "sala", label: "Sala" },
    { key: "banheiro", label: "Banheiro" }
  ];

  const handleCheckout = async (item: ListType) => {
    try {
      setIsLoading(true);
      const checkoutResponse = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ item }),
      });

      const stripeClient = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string);

      if(!stripeClient) {
        throw new Error("Falha para inicializar o Stripe.");
      }

      const { sessionId } = await checkoutResponse.json();
      
      if (!sessionId) {
        throw new Error("Session ID não recebido da API");
      }

      const { error } = await stripeClient.redirectToCheckout({ 
        sessionId: sessionId 
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Erro ao redirecionar para o checkout:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="h-auto mt-16 pt-20 px-7 flex flex-col items-center bg-color2 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <Spinner size="lg" color="primary" />
        </div>
      )}
      <h1
        className="text-color1 text-4xl mb-10 font-mono tracking-[5px] text-center "
      >
        Sugestão de Presentes
      </h1>
      <div className="mb-10 w-full flex justify-center">
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="shadow" 
              className="capitalize"
            >
              {categories.find(cat => cat.key === selectedCategory)?.label || "Selecione uma categoria"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            aria-label="Categorias de presentes"
            onAction={(key) => setSelectedCategory(key as string)}
          >
            {categories.map((category) => (
              <DropdownItem key={category.key}>
                {category.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="gap-6 grid grid-cols-4 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
        {List.filter((item) => item.category == selectedCategory).map((item, index) => (
          <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                loading="lazy"
                alt={item.title}
                className="w-full object-contain p-3"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
                height={500}
              />
            </CardBody>
            <CardFooter className="flex flex-col">
              <div className="flex justify-between w-full">
                <span className="text-color1 text-base font-medium">{item.title}</span>
                <span className="text-default-500 text-base">R$ {item.price},00</span>
              </div>
              <Button onPress={() => handleCheckout(item)} className="mt-2 w-full">
                Comprar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <img className="w-full mt-20" loading="lazy" src="/images/sectionTwo.png" alt="" />
    </section>
  );
}
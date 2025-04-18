"use client"

import { List } from "@/mock/List";
import { Button, Card, CardBody, CardFooter, Image, Tab, Tabs } from "@heroui/react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";


export default function SectionTwo() {
  const [selectedTab, setSelectedTab] = useState("geral");
  const [isLoading, setIsLoading] = useState(false);


   const handleCheckout = async (item: any) => {
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
    <section className="h-auto mt-16 pt-20 px-7 flex flex-col items-center bg-color2">
      <h1
        className="text-color1 text-4xl mb-10 font-mono tracking-[5px] text-center "
      >
        Sugestão de Presentes
      </h1>
      <div className="flex gap-4 mb-10">
        <Tabs
          aria-label="Tabs variants"
          variant="underlined"
          selectedKey={selectedTab}
          onSelectionChange={(key) => setSelectedTab(key as string)}
        >
          <Tab key="geral" title="Geral" className="text-lg" />
          <Tab key="cozinha" title="Cozinha" className="text-lg" />
          <Tab key="quarto" title="Quarto" className="text-lg" />
          <Tab key="sala" title="Sala" className="text-lg" />
          <Tab key="banheiro" title="Banheiro" className="text-lg" />
        </Tabs>
      </div>
      <div className="gap-6 grid grid-cols-4 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
        {List.filter((item) => item.category == selectedTab).map((item, index) => (
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
                <span className="text-default-500 text-base">R$ {item.price}</span>
              </div>
              <Button disabled={isLoading} isLoading={isLoading} onPress={() => handleCheckout(item)} className="mt-2 w-full">
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
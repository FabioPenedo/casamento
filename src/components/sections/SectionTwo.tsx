"use client"

import { List } from "@/mock/List";
import { Card, CardBody, CardFooter, Image, Tab, Tabs } from "@heroui/react";
import { useState } from "react";

export default function SectionTwo() {
  const [selectedTab, setSelectedTab] = useState("geral");
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
            <CardFooter className="text-small justify-between">
              <span className="text-color1 text-base font-medium">{item.title}</span>
              <span className="text-default-500 text-base">{item.price}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
      <img className="w-full mt-20" loading="lazy" src="/images/sectionTwo.png" alt="" />
    </section>
  );
}
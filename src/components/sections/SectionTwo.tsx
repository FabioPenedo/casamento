"use client"

import { List } from "@/mock/List";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export default function SectionTwo() {
  return (
    <section className="h-auto mt-16 pt-20 px-7 flex flex-col items-center bg-color2">
      <h1
          className="text-color1 text-4xl mb-10 font-mono tracking-[5px] text-center "
        >
          Sugestão de Presentes
        </h1>
      <div className="gap-6 grid grid-cols-4 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
        {List.map((item, index) => (
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
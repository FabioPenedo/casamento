"use client"

import { Navbar, NavbarBrand } from "@heroui/react";

export function NavbarMain() {
  return (
    <Navbar maxWidth="2xl" isBordered className="text-color1 p-5 bg-transparent border-b-1 h-auto">
      <NavbarBrand className="">
        <div className="flex w-full justify-evenly items-center">
          <div className="flex flex-col items-center">
            <div>
              <span className="text-sm mr-2">PIX:</span>
              <span className="font-normal text-xl tracking-[1px]">31991816637</span>
            </div>
            <span className="font-normal mt-3 text-sm">(Verena Menezes)</span>
          </div>
          <img loading="lazy" src="/images/qrcode.png" width={95} alt="QR Code PIX" className="ml-5 rounded-sm" />
        </div>
      </NavbarBrand>
    </Navbar>
  );
}
"use client"

import { WhatsappLogo } from "@phosphor-icons/react";

export default function FloatingWhatsapp() {
  let phoneNumber = "553191816637";
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 bg-green-500 text-white rounded-full p-3 flex items-center justify-center shadow-lg hover:bg-green-600 transition"
    >
      <WhatsappLogo size={30} />
    </a>
  );
}
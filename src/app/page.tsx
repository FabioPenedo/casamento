import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Modal from "@/components/Modal";
import { NavbarMain } from "@/components/sections/NavbarMain";
import SectionOne from "@/components/sections/SectionOne";
import SectionTwo from "@/components/sections/SectionTwo";

export default function Home() {
  return (
    <>
      <Modal />
      <FloatingWhatsapp />
      <NavbarMain />
      <SectionOne />
      <SectionTwo />
    </>
  );
}

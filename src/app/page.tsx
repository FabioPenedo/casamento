import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { NavbarMain } from "@/components/sections/NavbarMain";
import SectionOne from "@/components/sections/SectionOne";
import SectionTwo from "@/components/sections/SectionTwo";

export default function Home() {
  return (
    <>
      <FloatingWhatsapp />
      <NavbarMain />
      <SectionOne />
      <SectionTwo />
    </>
  );
}

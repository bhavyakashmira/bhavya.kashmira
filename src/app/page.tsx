import Image from "next/image";
import { LandingPage } from "@/components/LandingPage";
import { ContactPage } from "@/components/ContactUS";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Skills />
      <LayoutGridDemo />
      <Projects />
      <ContactPage />   
    </>
  );
}

import Image from "next/image";
import { LandingPage } from "@/components/LandingPage";
import { ContactPage } from "@/components/ContactUS";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Profiles } from "@/components/Profiles";

export default function Home() {
  return (
    <>
      <div className="bg-black" >
        <LandingPage />
        <Skills />
        <Profiles />
        <Projects />
      </div>
      <ContactPage />   
    </>
  );
}

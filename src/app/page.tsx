import { LandingPage } from "@/components/LandingPage";
import { ContactPage } from "@/components/ContactUS";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Profiles } from "@/components/Profiles";
import { CgHomeScreen } from "react-icons/cg";
import { HomeScreen } from "@/components/HomeScreen";

export default function Home() {
  return (
    <>
      
      <div className="bg-black" >
        <HomeScreen/>
        <Skills />
        <Projects />
        <Profiles />
      </div>
      <ContactPage />   
    </>
  );
}

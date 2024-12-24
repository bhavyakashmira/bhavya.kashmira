import { ContactPage } from "@/components/ContactUS";
import OpenResume from "@/components/OpenResume";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="h-[40rem] w-full bg-black   bg-grid-small-white/[0.2]  relative flex flex-col items-center justify-center">

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        </div>
        <div className="flex flex-col items-center justify-center m-2">
          <Image src={'/profile.jpg'} className="rounded-full border-white p-2" height={"250"} width={"250"} alt="profile" />
          <h1 className="text-3xl text-white">BHAVYA KASHMIRA</h1>
          <p className="text-gray-300">Full Stack Web Developer || DSA enthusiast</p>
           <OpenResume/>
        </div>
        <div className="m-10" >
          <img
            src="https://ghchart.rshah.org/bhavyakashmira"
            alt="bhavyakashmira's Github chart"
            className="h-64 sm:h-80 md:h-96 lg:h-[200px] w-[900px]"
          />
        </div>
        
        
        

      
    
      </div>

      
         <ContactPage/>







    </>
  );
}

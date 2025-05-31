import { ContactPage } from "@/components/ContactUS";
import OpenResume from "@/components/OpenResume";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="h-[40rem] w-full bg-black   bg-grid-small-white/[0.2]  relative flex flex-col items-center justify-center  ">
        <div className="flex flex-col items-center justify-center p-4 m-2 max-w-lg mx-auto space-y-4">
          <Image
            src={'/profile.jpg'}
            className="rounded-full border-4 border-white p-2"
            height={250}
            width={250}
            alt="profile"
          />
          <h1 className="text-2xl sm:text-3xl text-white text-center font-bold">
            BHAVYA KASHMIRA
          </h1>
          <p className="text-sm sm:text-base text-gray-300 text-center">
            SDE INTERN | Full Stack Web Developer || DSA Enthusiast
          </p>
          <OpenResume />
        </div>
        <div className="m-10" >
          <img
            src="https://ghchart.rshah.org/bhavyakashmira"
            alt="bhavyakashmira's Github chart"
            className="h-auto w-full max-w-[900px] sm:h-auto md:h-auto lg:max-h-[200px]"
          />
        </div>
      </div>
         <ContactPage/>
    </>
  );
}

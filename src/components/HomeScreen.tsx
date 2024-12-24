"use client"
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { Vortex } from "../components/ui/vortex";

export function HomeScreen() {
    return (
        <>
            
         
            


              
              <div className="bg-white">
                <h2 >
                    Hey Folks, <br /> I am Bhavya Kashmira.
                </h2>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    I am a developer passionate about building sleek, functional web experiences that blend creativity with precision. Let us bring something awesome to life!
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                 
                    <Link href="/last_resume.pdf" className=" px-4 py-2 bg-blue-900 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] block  hover:text-gray-700">
                            RESUME
                        </Link>
     
                    <button className="px-4 py-2 border border-black rounded-xl  text-black ">contact me</button>
                </div>
 
                  </div>

           

           

        </>
        
    );
}

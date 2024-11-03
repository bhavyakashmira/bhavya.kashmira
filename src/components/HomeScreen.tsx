"use client"
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { Vortex } from "../components/ui/vortex";

export function HomeScreen() {
    return (
        <>
            
            <div className="   flex justify-between h-[4rem] md:h-[3rem] items-center m-2">
                <a href="#" className="text-[#EDF5FC] font-robot md:text-xl " >HomePage</a>
                <nav aria-label="Breadcrumb  ">
                    <ol className="flex items-center gap-1 font-robot md:text-2xl text-white">
                        <li>
                            <a href="/last_resume.pdf" className=" block transition hover:text-gray-700">
                                Resume
                            </a>
                        </li>

                        <li className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <a href="#projects" className="block transition hover:text-gray-700"> Projects </a>
                        </li>

                        <li className="rtl:rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </li>

                        <li>
                            <a href="#contact" className="block transition hover:text-gray-700"> Contact </a>
                        </li>
                    </ol>
                </nav>
            </div>
           
            
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

              
              
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    Hello Folks, <br /> I am Bhavya Kashmira.
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
            </BackgroundLines>
            

           

           

        </>
        
    );
}

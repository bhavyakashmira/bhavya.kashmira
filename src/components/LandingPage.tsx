"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. 
`;


export function LandingPage() {
    return (
        <>
            <div className="flex justify-between items-center m-2">
                <span>Homepage</span>
                <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-black shadow-sm">
                    <button
                        className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:relative"
                    >
                        Profiles
                    </button>

                    <button
                        className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:relative"
                    >
                        Projects
                    </button>

                    <button
                        className="inline-block px-4 py-2 text-sm font-medium text-white hover:bg-gray-50 focus:relative"
                    >
                        Contacts
                    </button>
                </span>
            </div>
           
            <div className="h-[30rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased  ">

               

                
                <div className="" >
                 
                    {/* <h1>This </h1>
                    <h2 className=" text-8xl font-bold font-mono " >Sounds good to me</h2>
                    <h2>WELCOME TO the page</h2>
                    <blockquote className="text-4xl" >This is explicit page</blockquote>
                     <h2 className="flex justify-center" >Let me introduce myself</h2> */}
                   
                <div className=" flex max-w-2xl mx-auto p-4">
                    <div className="  m-10 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" >
                        <TextGenerateEffect className=" " words={words} />
                        </div>

                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-white"></span>
                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Resume
                            </button>
                            <span className="h-px flex-1 bg-white"></span>
                        </span>
                       
                    
                    
                </div>
                </div>
                <BackgroundBeams />
            </div>
            
        </>
       
    );
}

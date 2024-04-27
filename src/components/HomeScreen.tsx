"use client"
import React from "react";
import { Vortex } from "../components/ui/vortex";

export function HomeScreen() {
    return (
        <>
            
            <div className="  flex justify-between h-[4rem] md:h-[3rem] items-center m-2">
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
            
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
                >
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Hey, <span className="font-robot">I am bhavya kashmira</span> 
                    </h2>
                    <p className="text-white font-robot text-sm md:text-2xl max-w-xl mt-6 text-center">
                        Crafting captivating user experiences with React, one component at a time.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <button  className="px-4 py-2 bg-blue-900 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                            <a href="/last_resume.pdf" className=" block transition hover:text-gray-700">
                                RESUME
                            </a>
                       
                        </button>
                        <button className="px-4 py-2 border border-white rounded-xl  text-white ">contact me</button>
                    </div>
                </Vortex>
            </div>
        </>
        
    );
}

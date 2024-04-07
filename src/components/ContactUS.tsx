"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { SiGmail } from "react-icons/si";
import { FaLinkedin ,FaGithub } from "react-icons/fa";
export function ContactPage() {
    const words = [
        {
            text: "Click",
            className: "text-black dark:text-blue-500",
        },
        {
            text: "to",
            className: "text-black dark:text-blue-500",
        },
        {
            text: "connect",
            className: "text-black dark:text-blue-500", 
        },
        {
            text: "with",
            className: "text-black dark:text-blue-500",
        },
        {
            text: "Me.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <> <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            
                    <div className="flex flex-col items-center justify-center h-[7rem]  ">
                        <TypewriterEffectSmooth words={words} />
                    </div>
                    

                    <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
                        itaque neque.
                    </p>

                    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                Careers
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                History
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                href="#"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>

                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            >
                                <span className="sr-only">Facebook</span>
                                <FaGithub size={"32"} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            >
                                <span className="sr-only">Instagram</span>
                               <FaLinkedin size={"32"} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                            >
                                <span className="sr-only">Twitter</span>
                                <SiGmail size={"32"} />
                            </a>
                        </li>

                    </ul>
                </div>
            </footer></>
       
    );
}

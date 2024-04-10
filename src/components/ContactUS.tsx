"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { SiGmail } from "react-icons/si";
import { FaLinkedin ,FaGithub } from "react-icons/fa";
export function ContactPage() {
    const words = [
        {
            text: "Click",
            className: " text-2xl text-black ",
        },
        {
            text: "to",
            className: "text-2xl text-black ",
        },
        {
            text: "connect",
            className: " text-2xl text-black ", 
        },
        {
            text: "with",
            className: " text-2xl text-black ",
        },
        {
            text: "Me.",
            className: " text-2xl text-blue-500 ",
        },
    ];
    return (
        <>
            <footer  id="contact" className="bg-white ">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            
                    <div className="flex flex-col text-4xl items-center justify-center   ">
                        <TypewriterEffectSmooth words={words} />
                    </div>
                    <ul className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75  "
                                href=""
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a  id="resume"
                                className="text-gray-700 transition hover:text-gray-700/75  "
                                href="/last_resume.pdf"
                            >
                                Resume
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75  "
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75  "
                                href="#projects"
                            >
                                Projects
                            </a>
                        </li>

                       

                        <li>
                            <a
                                className="text-gray-700 transition hover:text-gray-700/75  "
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                        <li>
                            <a
                                href="https://github.com/bhavyakashmira"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75  "
                            >
                                <span className="sr-only">GITHUB</span>
                                <FaGithub size={"32"} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/bhavyakashmira/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75  "
                            >
                                <span className="sr-only">LINKEDIN</span>
                               <FaLinkedin size={"32"} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="mailto:bhavyakashmira@gmail.com"
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75  "
                            >
                                <span className="sr-only">Gmail</span>
                                <SiGmail size={"32"} />
                            </a>
                        </li>

                    </ul>
                </div>
            </footer></>
       
    );
}

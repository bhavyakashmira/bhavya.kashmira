"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { SiGmail } from "react-icons/si";
import { FaLinkedin ,FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export function ContactPage() {

    
    return (
        <>
            <footer className="w-full">
                <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                    
            <div className="mt-5 flex justify-center space-x-6">
       
            <div className='flex m-3 gap-10 justify-center' >
                            <a
                                href="https://x.com/bhavyakashmira"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="text-blue-500 hover:text-white"
                            >
                                <FaXTwitter size={30} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/bhavyakashmira"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-blue-700 hover:text-white"
                            >
                                <FaLinkedinIn size={30} />
                            </a>

                            
                            <a
                                href="https://github.com/bhavyakashmira"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-blue-800 hover:text-white"
                            >
                                <FaGithub size={30} />
                            </a>
                        </div>
                    </div>
                    <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-100">
                        &copy; {new Date().getFullYear()} bhavyakashmira.
                    </p>
                </div>
            </footer>
        
        </>
       
    );
}

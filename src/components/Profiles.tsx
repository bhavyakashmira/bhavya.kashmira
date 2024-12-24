import { HoverEffect } from "../components/ui/card-hover-effect";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaLinkedinIn , FaGithub } from "react-icons/fa";

export function Profiles() {

    
    return (
        <div className="  bg-grid max-w-7xl mx-auto px-8">
            <h1 className="font-bold text-white font-para text-3xl md:text-6xl flex justify-center">PROFILES</h1>

            <HoverEffect items={projects} />
        </div>
    );
}


export const projects = [
    {
        title: "LeetCode",
        description:
            "A platform for preparing technical coding interviews and assessing your skills.",
        link: "https://leetcode.com/bhavyakashmira/",
        thumbnail: <SiLeetcode size={"32"} />,
    },
    {
        title: "CodeChef",
        description:
            "A competitive programming platform that hosts coding contests and provides practice problems.",
        link: "https://www.codechef.com/users/bhavy_kashmira",
        thumbnail: <SiCodechef size={"32"} />,
    },
    {
        title: "Github",
        description:
            "A platform for version control and collaboration, allowing you to host and review code, manage projects, and build software.",
        link: "https://github.com/bhavyakashmira",
        thumbnail: <FaGithub size={"32"} />,
    },
    {
        title: "LinkedIn",
        description:
            "A professional networking site that allows you to connect with colleagues, find jobs, and share professional content.",
        link: "https://www.linkedin.com/in/bhavyakashmira/",
        thumbnail: <FaLinkedinIn size={"32"} />,
    },
    {
        title: "Medium",
        description:
            "An online publishing platform where people can read, write, and share important stories and ideas.",
        link: "https://medium.com/@bhavyakashmira",
        thumbnail: <FaMedium size={"32"} />,
    },
];
import { HoverEffect } from "../components/ui/card-hover-effect";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { FaLinkedinIn , FaGithub } from "react-icons/fa";

export function Profiles() {

    
    return (
        <div className=" bg-black max-w-7xl mx-auto px-8">
            <h1 className="font-bold text-white font-para text-3xl md:text-6xl flex justify-center">PROFILES</h1>

            <HoverEffect items={projects} />
        </div>
    );
}


export const projects = [
    {
        title: "LeetCode",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://leetcode.com/bhavyakashmira/",
        thumbnail: <SiLeetcode size={"32"} />,

    },
    {
        title: "CodeChef",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://www.codechef.com/users/bhavy_kashmira",
        thumbnail: <SiCodechef size={"32"} />,
    },
    {
        title: "Github",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://github.com/bhavyakashmira",
        thumbnail: <FaGithub size={"32"} />,

    },
    {
        title: "LinkedIn",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://www.linkedin.com/in/bhavyakashmira/",
        thumbnail: <FaLinkedinIn size={"32"}  />,
    },
    {
        title: "Medium",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://medium.com/@bhavyakashmira",
        thumbnail: <FaMedium size={"32"}  />,
    },
   
];

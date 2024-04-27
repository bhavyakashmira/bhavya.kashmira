"use client";
import React from 'react'
import SkillDataProvider from './subcomp/SkillDataProvider';
import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Other_skill,
    Skill_data,
} from "@/constants";
import { TypewriterEffect } from './ui/typewriter-effect';
export function Skills() {


    const words = [
    
        {
            text: "Tech",
            className: "text-white text-3xl font-robot ",
        },
        {
            text: "Stacks",
            className: "text-white text-3xl font-robot ",
        },
        {
            text: "Under",
            className: "text-white text-3xl font-robot ",
        },
        {
            text: "My",
            className: "text-white text-3xl font-robot ",
        },
        
        {
            text: "Belt",
            className: "text-blue-500 text-3xl font-robot ",
        },
    ];
    return (
        <section
            id="skills"
            className=" bg-black flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-8 sm:py-16 md:py-20 lg:py-24 font-bold text-white font-para text-3xl md:text-6xl   "
            style={{ transform: "scale(1)" }}
        >
            <TypewriterEffect words={words} />
            
            <div className=" flex-row sm:flex-row justify-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={image.Image}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>

          
        </section>

    
    );
}

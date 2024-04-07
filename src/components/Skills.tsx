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
            className: "text-white dark:text-blue-500",
        },
        {
            text: "Stacks",
            className: "text-white dark:text-blue-500",
        },
        {
            text: "Under",
            className: "text-white dark:text-blue-500",
        },
        {
            text: "My",
            className: "text-white dark:text-blue-500",
        },
        
        {
            text: "Belt",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-8 sm:py-16 md:py-20 lg:py-24"
            style={{ transform: "scale(1)" }}
        >
              <TypewriterEffect words={words} />

            <div className="flex flex-row sm:flex-row justify-center sm:justify-around flex-wrap mt-4 gap-5 items-center">
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

            <div className="flex flex-row sm:flex-row justify-center sm:justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
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

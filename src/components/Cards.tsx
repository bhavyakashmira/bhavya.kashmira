"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";


interface CardProps {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    links: string;
    className?: string; // Optional prop
}


export function Card({ id, title, description, thumbnail, className,links }: CardProps) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border border-bg-white  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 "
                >
                    {description} 
                    <Link href={links} className="text-white" > <FaExternalLinkAlt size={"12"} /></Link>
                    
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={thumbnail}
                        height="1000"
                        width="1000"
                        className="h-60 border border-bg-white hover:border-none  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
            
                </div>
            </CardBody>
        </CardContainer>
    );
}

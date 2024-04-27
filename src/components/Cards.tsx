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
            <CardBody className="bg-black relative group/card  border-black/[0.1] w-auto  sm:w-[23rem] h-auto rounded-xl p-5  md:border md:border-bg-white  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-sm max-w-sm mt-2 "
                >
                    {description} 
                    <Link href={links} className="text-blue-800" > <FaExternalLinkAlt size={"12"} /></Link>
                    
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={thumbnail}
                        height="700"
                        width="700"
                        className="h-60 border max-w-sm border-bg-white hover:border-none  w-full p-2 object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
               
               
            </CardBody>
        </CardContainer>
    );
}

import React from "react";
import { Card } from './Cards'

export function Projects() {

    const cards = [
        {
            id: 1,
            title: "OpenCruiter",
            className: "md:col-span-2",
            description: "OpenCruiter is a platform for users to prepare for their interviews.",
            thumbnail: "/OpenCruiter.png",
            links: "https://opencruiter.vercel.app/"
        },
        {
            id: 2,
            title: "Bookworm",
            className: "md:col-span-2",
            description: "Bookworm is a platform for writers to create, organize, and share stories, connecting readers and authors.",
            thumbnail: "/Bookworm.png",
            links: "https://auth-project-zeta.vercel.app/"
        },
        {
            id: 3,
            title:"Netflix Clone",
            className: "md:col-span-2",
            description: "A Netflix clone project was developed using React.js and Firebase, integrated with the TMDB API",
            thumbnail: "/Netflix.png",
            links: "https://netflix-clone-seven-bay.vercel.app/"
        },
        {
            id: 4,
            title:"Plot Palette",
            className: "col-span-1 ",
            description: "A social media platform for movie enthusiasts allowing users to like and rate movies.",
            thumbnail:
                "/PlotPalette.png",
            
            links: "https://plot-palette.vercel.app/"
        },
        {
            id:5 ,
            title: "Twitter",
            description:"Twitter-like web application built using the MERN stack  React Query for data fetching and state management, and TailwindCSS for styling. ",
            className: "md:col-span-2",
            thumbnail: "/Twitter.png",
            links: "https://twitter-6jt8.onrender.com/login"
        },
       
    ];
    return (
        <div className='bg-black' >
            <div className='grid grid-cols-1 p-4  lg:ml-10 lg:mr-10  sm:grid-cols-2  lg:grid-cols-3 ' >
                {cards.map((data, index) => (
                    <Card {...data} key={data.id} />
                ))}
            </div></div>
  )
}






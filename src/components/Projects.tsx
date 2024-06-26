import React from 'react'
import { Card } from './Cards'

export function Projects() {

    const cards = [
        {
            id: 1,
            title:"Netflix Clone",
            className: "md:col-span-2",
            description: "A Netflix clone project was developed using React.js and Firebase, integrated with the TMDB API",
            thumbnail: "/Netflix.png",
            links: "https://netflix-clone-seven-bay.vercel.app/"
        },
        {
            id: 2,
            title:"Plot Palette",
            className: "col-span-1 ",
            description: "A social media platform for movie enthusiasts allowing users to like and rate movies.",
            thumbnail:
                "/PlotPalette.png",
            
            links: "https://plot-palette.vercel.app/"
        },
        {
            id: 3,
            title: "AyurScan",
            description:"Web based application to identify medicinal herbs through image processing",
            className: "md:col-span-2",
            thumbnail: "/AyurScan.png",
            links: "https://github.com/bhavyakashmira/AyurScan"
        },
       
    ];
    return (
        <div className='bg-black' >
            <h1 id='projects' className="font-bold text-white font-para text-3xl md:text-6xl flex justify-center ">PROJECTS</h1>
            <div className='grid grid-cols-1 p-4  lg:ml-10 lg:mr-10  sm:grid-cols-2  lg:grid-cols-3 ' >
                {cards.map((data, index) => (
                    <Card {...data} key={data.id} />
                ))}
            </div></div>
  )
}






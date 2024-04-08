import React from 'react'
import { Card } from './Cards'

export function Projects() {

    const cards = [
        {
            id: 1,
            title:"Netflix Clone",
            className: "md:col-span-2",
            description: "A Netflix clone project was developed using React.js and Firebase, integrated with the TMDB API",
            thumbnail: "/Netflix.png"
        },
        {
            id: 2,
            title:"Plot Palette",
            className: "col-span-1 ",
            description: "A social media platform for movie enthusiasts allowing users to like and rate movies.",
            thumbnail:
                "/PlotPalette.png",
        },
        {
            id: 3,
            title: "Netflix Clone",
            description:"A Netflix clone project was developed using React.js and Firebase, integrated with the TMDB API",
            className: "md:col-span-2",
            thumbnail: "/Netflix.png"
        },
       
    ];
    return (
        <>
            <h1 className='text-4xl flex justify-center ' >PROJECTS</h1>
            <div className='grid grid-cols-3 p-10' >

                {cards.map((data, index) => (
                    <Card {...data} key={data.id} />
                ))}
            </div></>
      
  )
}






import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Animatedprojects() {
    const testimonials = [
        {
            quote:
                "Authorhub is a platform for writers to create, organize, and share stories, connecting readers and authors.",
            name: "Author Hub",
            designation: "MERN",
            src: "/AuthorHub.png",
            links: "https://auth-project-zeta.vercel.app/"
        },
        {
            quote:
                "A Netflix clone project was developed using React.js and Firebase, integrated with the TMDB API",
            name: "Netflix clone",
            designation: "MERN",
            src: "/Netflix.png",
            links: "https://netflix-clone-seven-bay.vercel.app/"
        },
        {
            quote:
                "A social media platform for movie enthusiasts allowing users to like and rate movies.",
            name: "Plot Palette",
            designation: "MERN",
            src: "/PlotPalette.png",
            links: "https://plot-palette.vercel.app/"
        },
        {
            quote:
                "Twitter-like web application built using the MERN stack  React Query for data fetching and state management, and TailwindCSS for styling. ",
            name: "Twitter",
            designation: "MERN",
            src: "/Twitter.png",
            links: "https://twitter-6jt8.onrender.com/login"
        },
        
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}

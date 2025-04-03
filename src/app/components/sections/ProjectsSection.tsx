"use client";

import React, { useEffect, useRef, useState } from "react";
import TiltingLable from "../ui/TiltingLable";
import clsx from "clsx";
import p1 from '../../../../public/assets/Image/project-example.jpg'
import Image from "next/image";

const projects = [
    {
        "title": "Title 1",
        "name": "Snapchat Rewards- Boosting Engagement with Gamified Incentives",
        "description": "Crafted a coin-based reward system to boost motivation, engagement, and retention through personalized rewards.",
        "keyPoints": [
            "Feature Enhancement",
            "Gamification",
        ],
        "image": p1,
        "link": "https://www.example.com",
        "bgClr": "bg-[#fdf4d2]",
        "keyClr": "bg-[#f8e6a9]",
        "buttonClr": "hover:bg-[#F28100]"
    },
    {
        "title": "Title 2",
        "name": "Snapchat Rewards- Boosting Engagement with Gamified Incentives",
        "description": "Crafted a coin-based reward system to boost motivation, engagement, and retention through personalized rewards.",
        "keyPoints": [
            "Feature Enhancement",
            "Gamification",
        ],
        "image": p1,
        "link": "https://www.example.com",
        "bgClr": "bg-[#fde7ea]",
        "keyClr": "bg-[#f9c8cc]",
        "buttonClr": "hover:bg-[#f97782]"
    },
    {
        "title": "Title 3",
        "name": "Snapchat Rewards- Boosting Engagement with Gamified Incentives",
        "description": "Crafted a coin-based reward system to boost motivation, engagement, and retention through personalized rewards.",
        "keyPoints": [
            "Feature Enhancement",
            "Gamification",
        ],
        "image": p1,
        "link": "https://www.example.com",
        "bgClr": "bg-[#e8fae2]",
        "keyClr": "bg-[#d2f2c6]",
        "buttonClr": "hover:bg-[#0e7367]"
    },
]

const ProjectsSection = () => {

    const projectCardRef = useRef<HTMLDivElement>(null);
    const [projectCardHeight, setProjectCardHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (projectCardRef?.current) {
                setProjectCardHeight(projectCardRef.current?.offsetHeight);
            }
        };

        window.addEventListener("resize", updateHeight);
        updateHeight(); // Initial call

        return () => window.removeEventListener("resize", updateHeight);
    }, []);


    return (
        <section id="Projects" className="relative w-full min-h-fit pt-20 bg-cyan-5000">
            
             {/* Sticky Header */}
            <div
                className="sticky  top-20 z-10 w-full h-28 flex items-center justify-center bg-yellow-3000"
                style={{marginBottom:`${projectCardHeight+28}px`}}
            >
                <div className="absolute top-2 md:top-1/2 md:-translate-y-1/2 left-5 lg:left-40 xl:left-1/4">
                    <TiltingLable name="Projects"/>
                </div>
                <h2 className="text-center font-bricolage font-semibold text-3xl">
                    A peek into <br /> My Playground of{" "}
                    <span className="text-[#f46572]">Work</span>
                </h2>
            </div>

            {/* Project Cards - Stacking Effect */}
            <div 
                className="w-full mb-20 h-fit flex flex-col items-center gap-16 mt-5"
                style={{marginTop: `-${projectCardHeight}px` }}
            >

                {projects?.map(((project, i) => {

                    const {title, name, description, keyPoints, bgClr, keyClr, buttonClr, image} = project;

                    return (
                        <figure 
                            key={i} 
                            ref={projectCardRef}
                            className={clsx(`sticky top-56 w-4/5 lg:w-3/5 xl:w-[45%] h-fit md:h-96 xl:h-[420px] flex flex-col items-end justify-start bg-red-6000`)}
                            style={{zIndex: 10+i+1}}
                        >

                            <div 
                                className={clsx( 'project-title', `${bgClr}`, ` w-20 md:w-36 py-1.5 text-center font-satoshi text-base font-medium text-[#222222] rounded-t-2xl`)}
                                style={{
                                    "--dynamic-mr": `${80 * i}px`,
                                    "--dynamic-md-mr": `${146 * i}px`
                                } as React.CSSProperties}
                            >
                                {title}
                            </div>

                            <div className={`h-fit md:flex-grow w-full p-4 md:p-8 flex flex-col md:flex-row items-center justify-center gap-8 ${bgClr} rounded-2xl rounded-tr-none`}>

                                <aside className="relative w-3/4 aspect-[4/2] md:w-2/5 md:h-full bg-red-4000">

                                    <Image src={image} alt={`project-${i+1}`} fill className="w-full. h-full. bg-cover bg-center rounded-xl"/>

                                </aside>

                                <aside className="w-full md:w-3/5 h-fit md:h-full flex flex-col gap-3 md:gap-5 bg-red-4000">

                                    <h2 className="font-satoshi text-lg font-medium text-[#222222]">{name}</h2>

                                    <div className="w-full flex items-center justify-start gap-2">

                                        {keyPoints?.map(key => (
                                            <div key={key} className={`p-1 px-2.5 font-sans text-sm font-normal text-[#535353] ${keyClr} rounded-full`}>{key}</div>
                                        ))}

                                    </div>

                                    <p className="font-satoshi text-base font-normal text-black">{description}</p>

                                    <button className={`group mt-auto w-full md:w-fit px-5 py-1.5 bg-[#535353] ${buttonClr} text-white font-satoshi text-lg border border-white rounded-full shadow-none hover:shadow-[2px_3px_0px_black] hover:scale-110 duration-[400ms] transition-all`}>
                                        View Project <span className="group-hover:scale-x-[-1] transition-transform inline-block">👀</span>
                                    </button>

                                </aside>

                            </div>

                        </figure>
                    )
                }))}

            </div>

        </section>
    );
};

export default ProjectsSection;

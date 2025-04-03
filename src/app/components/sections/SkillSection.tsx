"use client"
import React, { useRef, useState } from 'react';
import TiltingLable from '../ui/TiltingLable';
import htmlLogo from '../../../../public/assets/Icon/html-5.png';
import cssLogo from '../../../../public/assets/Icon/css-3.png';
import tailwindcssLogo from '../../../../public/assets/Icon/tailwind-css.png';
import jsLogo from '../../../../public/assets/Icon/js.png';
import typescriptLogo from '../../../../public/assets/Icon/typescript2.png';
import reactLogo from '../../../../public/assets/Icon/react.png';
import nextjsLogo from '../../../../public/assets/Icon/nextjs.png';
import gitLogo from '../../../../public/assets/Icon/github.png';
import shadcnLogo from '../../../../public/assets/Icon/shadcn-ui-logo-.png';
import skillLogo from '../../../../public/assets/Icon/skillLogo.jpg';
import Image from 'next/image';
import {motion, useInView} from 'framer-motion'

const SkillSection = () => {

    const ordits = [
        {
            childs: [
                // {icon: htmlLogo, name: 'Git', radius: -9, offset: 0},
                // {icon: htmlLogo, name: 'Jest', radius: 0, offset: 0},
                // {icon: htmlLogo, name: 'Webpack', radius: -9, offset: 0},
            ]
        },
        {
            childs: [
                {icon: gitLogo, name: 'Git', radius: -2, offset: -15},
                {icon: reactLogo, name: 'React', radius: 0, offset:  50},
                {icon: nextjsLogo, name: 'next', radius: -0, offset: -50},
                {icon: shadcnLogo, name: 'Shadcn', radius: -2, offset: 15},
            ]
        },
        {
            childs: [
                {icon: typescriptLogo, name: 'TypeScript', radius: -9, offset: 40},
                {icon: jsLogo, name: 'Javascript', radius: -9, offset: -40},
                // {icon: htmlLogo, name: 'Node.js', radius: -9, offset: 0},
            ]
        },
        {
            childs: [ 
                {icon: tailwindcssLogo, name: 'Tailwind CSS', radius: -9, offset: 0},
                {icon: cssLogo, name: 'CSS', radius: 0, offset: 0},
                {icon: htmlLogo, name: 'HTML', radius: -9, offset: 0},
            ]
        },
        {}
        // {
        //     childs: [
        //         {icon: htmlLogo, name: 'TypeScript', radius: -9, offset: 0},
        //         {icon: htmlLogo, name: 'GraphQL', radius: 0, offset: 0},
        //         {icon: htmlLogo, name: 'Docker', radius: -9, offset: 0},
        //     ]
        // },
        
    ];

    // const childCount = 3; // number of children

    // Define the arc you want: from 30° to 150° gives you a 120° arc at the top.
    const startAngle = 0;
    const endAngle = 180;

    const orbitRef = useRef(null);
    const orbitInView = useInView(orbitRef, { once: true, margin: '0px' });
    console.log('orbitInView', orbitInView)
    const [isOverflowVisible, setIsOverflowVisible] = useState(false);

    return (
        <section className='w-full min-h-fit h-fit pt-20 md:pt-10 pb-20 md:pb-40 flex flex-col items-center justify-start gap-10 bg-[#ffffff]'>

            {/* Sticky Header */}
            <div className="relative w-full h-32 flex items-center justify-center bg-yellow-3000">
                <div className="absolute -top-12 sm:-top-10 md:top-1/3 lg:top-1/2 md:-translate-y-1/2 left-4 sm:left-7 md:left-10 lg:left-40 xl:left-1/4">
                    <TiltingLable name="Skill 🚀" />
                </div>
                <h2 className="text-center font-bricolage font-semibold text-3xl">
                    Turning vision into reality with <br />
                    <span className="text-[#f46572]"> Skills & Tools</span>
                </h2>
            </div>

            <div className='w-4/5 lg:w-3/5 xl:w-1/2 p-1 h-fit grid place-items-center bg-pink-5000 overflow-hidden.'>

                <div ref={orbitRef} className={`w-full aspect-[2/1] grid place-items-center bg-emerald-4000 ${ (isOverflowVisible && orbitInView) ? 'overflow-visible': 'overflow-hidden'}`}>

                    <motion.div 
                        initial={{ rotate: -180 }}
                        animate={orbitInView ? {rotate: 0} : { rotate: -180}}
                        transition={{ duration: 2, delay: 0, ease: 'easeOut' }}
                        onAnimationStart={() => setIsOverflowVisible(false)}
                        onAnimationComplete={()=> orbitInView ? setIsOverflowVisible(true): setIsOverflowVisible(false)}
                        style={{ transformOrigin: "bottom"}}
                        className="relative w-full h-full rounded-t-full bg-yellow-3000"
                    >

                        {ordits?.map(({childs}, i) => {

                            const orbitSize = 100 - (i * 20);

                            return(
                                <div 
                                    key={i}
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 grid place-items-center ${i === ordits?.length - 1 ? 'border-0' : 'border-2 border-r-[#f8f7f7] border-b-0 border-[#f2f2f2]'} ${i === 0 && 'border-t-[#fbf9f9]'} rounded-t-full`}
                                    style={{
                                        width: `${orbitSize}%`,
                                        minHeight: `${orbitSize }%`,
                                    }}
                                >
                                    <div className={`relative w-full h-full grid place-items-center rounded-t-full ${i === ordits?.length - 1 ? 'bg-violet-400. bg-white' : 'bg-white'}`}>

                                        {i === ordits?.length - 1 ? 

                                            
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={ isOverflowVisible ? { opacity: 1 } : { opacity: 0 }}
                                                transition={{ duration: 2, delay: 0, ease: 'easeInOut' }}
                                                className='absolute z-[9999] top-full left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[200%] border-2 border-[#d5d5d5] bg-white rounded-full drop-shadow-xl'
                                            >

                                                <div className="relative w-full h-full bg-fuchsia-400 rounded-full">
                                                    <Image
                                                        src={skillLogo}
                                                        alt="Skill Logo"
                                                        fill quality={100}
                                                        className='scale-110 rounded-full'
                                                    />
                                                </div>

                                            </motion.div>:
                                        
                                            <>
                                                {childs?.map((child, j) => {
                                                    // Calculate an angular offset per orbit layer (e.g., 5° per layer)
                                                    const orbitOffset = 1 * (child.offset); // adjust this value as needed
                                                    // Adjust the angle range for this orbit layer
                                                    const layerStartAngle = startAngle + orbitOffset;
                                                    const layerEndAngle = endAngle + orbitOffset;
                                                    // Evenly distribute the child angles within the adjusted range
                                                    const angle = layerStartAngle + (j / (childs.length - 1)) * (layerEndAngle - layerStartAngle);
                                                    const rad = (angle * Math.PI) / 180;
                                                    // Use your existing localRadius (make sure it's appropriate for this orbit's coordinate system)
                                                    const localRadius = 50 + (child.radius); // adjust as needed so child's outer edge sits on the border
                                                    const left = 50 + localRadius * Math.cos(rad);
                                                    const top = 50 - localRadius * Math.sin(rad);

                                                    return (
                                                        <div
                                                            key={j}
                                                            className="absolute size-8 sm:size-10 md:size-12 lg:size-14 grid place-items-center bg-white text-white rounded-full drop-shadow-2xl"
                                                            style={{
                                                                left: `${left}%`,
                                                                top: `${top}%`,
                                                                transform: 'translate(-50%, -50%)'
                                                            }}
                                                        >
                                                            <div className='relative w-2/3 h-2/3 grid place-items-center'>
                                                                <Image
                                                                    src={child.icon}
                                                                    alt="HTML Logo"
                                                                />
                                                            </div>
                                                        </div>
                                                    );
                                                })}


                                            </>
                                    }
                                    </div> 
                                </div>
                            )
                        })}

                    </motion.div>

                </div>

            </div>
            
        </section>
    );
    
};

export default SkillSection;

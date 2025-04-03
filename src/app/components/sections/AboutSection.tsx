"use client";
import React, { useRef } from 'react';
import TiltingLable from '../ui/TiltingLable';
import sampleImg from '../../../../public/assets/Image/backiee-293518.jpg';
import Image from 'next/image';
import {motion, useInView } from 'framer-motion';

const AboutSection = () => {

    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    const card1InView = useInView(card1Ref, { once: false, margin: "-50px" });
    const card2InView = useInView(card2Ref, { once: false, margin: "-50px" });
    const card3InView = useInView(card3Ref, { once: false, margin: "-50px" });


    return (
        <section id='About' className='w-full h-fit py-20 flex flex-col items-center justify-start gap-10 bg-[#f7f7f7]'>
            
            {/* Sticky Header */}
            <div className="relative w-full h-32 flex items-center justify-center bg-yellow-3000">
                <div className="absolute -top-12 sm:-top-10 md:top-1/3 lg:top-1/2 md:-translate-y-1/2 left-4 sm:left-7 md:left-10 lg:left-40 xl:left-1/4">
                    <TiltingLable name="About me" />
                </div>
                <h2 className="text-center font-bricolage font-semibold text-3xl">
                    Now pour a Cup, <br />
                    get comfy & step into <br className='sm:hidden'/>
                    <span className="text-[#f46572]"> My World</span>
                </h2>
            </div>

            <div className='w-4/5 lg:w-3/4 min-h-fit lg:min-h-96 h-fit bg-pink-3000 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0'>

                <aside className='order-2 lg:order-1 w-full lg:w-3/4 min-h-fit  h-full bg-[#ffffff].'>

                    <h2 className='font-satoshi text-lg font-semibold text-[#F46572]'>MY JOURNEY SO FAR</h2>

                    <p className='mt-5 font-satoshi text-base font-normal text-[#535353]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex et animi exercitationem quam ratione eaque ut obcaecati qui autem ad quia illo perferendis assumenda corrupti dolor, numquam veniam dignissimos doloribus.</p>

                    <p className='mt-2.5 font-satoshi text-base font-normal text-[#535353]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita, nisi perferendis quam molestias ut earum at ea deleniti quidem officiis maiores vitae dolorum, nobis sapiente, provident quia! Cupiditate, libero!</p>

                    <h2 className='mt-10 font-satoshi text-lg font-semibold text-[#F46572]'>WHAT I DO FOR FUN?</h2> 

                    <p className='mt-5 font-satoshi text-base font-normal text-[#535353]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex et animi exercitationem quam ratione eaque ut obcaecati qui autem ad quia illo perferendis assumenda corrupti dolor, numquam veniam dignissimos doloribus.</p>

                    <p className='mt-2.5 font-satoshi text-base font-normal text-[#535353]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita, nisi perferendis quam molestias ut earum at ea deleniti quidem officiis maiores vitae dolorum, nobis sapiente, provident quia! Cupiditate, libero!</p>

                </aside>

                <aside className='order-1 lg:order-2 w-1/5 min-h-fit h-52 lg:h-full flex lg:flex-col items-center justify-center gap-2. bg-red-4000'>

                    <motion.figure 
                        ref={card1Ref}
                        initial={{ opacity: 0, rotate: 0, y: 30 }}
                        animate={card1InView ? { opacity: 1, rotate: -3, y: 0 } : { opacity: 0, rotate: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='relative h-3/4 sm:h-[90%] md:h-full lg:h-auto lg:w-36 xl:w-40 aspect-[3/4] shrink-0 bg-white rounded-3xl overflow-hidden shadow-[3px_3.5px_0px_black]'
                    >
                        <Image src={sampleImg} alt="Sample Image" fill className="object-cover bg-center" />
                    </motion.figure>

                    <motion.figure 
                        ref={card2Ref}
                        initial={{ opacity: 0, rotate: 0, y: 30 }}
                        animate={card2InView ? { opacity: 1, rotate: 3, y: 0 } : { opacity: 0, rotate: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className='relative h-3/4 sm:h-[90%] md:h-full lg:h-auto lg:w-36 xl:w-40 aspect-[3/4] shrink-0 bg-white rounded-3xl overflow-hidden shadow-[3px_3.5px_0px_black]'
                    >
                        <Image src={sampleImg} alt="Sample Image" fill className="object-cover bg-center" />
                    </motion.figure>

                    <motion.figure
                        ref={card3Ref}
                        initial={{ opacity: 0, rotate: 0, y: 30 }}
                        animate={card3InView ? { opacity: 1, rotate: -3, y: 0 } : { opacity: 0, rotate: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className='relative lg:hidden h-3/4 sm:h-[90%] md:h-full lg:h-auto lg:w-36 xl:w-40 aspect-[3/4] shrink-0 bg-white rounded-3xl overflow-hidden shadow-[3px_3.5px_0px_black]'
                    >
                        <Image src={sampleImg} alt="Sample Image" fill className="object-cover bg-center" />
                    </motion.figure>

                </aside>

                    {/* <figure className='relative w-40 aspect-[3/4] bg-white rounded-xl overflow-hidden'>
                        <Image src={sampleImg} alt="Sample Image" fill className="object-cover bg-center" />
                    </figure> */}
            </div>

        </section>
    );
};

export default AboutSection;
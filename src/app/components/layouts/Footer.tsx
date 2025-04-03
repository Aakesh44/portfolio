"use client";
import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import {motion} from 'framer-motion'

const Footer = () => {
    return (
        <section className='w-full min-h-fit h-[60dvh] max-h-[500px] bg-[#ededed] flex flex-col items-center justify-start'>

            {/* Curve - Always Touching Footer */}
            <div className='relative w-full h-8 bg-yellow-4000'>

                <div className="absolute -top-full left-0 hidden. h-full w-full overflow-hidden leading-none">
                    <svg
                        className="w-full h-8 rotate-180"
                        viewBox="0 0 1200 20"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,5 
                C10,10 30,10 40,5 
                C50,0 70,0 80,5 
                C90,10 110,10 120,5 
                C130,0 150,0 160,5 
                C170,10 190,10 200,5 
                C210,0 230,0 240,5 
                C250,10 270,10 280,5 
                C290,0 310,0 320,5 
                C330,10 350,10 360,5 
                C370,0 390,0 400,5 
                C410,10 430,10 440,5 
                C450,0 470,0 480,5 
                C490,10 510,10 520,5 
                C530,0 550,0 560,5 
                C570,10 590,10 600,5 
                C610,0 630,0 640,5 
                C650,10 670,10 680,5 
                C690,0 710,0 720,5 
                C730,10 750,10 760,5 
                C770,0 790,0 800,5 
                C810,10 830,10 840,5 
                C850,0 870,0 880,5 
                C890,10 910,10 920,5 
                C930,0 950,0 960,5 
                C970,10 990,10 1000,5 
                C1010,0 1030,0 1040,5 
                C1050,10 1070,10 1080,5 
                C1090,0 1110,0 1120,5 
                C1130,10 1150,10 1160,5 
                C1170,0 1190,0 1200,5 
                L1200,0 L0,0 Z"
                            className="fill-[#ededed]"
                        />
                    </svg>
                </div>
            </div>

            <div className='w-4/5 lg:w-3/4 min-h-fit lg:min-h-96 h-fit bg-pink-3000 flex flex-col items-center justify-end gap-10'>

                <div className='w-full items-start space-y-2'>
                    <h1 className='font-bricolage font-bold text-4xl md:text-[54px] md:leading-[54px]'>Let&apos;s bring your ideas to life together!</h1>
                    <p className='font-satoshi text-base font-normal text-[#535353]'>Get in touch with us to learn more about our services and how we can help you achieve your goals.</p>
                </div>

                <div className='w-full flex items-center justify-between'>

                    <button className={`group mt-auto w-fit px-7 py-1.5 bg-[#FFA8B1] hover:bg-[#fa828e] text-[#222222] font-satoshi text-lg border border-white rounded-full shadow-none hover:shadow-[2px_3px_0px_black] hover:scale-110 duration-[400ms] transition-all`}>
                        Say Hello 
                        <motion.span 
                            animate={{ rotate: [0, 10, 0, 10, 0] }} // Waving effect
                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                            className="ml-2 origin-bottom-right inline-block"
                        >
                            👋🏻
                        </motion.span>
                    </button>

                    <div className='flex items-center gap-4'>
                        <a href="" className='size-10 grid place-items-center bg-white hover:text-[#0077B5] rounded-lg border border-white shadow-none hover:shadow-[2px_3px_0px_#0077B5] hover:scale-110 duration-[300ms] transition-all'><CiLinkedin  className='size-6'/></a>
                        <a href="" className='size-10 grid place-items-center bg-white hover:text-[#D14836] rounded-lg border border-white shadow-none hover:shadow-[2px_3px_0px_#D14836] hover:scale-110 duration-[300ms] transition-all'><IoMailOutline className='size-5' /></a>
                        <a href="" className='size-10 grid place-items-center bg-white hover:text-[#E4405F] rounded-lg border border-white shadow-none hover:shadow-[2px_3px_0px_#E4405F] hover:scale-110 duration-[300ms] transition-all'><BsInstagram className='size-5'/></a>
                    </div>
                </div>

                <div className='mt-10 text-center group'>
                    <p className='font-satoshi text-sm font-normal text-[#535353]'>Crafted with love <span className='group-hover:hidden'>🤍</span> <span className='hidden group-hover:inline'>❤️</span></p>
                    <p className='font-satoshi text-xs font-normal text-[#848484]'>© Aakesh 2025. All Rights Reserved.</p>
                </div>
            </div>
            
        </section>
    );
};

export default Footer;
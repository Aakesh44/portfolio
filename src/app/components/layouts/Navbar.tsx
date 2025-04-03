"use client";

import {Link as ScrollLink} from "react-scroll";
import React, { useState } from 'react';
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {

    const [openNavBar, setOpenNavBar] = useState(false);

    const toggleNavbar = () => { setOpenNavBar(!openNavBar)};  

    return (
        <nav className={`fixed top-0 left-0 z-50 w-full ${openNavBar ? 'h-52' : 'h-16'} sm:h-16 3xl:h-20 bg-white transition-all duration-300 ease-linear`}>

            <div className="relative w-full h-full bg-white">

                <div className={`w-full h-full pt-4 sm:pt-0 px-10 3xl:px-14 flex flex-wrap items-start sm:items-center justify-between bg-white. transition-[padding] overflow-hidden`}>

                    <ScrollLink
                        to={'Aakesh'}
                        spy={true}
                        smooth={true}
                        offset={0} // Adjust based on your navbar height
                        duration={500} 
                        className='w-fit text-start font-squarepeg text-2xl md:text-3xl 3xl:text-3xl font-medium text-black hover:text-[#f46572] transition-colors duration-500 cursor-pointer'
                    >
                            Aakesh.
                    </ScrollLink>

                    <button onClick={toggleNavbar} className="w-1/2 flex items-end justify-end sm:hidden bg-yellow-2000">
                        <RiMenu4Line className="size-6 scale-x-[-1] bg-red-5000" />
                    </button>

                    <ul className={`w-full sm:w-fit my-5 ${openNavBar ? 'flex' : 'hidden'} bg-cyan-300. sm:flex flex-col sm:flex-row items-center justify-center gap-8 font-satoshi text-sm 3xl:text-sm font-medium `}>
                        <li className='text-black hover:text-[#f46572] transition-colors duration-500 cursor-pointer'>
                            <ScrollLink 
                                to={'Projects'}
                                spy={true}
                                smooth={true}
                                offset={0} // Adjust based on your navbar height
                                duration={500} 
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li className='text-black hover:text-[#f46572] transition-colors duration-500 cursor-pointer'>
                            <ScrollLink 
                                to={'About'}
                                spy={true}
                                smooth={true}
                                offset={0} // Adjust based on your navbar height
                                duration={500} 
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className='text-black hover:text-[#f46572] transition-colors duration-500 cursor-pointer'>
                            <ScrollLink 
                                to={'Aakesh'}
                                spy={true}
                                smooth={true}
                                offset={0} // Adjust based on your navbar height
                                duration={500} 
                            >
                                Resume
                            </ScrollLink>
                        </li>
                    </ul>

                </div>

                {/* Flipped Curve - Always Touching Navbar */}
                <div className="absolute -bottom-full left-0 hidden. h-full w-full overflow-hidden leading-none">
                    <svg
                        className="w-full h-auto"
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
                            className="fill-white"
                        />
                    </svg>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

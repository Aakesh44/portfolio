import Image from 'next/image';
import React from 'react';
import ash from '../../../../public/assets/Image/ash.png';
import vector_1 from '../../../../public/assets/Image/Vector 1.png';
import vector_2 from '../../../../public/assets/Image/Vector 2.png';
import vector_3 from '../../../../public/assets/Image/Vector 3.png';
import Marquee from 'react-fast-marquee';
import TiltingLable from '../ui/TiltingLable';

const LandingSection = () => {
    return (
        <section id='Aakesh' className='relative w-full h-[100dvh] bg-[#ededed] grid place-items-center transition-all duration-300 ease-linear'>

            <section className='h-3/4 lg:h-fit w-[90%] sm:w-5/6 md:w-3/5 lg:w-5/6 xl:w-3/5 2xl:w-4/6 xl:pb-20 bg-white. grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 transition-[width] duration-300 ease-linear bg-yellow-3000'>

                <aside className='order-2 lg:order-1 relative col-span-1 row-span-2 lg:col-span-2 lg:row-span-1 h-full flex flex-col justify-center items-start gap-2 bg-lime-4000'>

                    <p className='font-squarepeg font-normal text-4xl md:text-5xl'>Hi, I&apos;m Aakesh!</p>

                    <h1 className='font-bricolage font-bold text-5xl md:text-[54px] md:leading-[54px]'>A Curious <br /> Solution Crafter</h1>

                    <h2 className='min-h-fit h-20 3xl:h-28 font-satoshi font-normal text-lg md:text-xl'>I believe in constantly evolving, turning every challenge into a canvas and every experience into a masterpiece.</h2>

                    <TiltingLable name='Frontend Developer' />

                </aside>

                <aside className='order-1 lg:order-2 col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 h-full bg-pink-4000 flex items-center justify-center lg:justify-end'>
                        
                    <div className='relative h-5/6 lg:h-auto lg:w-3/4 3xl:w-2/3 aspect-square rounded-full bg-white' style={{boxShadow: '2px 2px 0px #000'}}>

                        <Image src={ash} alt='profile' fill objectFit='cover' className='w-full rounded-full bg-center bg-contain hover:rotate-2'/>

                        <Image src={vector_1} alt='vector 1' className='absolute w-28 aspect-square -top-10 -left-10 animate-zoom.'/>

                        <Image src={vector_2} alt='vector 2' className='absolute h-10 w-32 scale-75 lg:scale-100 aspect-square bottom-1 -right-1/4 lg:animate-zoom'/>

                        <Image src={vector_3} alt='vector 3' className='absolute h-10 w-32 lg:h-12 lg:w-28 scale-75 lg:scale-100 aspect-square bottom-1/4 -right-[40%] lg:-right-1/4 lg:animate-zoom'/>

                    </div>

                </aside>
            
            </section>

            <div className='absolute bottom-5 lg:bottom-20 left-0 w-full h-fit py-5 bg-pink-4000 font-bricolage font-medium text-xl text-[#22222]'>

                <Marquee speed={50} gradient={true} gradientWidth={20}>
                    
                    <p className='mx-5'> ✨ Experience the magic of coding </p>

                    <p className='mx-5'> ✨ Experience the magic of coding </p>

                    <p className='mx-5'> ✨ Experience the magic of coding </p>

                    <p className='mx-5'> ✨ Experience the magic of coding </p>

                    <p className='mx-5'> ✨ Experience the magic of coding </p>

                    <p className='mx-5'> ✨ Experience the magic of coding </p>


                </Marquee>

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
                        className="fill-[#ededed]"
                    />
                </svg>
            </div>
            
        </section>
    );
};

export default LandingSection;
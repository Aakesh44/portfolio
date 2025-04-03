import React from 'react';
import TiltingLable from '../ui/TiltingLable';
import thinsilLogo from '../../../../public/assets/Icon/thinsilLogo.jpg'
import Image from 'next/image';

const experiences = [
    {
        company_name: 'Thinsil',
        job_title: 'Frontend Developer',
        duration: 'Apr 2024 - Present',
        descriptions: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
        ]
    },
    {
        company_name: 'Thinsil',
        job_title: 'Frontend Developer Intern',
        duration: 'Dec 2023 - Mar 2024',
        descriptions: [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae accusantium ducimus corporis, illo voluptates a, odit id possimus architecto dicta labore fugiat laboriosam nesciunt sequi in quidem sapiente aut non!',
        ]
    },

]

const ExperienceSection = () => {
    return (
        <section className='w-full h-fit py-20 pb-32 flex flex-col items-center justify-start gap-10 bg-[#ffffff]'>

            {/* Sticky Header */}
            <div className="relative w-full h-32 flex items-center justify-center bg-yellow-3000">
                <div className="absolute -top-12 sm:-top-10 md:top-1/3 lg:top-1/2 md:-translate-y-1/2 left-4 sm:left-7 md:left-10 lg:left-40 xl:left-1/4">
                    <TiltingLable name="Experience" />
                </div>
                <h2 className="text-center font-bricolage font-semibold text-3xl">
                    A Journey<br />
                    Through My Realm of <br className='sm:hidden' />
                    <span className="text-[#f46572]">Mastery</span>
                </h2>
            </div>

            <div className='w-11/12 md:w-4/5 lg:w-3/4 min-h-fit lg:min-h-96 h-fit bg-pink-3000 flex flex-col lg:flex-row items-center justify-between gap-5'>

                {experiences?.map(({company_name, job_title, duration, descriptions}, i) => 

                    <div key={i} className='w-full md:w-3/4 lg:w-1/2 h-fit p-5 bg-[#f4f4f4] flex items-start justify-start gap-5 rounded-2xl drop-shadow-lg overflow-hidden'>

                     {/* <div key={i} className='w-4/5 lg:w-3/5 xl:w-[45%] h-fit p-5 bg-[#f4f4f4] flex items-start justify-start gap-5 rounded-2xl drop-shadow-lg overflow-hidden'> */}

                        <aside className='h-14 aspect-square hidden md:flex items-start justify-center bg-yellow-3000'>
                            <div className='relative h-full aspect-square bg-white rounded-full'>
                                <Image src={thinsilLogo} alt={company_name} fill className='rounded-full p-1'/>
                            </div>
                        </aside>

                        <aside className='flex-grow h-full pl-0 space-y-4 bg-emerald-3000'>

                            <div className='w-full min-h-fit h-14 flex items-center justify-between'>

                                <aside>
                                    <h3 className="font-satoshi text-lg font-semibold text-[#F46572]">{company_name}</h3>
                                    <p className="font-satoshi text-base font-medium text-[#535353]">{job_title}</p>
                                </aside>
                                <aside className="flex items-center justify-end gap-2">
                                    <p className='font-satoshi text-sm font-medium text-[#848484]'>{duration}</p>
                                </aside>

                            </div>

                            <ul className='w-full font-satoshi text-sm font-normal text-[#535353] space-y-3 bg-yellow-4000'>
                                {descriptions?.map((description, i) => 
                                    <li key={i}>{description}</li>
                                )}

                            </ul>

                        </aside>

                    </div>
                )}


            </div>

        </section>
    );
};

export default ExperienceSection;
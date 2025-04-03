import React from 'react';
import TiltingLable from '../ui/TiltingLable';

const education = [
    {
        name: 'Manonmaniam Sundaranar University',
        degree: 'BSc in Computer Science',
        duration: 'Jun 2020 - Jun 2023',
    }

]

const EducationSection = () => {
    return (
        <section className='w-full h-fit pb-20 flex flex-col items-center justify-start gap-10 bg-[#ffffff]'>

            {/* Sticky Header */}
            <div className="relative w-full h-32 flex items-center justify-center bg-yellow-3000">
                <div className="absolute -top-12 sm:-top-10 md:top-1/3 lg:top-1/2 md:-translate-y-1/2 left-4 sm:left-7 md:left-10 lg:left-40 xl:left-1/4">
                    <TiltingLable name="Education" />
                </div>
                <h2 className="text-center font-bricolage font-semibold text-3xl">
                    The Foundation of<br />
                    My Learning <br className='sm:hidden' />
                    <span className="text-[#f46572]">Odyssey</span>
                </h2>
            </div>

            <div className='w-full min-h-fit h-fit bg-pink-3000 flex flex-col items-center justify-start gap-10'>

                {education?.map(({ name, degree, duration }, i) =>

                    <div key={i} className='w-4/5 lg:w-3/5 xl:w-[45%] h-fit p-5 bg-[#f4f4f4] flex items-start justify-start gap-5 rounded-2xl drop-shadow-lg overflow-hidden'>

                        <aside className='h-14 aspect-square hidden md:flex items-start justify-center bg-yellow-3000'>
                            <div className='relative h-full aspect-square bg-white rounded-full'>

                            </div>
                        </aside>

                        <aside className='flex-grow h-full pl-0 space-y-4 bg-emerald-3000'>

                            <div className='w-full min-h-fit h-14 flex items-center justify-between'>

                                <aside>
                                    <h3 className="font-satoshi text-lg font-semibold text-[#F46572]">{name}</h3>
                                    <p className="font-satoshi text-base font-medium text-[#535353]">{degree}</p>
                                </aside>
                                <aside className="flex items-center justify-end gap-2">
                                    <p className='font-satoshi text-sm font-medium text-[#848484]'>{duration}</p>
                                </aside>

                            </div>

                        </aside>

                    </div>
                )}


            </div>

        </section>
    );
};

export default EducationSection;
import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='bgup relative'>
            <h2 className='text-white text-8xl w-3/4 pl-20 pt-20 font-bold'>Best Machine and Casting Solution</h2>
            <div>
                <div className='w-52 h-52 mt-16 bg-[#ec223360] ml-20'>
                    <div className='flex justify-center items-center pt-14'>
                        <h2 className='text-style'>01</h2>
                        <p className="border border-[#ffffffaf] w-10"></p>
                    </div>
                    <div className='absolute ml-16 mt-3'>
                        <div className='flex justify-center items-center gap-5'>
                            <h2 className='text-white text-2xl'>Mining/Mineral Processing</h2>
                            <h2 className='text-gradiant text-2xl'>Rubber Industry</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
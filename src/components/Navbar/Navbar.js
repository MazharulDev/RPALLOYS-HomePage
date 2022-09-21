import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'
import icono from '../../assets/icon/Vector.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4'>
            <HiMenuAlt3 className='text-xl text-[#222222]' />
            <h2 className='text-2xl font-bold flex justify-center items-center text-[#222222]'><span>RP ALL</span> <img className='w-4' src={icono} alt="" /> <span>YS</span> </h2>
            <div className='flex justify-center items-center gap-2 border-b-2 border-[#222222] text-[#222222]'>
                <a href="#">Get in touch</a>
                <BsArrowRight />
            </div>
        </div>
    );
};

export default Navbar;
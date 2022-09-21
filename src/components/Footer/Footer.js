import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className='md:flex justify-around p-8 bg-[#181818] text-white'>
            <div>
                <h2 className='text-2xl font-bold'>About Us</h2>
                <p className='text-2xl font-bold'>Infastructure</p>
                <p className='text-2xl font-bold'>Contact Us</p>
            </div>
            <div>
                <h2 className='text-2xl'>Industry</h2>
                <ul className='list-disc'>
                    <li>Cement</li>
                    <li>Mining processing</li>
                    <li>Rubber</li>
                </ul>
            </div>
            <div className='pt-6'>
                <ul className='list-disc'>
                    <li>Suger</li>
                    <li>Fartilizer</li>
                    <li>power</li>
                </ul>
            </div>
            <div className='md:text-right'>
                <div className='md:flex justify-end text-4xl'>
                    <AiFillTwitterCircle />
                    <AiFillInstagram />
                    <AiFillLinkedin />
                </div>
                <p>2022 &copy; Rp alloys & steel larging</p>
                <p>Design credits: Art Attackk</p>
            </div>
        </div>
    );
};

export default Footer;
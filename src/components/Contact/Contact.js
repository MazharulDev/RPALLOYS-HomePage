import React from 'react';
import './contact.css'
import { MdOutlineLocationOn } from 'react-icons/md'
import map from '../../assets/img/map.png'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephoneInbound } from 'react-icons/bs'
import { BsChatRight } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='bg-map'>
            <div className='md:flex justify-center items-center gap-52 h-full'>
                <div>
                    <h2 className='text-6xl font-bold'>Get in touch</h2>
                    <p className='w-3/4 flex items-start mt-5'><MdOutlineLocationOn className="text-red-500 text-5xl pb-6" /> 7 south side GT.Rd sector 13, Bulandshahr Road Industrial area, Gajibad uttor prodesh</p>
                    <div className='w-5/6 flex justify-start'>
                        <img src={map} alt="" />
                    </div>
                </div>
                <div className='bg-white w-96 py-20 px-5 shadow-lg rounded-md border-4'>
                    <form class="w-full max-w-sm py-10">
                        <div class="flex items-center border-b border-gray-300 py-2">
                            <AiOutlineUser className='text-gray-600 text-2xl' />
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full Name" aria-label="Full name" />
                        </div>
                        <div class="flex items-center border-b border-gray-300 py-2 mt-4">
                            <AiOutlineMail className='text-gray-600 text-2xl' />
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Full name" />
                        </div>
                        <div class="flex items-center border-b border-gray-300 py-2 mt-4">
                            <BsTelephoneInbound className='text-gray-600 text-2xl' />
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone Number" aria-label="Full name" />
                        </div>
                        <div class="flex items-center border-b border-gray-300 py-2 mt-4">
                            <BsChatRight className='text-gray-600 text-2xl mb-4' />
                            <textarea class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Type your message here" aria-label="Full name" />
                        </div>
                        <input className='p-3 rounded-3xl px-14 text-white bg-red-600 mt-10' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
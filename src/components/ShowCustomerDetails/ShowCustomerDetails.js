import React from 'react';
import './showCustomer.css'
import factori from '../../assets/icon/building.png'
import factori2 from '../../assets/icon/piramid.png'
import student from '../../assets/icon/student.png'
import iconsec from '../../assets/icon/Group 3.png'

const ShowCustomerDetails = () => {
    return (
        <div className=' mt-24 bg-sec'>
            <div className='flex justify-center items-center h-full w-3/4 mx-auto'>
                <div className='flex justify-center items-center'>
                    <div>
                        <p className='text-white font-bold mb-2'>Customer First Approach</p>
                        <div className='flex justify-start'>
                            <h2 className='text-6xl w-3/5 font-bold text-white mt-5'>World Class Machine & Infra</h2>
                        </div>
                        <p className='text-white w-2/4 mt-8'>Lorem ipsum dolor  amet consectetur adipisicing elit. Sit hic debitis atque. Enim quaerat illum iure perferendis</p>
                        <div className='mt-20 flex justify-start items-center gap-20'>
                            <div>
                                <img src={factori} alt="" />
                                <p className='text-3xl text-white font-bold mt-2'>10,000 FT<sup>2</sup></p>
                                <p className='text-lg text-white'><span className='font-bold'>Factory</span> area</p>
                            </div>
                            <div>
                                <img src={factori2} alt="" />
                                <p className='text-3xl text-white font-bold mt-2'>30+</p>
                                <p className='text-lg text-white'><span className='font-bold'>Factory</span> We Have</p>
                            </div>
                            <div>
                                <img src={student} alt="" />
                                <p className='text-3xl text-white font-bold mt-2'>2,000+</p>
                                <p className='text-lg text-white'><span className='font-bold'>Worker</span> we Have</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img className='w-40' src={iconsec} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCustomerDetails;
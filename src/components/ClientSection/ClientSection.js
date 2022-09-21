import React from 'react';

const ClientSection = () => {
    return (
        <div className='flex justify-center w-3/4 mx-auto mt-24'>
            <div>
                <p className='text-red-500 font-bold mb-2'>Smart Warking Team</p>
                <div className='flex justifys-start'>
                    <h2 className='text-6xl w-2/4 font-bold text-blk'>Some of the best of industry experts</h2>
                </div>
                <div className='w-2/5 float-right align-middle text-blk'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae sequi sed vero aliquid esse laborum sit recusandae. Dolores reiciendis molestias dicta eius doloremque officia natus autem eveniet repellat ratione!</p>
                </div>
                <div className='mt-48 flex justify-around items-center'>
                    <div className='text-center  text-blk'>
                        <h2 className="text-7xl font-bold">20 <span className='text-red-600'>+</span></h2>
                        <p><span className='font-bold'>Location</span> WorldWide</p>
                    </div>
                    <div className='text-center  text-blk'>
                        <h2 className="text-7xl font-bold">23 <span className='text-red-600'>+</span></h2>
                        <p>Year Of <span className='font-bold'>Experiance</span></p>
                    </div>
                    <div className='text-center  text-blk'>
                        <h2 className="text-7xl font-bold">20 <span className='text-red-600'>+</span></h2>
                        <p>Global Happy <span className='font-bold'>Clients</span></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClientSection;
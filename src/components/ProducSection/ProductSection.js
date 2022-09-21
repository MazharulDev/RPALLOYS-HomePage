import React from 'react';
import './productSection.css'
import cement from '../../assets/img/pexels-rodolfo-quirós-2219024 1.png'
import mining from '../../assets/img/pexels-pixabay-33192 2.png'
import rubber from '../../assets/img/image 16.png'

const ProductSection = () => {
    return (
        <div className='md:flex justify-center w-3/4 mx-auto mt-24'>
            <div>
                <p className='text-red-500 font-bold mb-2'>Customer First Approach</p>
                <div className='flex justify-start'>
                    <h2 className='text-6xl w-3/4 font-bold text-blk'>First choice of procurement partnars across global</h2>
                </div>
                <div className='mt-10 ml-3 md:flex items-center gap-16'>
                    <div className="card"><img src={cement} alt="" />
                        <div className="info">
                            <p className='border border-red-500 w-14'></p>
                            <h1 className='text-xl'>Cement Industry</h1>
                            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        </div>
                    </div>
                    <div className="card my-8"><img src={mining} alt="" />
                        <div className="info">
                            <p className='border border-red-500 w-14'></p>
                            <h1 className='text-xl'>Mining Processing</h1>
                            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        </div>
                    </div>
                    <div className="card"><img src={rubber} alt="" />
                        <div className="info">
                            <p className='border border-red-500 w-14'></p>
                            <h1 className='text-xl'>Rubber Industry</h1>
                            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
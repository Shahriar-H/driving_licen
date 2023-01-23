import React from 'react';
import Link from 'next/link';

const DrivingLesseon = () => {
    return (
        <div className='px-5 lg:px-24 py-12'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl font-bold'>Book driving lessons with confidence</h1>
                <p className='text-xl text-gray-500'>Choose a driving instructor you can trust</p>
            </div>

            <div className='flex space-x-1 justify-center items-center flex-wrap'>
                <div className='text-center w-full md:w-3/12 p-3'>
                    <i className="bi bi-star text-5xl mb-3 text-blue-400"></i>
                    <h2 className='text-xl'>Instructor ratings</h2><br></br>
                    <p>Access peer reviews & find an instructor who has consistently provided a great learning experience.</p>
                </div>
                <div className='text-center w-full md:w-3/12 p-3'>
                    <i className="bi bi-star text-5xl mb-3 text-blue-400"></i>
                    <h2 className='text-xl'>Instructor ratings</h2><br></br>
                    <p>Access peer reviews & find an instructor who has consistently provided a great learning experience.</p>
                </div>
                <div className='text-center w-full md:w-3/12 p-3'>
                    <i className="bi bi-star text-5xl mb-3 text-blue-400"></i>
                    <h2 className='text-xl'>Instructor ratings</h2><br></br>
                    <p>Access peer reviews & find an instructor who has consistently provided a great learning experience.</p>
                </div>
                <div className='text-center w-full md:w-3/12 p-3'>
                    <i className="bi bi-star text-5xl mb-3 text-blue-400"></i>
                    <h2 className='text-xl'>Instructor ratings</h2><br></br>
                    <p>Access peer reviews & find an instructor who has consistently provided a great learning experience.</p>
                </div>
            </div><br></br><br></br>
            <div className='text-center w-full'>
                {/* <Link href="/" className=' bg-blue-400 px-4 py-3 rounded-md text-white'><a>Book Driving Lesson Now</a></Link> */}
            </div>
        </div>
    );
}

export default DrivingLesseon;

import React from 'react';
import Link from 'next/link';

const UpcomingBooking = () => {
    return (
        <div>
            <div className='w-full bg-white p-5 border1 rounded-md space-y-7' >
                <h1 className='text-xl lg:text-2xl font-bold ml4'>Upcoming Bookings</h1>
                <div>
                    <div className='flex flex-wrap mt-2 justify-between space-y-3 lg:space-y-0'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-600 text-white rounded-md px-2 w-fit'>Auto Lesson - 1hour</p>
                            <h3>Tomorrow, 26 Jan 2023 12:00 PM - 1:00 PM</h3>
                            <p className='text-gray-500 text-xs underline'>
                                <i className="bi bi-geo-alt-fill"></i> 3 Caines Cres, St. Marys 2760 NSW
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>Learner</p>
                            <h3>Eduard J.</h3>
                            <p className='text-xs text-gray-500 rounded-md w-fit'>Learner Age 18</p>
                            <p className='text-gray-500 underline text-xs'>
                                <i className="bi bi-telephone-fill"></i> 01303954432</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap space-y-5 sm:space-y-0 sm:space-x-3 mt-5">
                        <div className="text-center">
                            <Link href="/pages/book_online" className='px-10 py-2 bg-black text-sm text-white rounded-md uppercase w-full lg:w-1/2'>VIEW BOOKING</Link>
                        </div>
                        <div className="text-center">
                            <Link href="/pages/details" className='px-10 py-2 w-full lg:w-1/2 bg-gray-300 text-sm text-black rounded-md uppercase'>LEARNER DETAILS</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-wrap mt-2 justify-between space-y-3 lg:space-y-0'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>About Lesson - 1hour</p>
                            <h3>Tomorrow, 26 Jan 2023 12:00 PM - 1:00 PM</h3>
                            <p className='text-gray-500 text-xs underline'>
                                <i className="bi bi-geo-alt-fill"></i> 3 Caines Cres, St. Marys 2760 NSW
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>Learner</p>
                            <h3>Eduard J.</h3>
                            <p className='text-xs text-gray-500 rounded-md w-fit'>Learner Age 18</p>
                            <p className='text-gray-500 underline text-xs'>
                                <i className="bi bi-telephone-fill"></i> 01303954432</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap space-y-5 sm:space-y-0 sm:space-x-3 mt-5">
                        <div className="text-center">
                            <Link href="/pages/book_online" className='px-10 py-2 bg-black text-sm text-white rounded-md uppercase w-full lg:w-1/2'>VIEW BOOKING</Link>
                        </div>
                        <div className="text-center">
                            <Link href="/pages/details" className='px-10 py-2 w-full lg:w-1/2 bg-gray-300 text-sm text-black rounded-md uppercase'>LEARNER DETAILS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>

                    
        </div>
    );
}

export default UpcomingBooking;

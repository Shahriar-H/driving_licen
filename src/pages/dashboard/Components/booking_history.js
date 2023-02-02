import React from 'react';
import Link from 'next/link';

const BookingHistory = () => {
    return (
        <div>
            <div className='w-full bg-white p-5 border1 rounded-md space-y-7' >
                <h1 className='text-xl lg:text-2xl font-bold'>Booking History</h1>
                <div>
                    <div className='flex flex-wrap mt-2 justify-between space-y-3 lg:space-y-0'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-600 text-white rounded-md px-2 w-fit'>#6234556</p>
                            <p className='text-xs  rounded-md w-fit'>Auto Lesson - 1hour</p>
                            <h3>Tomorrow, 26 Jan 2023 12:00 PM - 1:00 PM</h3>
                            <p className='text-gray-500 text-xs underline'>
                                <i class="bi bi-geo-alt-fill"></i> 3 Caines Cres, St. Marys 2760 NSW
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>Learner</p>
                            <h3>Eduard J.</h3>
                            <p className='text-xs text-gray-500 rounded-md w-fit'>Learner Age 18</p>
                            <p className='text-gray-500 underline text-xs'>
                                <i class="bi bi-telephone-fill"></i> 01303954432</p>
                        </div>
                    </div>
                    <div className=" space-y-5 sm:space-y-0 sm:space-x-3 mt-5 w-full">
                        <p className='w-fit px-2 bg-green-200 text-green-700 rounded-md text-xs'><i class="bi bi-check2-circle"></i> Payment (Completed)</p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-wrap mt-2 justify-between space-y-3 lg:space-y-0'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-600 text-white rounded-md px-2 w-fit'>#6234556</p>
                            <p className='text-xs rounded-md w-fit'>About Lesson - 1hour</p>
                            <h3>Tomorrow, 26 Jan 2023 12:00 PM - 1:00 PM</h3>
                            <p className='text-gray-500 text-xs underline'>
                                <i class="bi bi-geo-alt-fill"></i> 3 Caines Cres, St. Marys 2760 NSW
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>Learner</p>
                            <h3>Eduard J.</h3>
                            <p className='text-xs text-gray-500 rounded-md w-fit'>Learner Age 18</p>
                            <p className='text-gray-500 underline text-xs'>
                                <i class="bi bi-telephone-fill"></i> 01303954432</p>
                        </div>
                    </div>
                    <div className=" space-y-5 sm:space-y-0 sm:space-x-3 mt-5 w-full">
                        <p className='w-fit px-2 bg-green-200 text-green-700 rounded-md text-xs'><i class="bi bi-check2-circle"></i> Payment (Completed)</p>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default BookingHistory;

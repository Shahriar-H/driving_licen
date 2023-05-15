import React from 'react';

const AddEventModal = ({openModal}) => {

    return (
        <div className='fixed bg-opacity-60 top-0 w-full left-0 bg-gray-700 h-screen z-50 flex justify-center items-center'>
            <div className='mx-auto w-full lg:w-1/2 bg-white rounded-md p-5 addEVentScroll'>
                <div className='flex justify-between'>
                    <p className='text-xl font-bold'>Personal Envent</p>
                    <p onClick={openModal} className='text-xl font-bold text-gray-500'>
                        <i className="bi bi-x-lg"></i>
                    </p>
                </div>
                <div className='mt-3 space-y-3'>
                    <div>
                        <p className='text-gray-600 text-sm'>Event Name <span className='text-red-500'>*</span></p>
                        <input className='p-2 border1 rounded-md w-full' type="text" placeholder='Event Name'/>
                    </div>
                    <div>
                        <p className='text-gray-600 text-sm'>Address</p>
                        <input className='p-2 border1 rounded-md w-full' type="text" placeholder='Event Name'/>
                    </div>
                    <div>
                        <p className='text-gray-600 text-sm'>Start Time <span className='text-red-500'>*</span></p>
                        <input className='p-2 border1 rounded-md w-full' type="datetime-local" placeholder='Event Name'/>
                    </div>
                    <div>
                        <p className='text-gray-600 text-sm'>End Time <span className='text-red-500'>*</span></p>
                        <input className='p-2 border1 rounded-md w-full' type="datetime-local" placeholder='Event Name'/>
                    </div>
                    <div>
                        <p className='text-gray-600 text-sm'>Event type <span className='text-red-500'>*</span></p>
                        <select className='p-2 border1 rounded-md w-full'>
                            <option>Personal Event(Not Driving Lesson)</option>
                            <option>Personal Event(Driving Lesson)</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <p className='text-gray-600 text-sm'>Notes </p>
                        <textarea className='w-full border1 resize-none p-2 rounded-md'></textarea>
                    </div>
                    <div className='bg-gray-50 p-2 flex space-x-2'>
                        <p className='px-8 py-2 bg-blue-600 text-white rounded-sm cursor-pointer w-fit'>CREATE EVENT</p>
                        <p onClick={openModal} className='px-8 py-2 w-fit border-red-500 border-2 text-red-500 rounded-sm cursor-pointer'>Cancel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEventModal;

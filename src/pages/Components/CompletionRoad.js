import React from 'react';

const CompletionRoad = ({complition}) => {
    return (
        <div className='bg-green-500 px-4 lg:px-24 py-10'>
            <div className='flex justify-between'>
                <div className='text-center w-1/4'>
                    <h1 className='text-gray-600'>STEP 1</h1>
                    <p className='text-black text-sm'>Choose</p>
                </div>
                <div className='text-center w-1/4'>
                    <h1 className='text-gray-600'>STEP 2</h1>
                    <p className='text-black text-sm'>Book</p>
                </div>
                <div className='text-center w-1/4'>
                    <h1 className='text-gray-600'>STEP 3</h1>
                    <p className='text-black text-sm'>Details</p>
                </div>
                <div className='text-center w-1/4'>
                    <h1 className='text-gray-600'>STEP 4</h1>
                    <p className='text-black text-sm'>Payment</p>
                </div>
            </div>
            <div className='bg-green-400 rounded-md mt-3' style={{height:'50px',overflow:"hidden"}}>
                <div className={`h-full ${complition} bg-black rounded-tr-md rounded-br-sm`}>
                    <div className='border-b-2 border-yellow-300 border-dashed h-1/2'></div>
                </div>
            </div>
        </div>
    );
}

export default CompletionRoad;

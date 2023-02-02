import Image from 'next/image';
import React from 'react';

const AboutCar = () => {
    return (
        <div className='w-full bg-white p-5 border1 rounded-md'>
            <h1 className='text-xl lg:text-2xl font-bold'>Your Vehicels</h1>
            <div className='mt-5 flex'>
                <Image className='mr-4' src={"/Resources/Images/logo.png"} width="140" height="140" />
                <div className='space-y-2'>
                    <h1 className='font-bold'>Suzuki Swift 2021 (Auto)</h1>
                    <div className='flex space-x-3'>
                        <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>EMB35R</p>
                        <p className='text-xs'><i class="bi bi-check2 text-green-500"></i> 5 start ANCAP rating</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutCar;

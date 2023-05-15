import React from 'react';

const Error = ({message}) => {
    return (
        <div className='text-left bg-red-400 px-2 py-2 rounded-md'>
            <p className='text-gray-800'>{message}</p>
        </div>
    );
}

export default Error;

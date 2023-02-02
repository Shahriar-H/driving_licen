import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
const Instructorlogin = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
        window.scrollTo(0,document.body.scrollHeight)
    }, []);
    return (
        <div className='flex justify-center'>
            <div className='hidden md:flex w-1/2 items-center bg-white'>
                <Image src={"/Resources/Images/cara_login.webp"} height="200" width={1000} />
            </div>
            <div className='w-full md:w-1/2 bg-blue-800 p-10 h-screen flex items-center'>
                <div className='w-full'>
                    <h1 className='text-4xl text-white'>Login</h1>
                    <hr className='w-11 mb-2'></hr>
                    <p className='text-gray-100'>Instructor can login here.</p>
                    <br></br>
                    <div className='space-y-4'>
                        <div>
                            <p className='text-white'>Email:</p>
                            <input ref={inputRef} type="email" className='p-2 border-2 border-black w-full rounded-md' />
                        </div>
                        <div>
                            <p className='text-white'>Password:</p>
                            <input type="email" className='p-2 border-2 border-black w-full rounded-md' />
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label className='text-white'> Remember me</label>
                        </div>
                        <div>
                            <input type="submit" className='p-2 cursor-pointer w-full rounded-md bg-green-500 text-white' value="Login Now" />
                        </div><br></br>
                        <Link href="/" className='text-center underline text-white'>Forgot password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instructorlogin;

import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='hidden lg:block w-0 lg:w-2/12'>
            <div className='bg-gray-800 w-full p-5 h-screen text-white space-y-3 top-32'>
                <div>
                    <Link href="/">Dashboard</Link>
                </div>
                <div>
                    <Link href="/dashboard/mycalender">Calender</Link>
                </div>
                <div>
                    <Link href="/">Learners</Link>
                </div>
                <div>
                    <Link href="/">Personal Details</Link>
                </div>
                <div>
                    <Link href="/">My Profile</Link>
                </div>
                <div>
                    <Link href="/">Service Area</Link>
                </div>
                <div>
                    <Link href="/">Availability</Link>
                </div>
                <div>
                    <Link href="/">Varification</Link>
                </div>
                <div>
                    <Link href="/">Banking</Link>
                </div>
                <div>
                    <Link href="/">Logout</Link>
                </div>
                
            </div>
        </div>
    );
}

export default Sidebar;

import Link from 'next/link';
import React,{useState} from 'react';

const Sidebar = ({colaps,iscol}) => {
   
    return (
        <div className={`lg:block ${iscol?'w-6/12 lg:w-2/12':'w-0'} relative `}>
            <div onClick={colaps} className='absolute  bg-blue-400 p-3 cursor-pointer top-0 -right-8'>
                   {iscol?"▶":"◀"}
            </div>
            <div className={`bg-blue-400 ${!iscol&&'hidden'} w-full overflow-hidden p-5 h-screen text-white space-y-3 top-32`}>
                
                <div>
                    <Link href="/learner/">Dashboard</Link>
                </div>
                <div>
                    <Link href="/learner/mycalender">Calender</Link>
                </div>
                {/* <div>
                    <Link href="/dashboard/learners">Learners</Link>
                </div> */}
                
                <div>
                    <Link href="/learner/my_profile">My Profile</Link>
                </div>
               
                <div>
                    <Link href="/learner/my_profile?f=available">Change Password</Link>
                </div>
                
              
              
                
            </div>
        </div>
    );
}

export default Sidebar;

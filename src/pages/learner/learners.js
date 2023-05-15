import React,{useState} from 'react';
import islogin from '../../lib/login_feature';
import Learner from './Components/Learners/learner';
import Sidebar from './Components/Sidebar';
import { useRouter } from 'next/router';

const Learners = () => {
    const [errorMessage, seterrorMessage] = useState('');
    const Router = useRouter()
    if(!localStorage.getItem('token_uid_002')){
        islogin().then((result)=>{
            if(result==='Session Expired'|| !result){
                Router.push('/')
                seterrorMessage("Session Expired");
                
            }
        })
    }
    return (
        <div className='bg-gray-300 w-full h-full flex'>
            <Sidebar/>
            <div className='w-full lg:w-10/12 min-h-screen p-5 bg-white overflow-y-scroll scrollHeight'>
                <div className='flex justify-between flex-wrap space-y-4 sm:space-y-0 items-center w-full bg-white p-5 border1 rounded-md mb-3 '>
                    <div>
                        <input className='p-1 rounded-sm border1' type="text" placeholder='Search by name' />
                    </div>
                    <div className='text-xs space-x-3'>
                        <span className='border1 rounded-md bg-black text-white px-5 py-2'>All</span>
                        <span className='border1 rounded-md px-5 py-2'>BEST QDS</span>
                        <span className='border1 rounded-md  px-5 py-2'>Private</span>
                    </div>
                </div>
                <Learner/>
            </div>
            
        </div>
    );
}

export default Learners;

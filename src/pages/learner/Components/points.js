import islogin from '@/lib/login_feature';
import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router';

const Points = () => {
    const [lerneridis, setlerneridis] = useState();
    const [usename, setusename] = useState('');
    const [userinfo, setuserinfo] = useState([]);
    const [name, setname] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [pointsis, setpointsis] = useState(0);
    const router = useRouter()
    const [errorMessage, seterrorMessage] = useState('');
    useEffect(() => {
        if(localStorage.getItem("token_uid_001")){
            
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
            setlerneridis(learner_id)
            islogin().then((result)=>{
                if(result==='Session Expired'){
                    router.push('/')
                    console.log('result');
                    seterrorMessage("Session Expired")
                }
            })
            setisLoading(true)
            fetch(process.env.API_URL+"user/"+learner_id,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            })
            .then((res)=>res.json())
            .then((result)=>{
                setname(result[0]?.fname)
                setpointsis(result[0]?.points)
                setuserinfo(result)
                console.log(result);
                setisLoading(false)
            })
        }
    }, []);
    // if(isLoading) return <p>Loading....</p>;
    return (
        <div className='flex flex-wrap justify-between mt-2 bg-white border-gray-300 border-2 p-5 rounded-sm shadow-sm'>
            <div className='p-5 rounded-sm border1 w-full lg:w-1/2 shadow-sm'>
                <h1 className='text-2xl text-gray-700 font-bold'>Your wallet</h1>
                <p className='text-gray-500 text-xs'>If you cancel any of your booking, you will be given the money in this wallet, which can be used for your future booking.</p>
            </div>
            <div className='p-5 rounded-sm border1 w-full lg:w-1/2  shadow-sm'>
                
                <p className='text-gray-400'>Your current balance is:</p>
                {isLoading?"Loading...":<h1 className='text-3xl font-bold'>{pointsis}<sup className='text-xl text-gray-400'>$</sup></h1>
                }
                <p className='text-gray-500 text-xs'>After cancelation, it may takes upto 48 hours to get added into your wallet.</p>
            </div>
        </div>
    );
}

export default Points;

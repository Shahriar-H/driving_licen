import islogin from '@/lib/login_feature';
import { useRouter } from 'next/router';
import React,{useEffect,useState} from 'react';
import Sidebar from '../Components/Sidebar';


const ViewOrders = () => {
    const [allOrders, setallOrders] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const router = useRouter();
    const orderid = router.query.orderNo;
    useEffect(() => {
        if(localStorage.getItem("token_uid_002")){
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_002"));
            
            islogin().then((result)=>{
                if(result==='Session Expired'|| !result){
                    seterrorMessage("Session Expired")
                }
            })
            setisLoading(true)
            fetch(process.env.API_URL+"booking/"+orderid,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            })
            .then((res)=>res.json())
            .then((result)=>{
                setallOrders(result)
                console.log(result);
                setisLoading(false)
            })
        }
    }, []);
    // if(isLoading) return <p></p>
    return (
        <div>
            <div className='bg-gray-300 w-full h-full flex'>
                <Sidebar/>
                <div className='w-full lg:w-10/12 min-h-screen p-5 bg-white overflow-y-scroll scrollHeight'>
                    <h1 className='text-2xl'>Order Details</h1>
                    <hr></hr><br></br>
                    <div>
                        <div>
                            <h1 className='text-2xl mb-3'>Learner Information-</h1>
                            
                            <div className='flex flex-wrap space-x-10'>
                                <p>Booking Id: <b>#{allOrders[0]?.id*12345}</b></p>
                                <p>Name: <b>{allOrders[0]?.l_name}</b></p>
                                <p>Email: <b>{allOrders[0]?.l_email}</b></p>
                                <p>Phone: <b>{allOrders[0]?.l_phone}</b></p>
                                <p>Address: <b>{allOrders[0]?.location}</b></p>
                                <p>Status: <b>{allOrders[0]?.status}</b></p>
                            </div>
                        </div>
                        <div className='flex justify-between mt-5 bg-gray-100 p-3'>
                            <p className='w-1/5'>Lesson</p>
                            <p className='w-1/5'>Package</p>
                            <p className='w-1/5'>Time</p>
                            <p className='w-1/5'>Date</p>
                            <p className='w-1/5'>Total</p>
                        </div>
                        <div className='flex justify-between p-3'>
                            <p className='w-1/5'>{allOrders[0]?.lesson*80}</p>
                            <p className='w-1/5'>{allOrders[0]?.package}</p>
                            <p className='w-1/5'>{allOrders[0]?._time}</p>
                            <p className='w-1/5 text-xs'>{allOrders[0]?._date}</p>
                            <p className='w-1/5'>{parseInt(allOrders[0]?.lesson*80)+parseInt(allOrders[0]?.package)}</p>
                        </div>
                        <div className='flex justify-between p-3 bg-gray-100'>
                            <p className='w-full text-center text-green-500'>Total Payable amount is <b>${parseInt(allOrders[0]?.lesson*80)+parseInt(allOrders[0]?.package)}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewOrders;

import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import islogin from '@/lib/login_feature';
import moment from "moment";

const BookingHistory = () => {
    const [learnerId, setlearnerId] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [allOrders, setallOrders] = useState([]);
    const [errorMessage, seterrorMessage] = useState('');
     useEffect(() => {
         if(localStorage.getItem("token_uid_002")){
             const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_002"));
             setlearnerId(learner_id)
             islogin().then((result)=>{
                 if(result==='Session Expired'|| !result){
                     seterrorMessage("Session Expired")
                 }
             })
         
         // if(learnerId){
             setisLoading(true)
             fetch(process.env.API_URL+"booking_driver_status/"+learner_id+"/completed",{
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
         //}
         }
         
     }, []);
    return (
        <div>
            <div className='w-full bg-white p-5 border1 rounded-md space-y-7' >
                <h1 className='text-xl lg:text-2xl font-bold'>Booking History</h1>
                {
                allOrders && Array.isArray(allOrders)?
                allOrders?.map((order,index)=>{
                return(
                <div key={index}>
                    <div className='flex flex-wrap mt-2 justify-between space-y-3 lg:space-y-0'>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-600 text-white rounded-md px-2 w-fit'>#{order?.id*12345}</p>
                            <p className='text-xs  rounded-md w-fit'>Auto Lesson - {order?.lesson_duration} hour</p>
                            <h3>{order?._date} at {order?._time}</h3>
                            <p className='text-gray-500 text-xs underline'>
                                <i className="bi bi-geo-alt-fill"></i> {order?.pick_up+" "+order?.suburb+" "+order?.state}
                            </p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <p className='text-xs bg-gray-300 rounded-md px-2 w-fit'>Learner</p>
                            <h3>{order?.l_name}</h3>
                            <p className='text-xs text-gray-500 rounded-md w-fit'>Learner Age {moment(order?.dob).fromNow()}</p>
                            <p className='text-gray-500 underline text-xs'>
                                <i className="bi bi-telephone-fill"></i> {order?.l_phone}</p>
                        </div>
                    </div>
                    <div className=" space-y-5 sm:space-y-0 sm:space-x-3 mt-5 w-full">
                        <p className='w-fit px-2 bg-green-200 text-green-700 rounded-md text-xs'><i className="bi bi-check2-circle"></i> Payment ({order?.status})</p>
                    </div>
                </div>)}):<p>No History</p>
                }
                
            </div>
            <hr></hr>
        </div>
    );
}

export default BookingHistory;

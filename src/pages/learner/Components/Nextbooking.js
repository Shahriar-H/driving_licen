import React,{useEffect,useState} from "react";
import Link from "next/link";
import islogin from "@/lib/login_feature";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import send_email from "@/lib/send_mail";


const Nextbooking = () => {
    const [learnerId, setlearnerId] = useState();
   const [isLoading, setisLoading] = useState(false);
   const [allOrders, setallOrders] = useState([]);
   const [errorMessage, seterrorMessage] = useState('');
   const [instructorResp, setinstructorResp] = useState('pending');
    useEffect(() => {
        if(localStorage.getItem("token_uid_001")){
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
            setlearnerId(learner_id)
            islogin().then((result)=>{
                if(result==='Session Expired'|| !result){
                    seterrorMessage("Session Expired")
                }
            })
        
        // if(learnerId){
            setisLoading(true)
            fetch(process.env.API_URL+"booking_learner_end/"+learner_id,{
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
    <div className="space-y-3">
    {
    isLoading?<p>Loading</p>:
    allOrders && Array.isArray(allOrders)?
    allOrders?.map((order,index)=>{
        if(order?.status!=='completed'){
            const {fname,lname,email,phone} = JSON.parse(order?.instructor);
            return(
            <div key={index} className="w-full bg-white p-5 border1 rounded-md">
                <h1 className="text-xl lg:text-xl font-bold">
                Your Next booking is at {order?._time } on {order?._date }
                </h1>
                <div className="flex flex-wrap mt-2 justify-between space-y-3 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                    <p className="text-xs bg-gray-300 rounded-md px-2 w-fit">
                    About Lesson - {order?.lesson_duration} hour
                    </p>
                    <h3>{order?._date} at {order?._time}</h3>
                    <p className="text-gray-500 text-xs underline">
                    <i className="bi bi-geo-alt-fill"></i> {order?.pick_up+" "+order?.suburb+" "+order?.state}
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <p className="text-xs bg-gray-300 rounded-md px-2 w-fit">Instructor</p>
                    <h3>{fname+' '+lname}</h3>
                    <p className="text-xs text-gray-500 rounded-md w-fit">
                    Email: {email}
                    </p>
                    <p className="text-gray-500 underline text-xs">
                    <i className="bi bi-telephone-fill"></i> {phone}
                    </p>
                </div>
                </div>
                <p className="text-gray-600">({order?.status}) Instrunctor Response:<b> {order?.instructor_respons}</b></p>
                <div className="flex flex-wrap space-y-5 sm:space-y-0 sm:space-x-3 mt-5">
                <div className="text-center">
                    <Link
                    href={`/learner/order_view/${order?.id}`}
                    className="px-10 py-2 bg-black text-sm text-white rounded-md uppercase w-full lg:w-1/2"
                    >
                    VIEW DETAILS
                    </Link>
                </div>
                <div className="text-center">
                    <form>
                        <p>To cancel this Booking please contact with your Instructor.</p>
                    </form>
                </div>
                </div>
            </div>)
        }
    }):<p>No upcomming Schedule</p>
    }
    </div>
  );
};

export default Nextbooking;

import Link from 'next/link';
import React,{useEffect,useState} from 'react';
import islogin from '../../lib/login_feature';
import AboutCar from './Components/about_car';
import BookingHistory from './Components/booking_history';
import Nextbooking from './Components/Nextbooking';
import Sidebar from './Components/Sidebar';
import UpcomingBooking from './Components/upcoming_booking';
import { useRouter } from 'next/router';
import Points from './Components/points';
const Index = () => {
    const [iscollaps, setiscollaps] = useState(false);
    const colapsFun=()=>{
        setiscollaps((prev)=>!prev)

    }
    const Router = useRouter()
    const [errorMessage, seterrorMessage] = useState('');
    useEffect(() => {
        if(localStorage.getItem('token_uid_001')){
            
            islogin().then((result)=>{
                if(result==='Session Expired'|| !result){
                    seterrorMessage("Session Expired");
                    Router.push('/')
                }
            })
        }
        if(!localStorage.getItem('token_uid_001')){
            
            Router.push('/')
        }
    }, []);
    return (
        <div>
            <div className='bg-gray-300 w-full h-full flex'>
                <Sidebar colaps={colapsFun} iscol={iscollaps}/>
                <div className={`${iscollaps?"w-6/12 lg:w-10/12":"w-full lg:w-full"} min-h-screen p-5 bg-white overflow-y-scroll scrollHeight`}>
                    <Points/><br></br>
                    <h1 className='text-xl lg:text-2xl font-bold mb-4'>Upcoming Bookings</h1>
                    <Nextbooking/>

                    <br></br>

                   {/* <UpcomingBooking/>
                   <br></br> */}
                   <BookingHistory/>
                   <br></br>
                   {/* <AboutCar/> */}





                </div>
            </div>
        </div>
    );
}

export default Index;

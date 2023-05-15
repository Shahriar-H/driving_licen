import {useEffect,useState} from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddEventModal from './add_event_modal';
import Link from 'next/link';

import Error from '@/lib/Error';
import islogin from '@/lib/login_feature';

const localizer = momentLocalizer(moment);

const Calender = () => {
    const [events, setevents] = useState([]);
    const [localtime2, setlocaltime2] = useState('');
    const [isModelOpen, setisModelOpen] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [learnerId, setlearnerId] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [allOrders, setallOrders] = useState([]);
     useEffect(() => {
         if(localStorage.getItem("token_uid_001")){
             const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
             setlearnerId(learner_id)
             islogin().then((result)=>{
                console.log("hello ex"+result);
               
                 if(result==='Session Expired' || !result){
                    
                     seterrorMessage("Session Expired");
                    
                 }
             })
         
        //  if(errorMessage!==''){
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
                // console.log(element?._date);
                let newEvnt =[];
                Array.isArray(result) &&result?.map(element => {

                    let timeArry = element?._time.split(' to ')
                    let Starttime = element?._date.replace(/^"|"$/g,'')+'T'+timeArry[0]; //build the formate
                    
                    // Starttime = Starttime.replace(/^"|"$/g,'');
                    

                    let Endtime = element?._date.replace(/^"|"$/g,'')+"T"+timeArry[1];
                   
                    // Endtime = Endtime;

                    
                    newEvnt.push({
                        start: moment(Starttime).toDate(),
                        end: moment(Endtime).toDate(),
                        title: `${element?.l_name}`
                    })
                 });

                 setevents(newEvnt)
                 seterrorMessage('')
                 setallOrders(result)
                //  console.log(newEvnt);
                 setisLoading(false)
             }).catch((err)=>{
                console.log(err);
                seterrorMessage("Data not fatched!")
             })
         //}
         }
         
     }, []);

    const ModalControl = ()=>{
        setisModelOpen((prevStae)=>!prevStae)
        
    }


    useEffect(() => {
        // console.log(moment().toDate());
        // setevents([
        //     {
        //       start: moment("2023-02-02T21:00").toDate(),
        //       end: moment("2023-02-02T22:00").toDate(),
        //       title: "Coaching at 5"
        //     },
        //     {
        //         start: moment("2023-02-03T11:00").toDate(),
        //         end: moment("2023-02-03T12:00").toDate(),
        //         title: "Coaching at 7"
        //     }
        //   ])
        //   console.log(localtime2);
    }, []);
    if(errorMessage!=='') return <Error message={errorMessage}/>;
    return (
        <div className='p-2 lg:p-10'>
            
            {isModelOpen&&<AddEventModal openModal={ModalControl}/>}
            <div className='py-5 w-fit flex space-x-2'>
                {/* <p onClick={ModalControl} className='px-8 py-2 bg-black text-white rounded-sm cursor-pointer'>CREATE EVENT</p> */}
                <Link href="/learner" className='px-8 py-2 border1 text-black rounded-sm cursor-pointer'>BACK</Link>
            </div>
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="week"
                events={events}
                style={{ height: "100vh",backgroundColor:"white",padding:"10px" }}
            />
        </div>
    );
}

export default Calender;

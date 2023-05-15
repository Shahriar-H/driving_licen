import {useEffect,useState} from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Router from 'next/router';


const localizer = momentLocalizer(moment);

const Checkavialbility = () => {
    const router = useRouter();
    const {drivirId,n} = router.query;
    const [events, setevents] = useState([]);
    const [localtime2, setlocaltime2] = useState('');
    const [isModelOpen, setisModelOpen] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [learnerId, setlearnerId] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [allOrders, setallOrders] = useState([]);
     useEffect(() => {
         if(true){
            //  const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_002"));
            //  setlearnerId(learner_id)
            //  islogin().then((result)=>{
            //     console.log("hello ex"+result);
               
            //      if(result==='Session Expired' || !result){
                    
            //          seterrorMessage("Session Expired");
                    
            //      }
            //  })

            if(!drivirId){
                Router.push('/')
            }
         
        //  if(errorMessage!==''){
             setisLoading(true)
             fetch(process.env.API_URL+"booking_driver_front/"+drivirId)
             .then((res)=>res.json())
             .then((result)=>{
                // console.log(element?._date);
                let newEvnt =[];
                Array.isArray(result)&&result?.map(element => {

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
                seterrorMessage("Data not fatched!")
             })
         //}
         }
         
     }, []);

    const ModalControl = ()=>{
        setisModelOpen((prevStae)=>!prevStae)
        
    }


    
    
    return (
        <div className='p-2 lg:p-10'>
            
          
            <div className='py-5 w-full flex space-x-2 justify-between'>
                {/* <p onClick={ModalControl} className='px-8 py-2 bg-black text-white rounded-sm cursor-pointer'>CREATE EVENT</p> */}
                <Link href="/pages/book_online" className='px-8 py-2 border1 text-black rounded-sm cursor-pointer'>BACK</Link>
                <p className='text-center px-8 py-2 border1 text-white bg-black rounded-sm cursor-pointer'>Schadual of {n}</p>
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

export default Checkavialbility;

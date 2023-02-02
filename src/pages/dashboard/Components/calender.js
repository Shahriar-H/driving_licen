import {useEffect,useState} from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calender = () => {
    const [events, setevents] = useState([]);
    const [localtime2, setlocaltime2] = useState('');
    const showtime = (v)=>{
        console.log(v);
    }
    useEffect(() => {
        console.log(moment().toDate());
        setevents([
            {
              start: moment("2023-02-02T21:00").toDate(),
              end: moment("2023-02-02T22:00").toDate(),
              title: "Coaching at 5"
            },
            {
                start: moment("2023-02-03T11:00").toDate(),
                end: moment("2023-02-03T12:00").toDate(),
                title: "Coaching at 7"
            }
          ])
          console.log(localtime2);
    }, []);
    return (
        <div className='p-2 lg:p-10'>
            <input onChange={(v)=>showtime(v.target.value)} type="datetime-local" />
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

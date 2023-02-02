import {useState,useEffect} from 'react';
import Package from '../Components/BookOnline/Package';
import Search from '../Components/Search';
// import Bg from "../Resources/Images/mainbg.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import Header from '../Components/Header';
import CompletionRoad from '../Components/CompletionRoad';


const BookNow = () => {
    const [hourlyValue, sethourlyValue] = useState(1);
    // const [date, setDate] = useState(new Date());
    const [selectedDate, setselectedDate] = useState(new Date());
    const selectedDateis = (value, event)=>{
        //alert(value)
        setselectedDate(value)
    }

    const tileContent = ({date, view}) => {
        if (date.getTime() === selectedDate.getTime()) {
            return 'custom-selected-date';
        }
        // console.log(date);
        return (date.getDate() === new Date().getDate() && date.getMonth()=== new Date().getMonth() && date.getFullYear() === new Date().getFullYear() ) ? 'today' : '';
    }

    const FunhourlyValue = (v)=>{
       
        sethourlyValue(v)
    }

    useEffect(() => {
        setselectedDate(new Date())
        sethourlyValue(1)
    }, []);
    return (
        <div>
          
            <CompletionRoad complition="w-1/2"/>
           
            <div className='px-3 lg:px-24'>
               

             




                <div className='bg-gray-100 rounded-sm shadow-sm my-3' style={{border:'1px solid rgba(0,0,0,0.1)'}}>
                    <div className='bg-gray-600 p-2 w-full flex justify-between items-center'>
                        <h1 className='text-gray-300 text-xl'>Step 3</h1>
                        <h1 className='text-white text-xl'>Choose Schedule</h1>
                       
                    </div>

                    <div className='p-5'>
                        <h1 className='text-center text-2xl mb-3'></h1>
                        <hr></hr><br></br>

                        <div className='bg-black rounded-sm p-2 w-full flex justify-between items-center'>
                            <h1 className='text-gray-300 text-xl'>
                                {/* <input type="checkbox" className='mr-2' /> */}
                                Available time Shows here
                            </h1>
                           
                            <p className='bg-green-400 p-1 rounded-md text-white'></p>
                        </div>
                        <div className='flex flex-wrap justify-between items-center bg-white rounded-md p-4 w-full md:w-1/2 space-y-5'>
                            <div>
                                <p className='text-xs lg:text-sm pb-1'>Lesson Duration:</p>
                                <div className='flex space-x-5'>
                                    <div>
                                        <input name='Duration' type="radio" />
                                        <label> 1 hour</label>
                                    </div>
                                    <div>
                                        <input name='Duration' type="radio" />
                                        <label> 2 hour</label>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className='w-full'>
                                <p className='text-xs lg:text-sm'>Select Date:</p>
                                <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 lg:px-10 shadow-sm bg-gray-300 w-full'>
                                    <option selected disabled>Select Date</option>
                                    <option value={1}>Sat 12, Jan 2023</option>
                                    <option value={2}>Sat 13, Jan 2023</option>
                                    <option value={3}>Sat 14, Jan 2023</option>
                                    <option value={4}>Sat 15, Jan 2023</option>
                                    <option value={5}>Sat 16, Jan 2023</option>
                                </select>
                            </div>
                            
                            <div className='w-full'>
                                <p className='text-xs lg:text-sm'>Select Time:</p>
                                <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 w-full lg:px-10 shadow-sm bg-gray-300'>
                                    <option selected disabled>Select Time</option>
                                    <option value={1}>10:00 am to 11:00 am</option>
                                    <option value={2}>11:00 am to 12:00 pm</option>
                                    <option value={3}>12:00 pm to 13:00 pm</option>
                                    <option value={4}>13:00 pm to 14:00 pm</option>
                                    <option value={5}>10:00 am to 11:00 am</option>
                                </select>
                            </div>
                            
                            
                        </div>
                        <br></br>

                        

                        <br></br>
                        <div>
                            {/* <Calendar 
                                minDate={new Date()}
                                onChange={setDate}
                                value={date} 
                                onClickDay={selectedDateis}
                                tileClassName={tileContent}
                                
                            /> */}
                        </div>
                    </div>
                </div>

                <br></br>
                <div className='mb-12'>
                    
                    <Link href="/pages/details" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Sent Request</Link>
                    <Link href="/pages/schedule" className='px-4 py-3 text-black rounded-md uppercase font-bold'>Back</Link>
                </div>

            </div>

            

        </div>
    );
}

export default BookNow;

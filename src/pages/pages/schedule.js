import {useState,useEffect} from 'react';
import Package from '../Components/BookOnline/Package';
import Search from '../Components/Search';
// import Bg from "../Resources/Images/mainbg.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import Header from '../Components/Header';


const Schedule = () => {
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
            <Header/>
            <div className='mainbackground mainbgImage py-12 px-2 sm:px-6'>
                <div>
                   
                    <h1 className='text-center text-white text-3xl lg:text-4xl font-extrabold leading-snug'> <span className='text-gray-700'>Step 1: </span>Select your location</h1>
                    <Search/>
                </div>
                
            </div><br></br><br></br>
            <div className='px-3 lg:px-24'>
               <div>
                    <p className='pl-2'>You choose Ash as your Instractor:</p>
                    <Package/>
               </div>

                <div className='bg-gray-100 rounded-sm shadow-sm my-3' style={{border:'1px solid rgba(0,0,0,0.1)'}}>
                    <div className='bg-gray-600 p-2 w-full flex justify-between items-center'>
                        <h1 className='text-gray-300 text-xl'>Step 2</h1>
                        <h1 className='text-white text-xl'>Add to Cart</h1>
                       
                    </div>
                    <div className='p-5'>
                        <h1 className='text-center text-2xl mb-3'></h1>
                        <hr></hr><br></br>

                        <div className='bg-black rounded-sm p-2 w-full flex justify-between items-center'>
                            <h1 className='text-gray-300 text-xl'>
                                <input checked type="checkbox" className='mr-2' />
                                Driving Lessons
                            </h1>
                           
                            <p className='bg-green-400 p-1 rounded-md text-white'>Selected</p>
                        </div>
                        <div className='flex justify-between items-center bg-white rounded-md p-4 w-full'>
                            <div>
                                <p className='text-xs lg:text-sm'>Select Package:</p>
                                <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 lg:px-10 shadow-sm bg-gray-300'>
                                    <option value={1}>Package 1</option>
                                    <option value={2}>Package 2</option>
                                    <option value={3}>Package 3</option>
                                    <option value={4}>Package 4</option>
                                    <option value={5}>Package 5</option>
                                </select>
                            </div>
                            <div>
                                <h3 className='text-gray-600 text-xs lg:text-xl'>100/hr</h3>
                            </div>
                            <div>
                                <h3 className='text-gray-900 text-xl lg:text-2xl font-bold'>{hourlyValue*100}$</h3>
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
                                <input checked type="checkbox" className='mr-2' />
                                Available time Shows here
                            </h1>
                           
                            <p className='bg-green-400 p-1 rounded-md text-white'></p>
                        </div>
                        <div className='flex flex-wrap justify-between items-center bg-white rounded-md p-4 w-full'>
                            <div>
                                <p className='text-xs lg:text-sm'>Select Date:</p>
                                <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 lg:px-10 shadow-sm bg-gray-300'>
                                    <option selected disabled>Select Date</option>
                                    <option value={1}>Sat 12, Jan 2023</option>
                                    <option value={2}>Sat 13, Jan 2023</option>
                                    <option value={3}>Sat 14, Jan 2023</option>
                                    <option value={4}>Sat 15, Jan 2023</option>
                                    <option value={5}>Sat 16, Jan 2023</option>
                                </select>
                            </div>

                            <div>
                                <p className='text-xs lg:text-sm'>Select Time:</p>
                                <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 lg:px-10 shadow-sm bg-gray-300'>
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

                <div className='mb-10'>
                    <input type='checkbox' />
                    <label className='text-gray-600 italic'> I agree with terms and conditions by submiting this.</label>
                </div>
                <div className='mb-12'>
                    
                    <Link href="/Pages/Book_online" as="/book-online" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Sent Request</Link>
                </div>

            </div>

            

        </div>
    );
}

export default Schedule;

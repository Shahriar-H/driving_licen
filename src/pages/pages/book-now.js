import {useState,useEffect} from 'react';
import Package from '../Components/BookOnline/Package';
import Search from '../Components/Search';
// import Bg from "../Resources/Images/mainbg.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import Header from '../Components/Header';
import CompletionRoad from '../Components/CompletionRoad';
import Router from 'next/router';


const BookNow = ({state,dispatch}) => {
    const newDate = new Date();
    const yyyy = newDate.getFullYear();
    const mm = String(newDate.getMonth()+1).padStart(2,'0');
    const dd = String(newDate.getDate()).padStart(2,'0');
    const hour = newDate.getHours();
    const todaysDateis =yyyy+'-'+mm+'-'+dd; 
    const [hourlyValue, sethourlyValue] = useState(null);
    const [sessionfor, setsessionfor] = useState(true);
    const [todaysDate, settodaysDate] = useState(todaysDateis);
    const [allOptions, setallOptions] = useState([]);

    // const [date, setDate] = useState(new Date());
    const [selectedDate, setselectedDate] = useState(todaysDateis);
    let content=[];
    const selectedDateis = (value)=>{
        setselectedDate(value);
        if(value===todaysDate){
            for(let i=hour;i<23; i++){
                content.push(String(i)+":00 to "+String(i+1)+":00")
                // content += `<option value='${i}:00 to ${i+1}:00'>${i}:00 to ${i+1}:00</option>`
            }
        }else if(value>todaysDate){
            content=[];

            for(let i=6;i<23; i++){
                content.push(String(i)+":00 to "+String(i+1)+":00")
                // content += `<option value='${i}:00 to ${i+1}:00'>${i}:00 to ${i+1}:00</option>`;
            }
        }
        setallOptions(content)
        console.log(content);
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

    const savetostate = ()=>{
        dispatch({type:'time_duration',payload:{duration:sessionfor,date:selectedDate,time:hourlyValue}})
        Router.push("/pages/details")
    }

    useEffect(() => {
        settodaysDate(todaysDateis)
        if(!state?.price || !state?.instructor || !state?.area){
            Router.push('/pages/schedule')
        }
        console.log(selectedDate);
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
                                        <input checked={sessionfor} onChange={()=>setsessionfor(true)} name='Duration' type="radio" />
                                        <label> 1 hour</label>
                                    </div>
                                    <div>
                                        <input checked={!sessionfor} onChange={()=>setsessionfor(false)} name='Duration' type="radio" />
                                        <label> 2 hour</label>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className='w-full'>
                                <p className='text-xs lg:text-sm'>Select Date:</p>
                                {/* <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 lg:px-10 shadow-sm bg-gray-300 w-full'>
                                    <option selected disabled>Select Date</option>
                                    <option value={1}>Sat 12, Jan 2023</option>
                                    <option value={2}>Sat 13, Jan 2023</option>
                                    <option value={3}>Sat 14, Jan 2023</option>
                                    <option value={4}>Sat 15, Jan 2023</option>
                                    <option value={5}>Sat 16, Jan 2023</option>
                                </select> */}
                                <input onChange={(v)=>selectedDateis(v.target.value)} type='date' className='py-2 px-3 lg:px-10 shadow-sm bg-gray-300 w-full' />
                            </div>
                            
                            <div className='w-full'>
                                <p className='text-xs lg:text-sm'>Select Time:</p>
                               
                                <select onChange={(v)=>FunhourlyValue(v.target.value)} className='py-2 px-3 w-full lg:px-10 shadow-sm bg-gray-300'>
                                    <option selected disabled>Select Date First</option>

                                    {
                                        allOptions&&selectedDate&&selectedDate>=todaysDate?(
                                            allOptions?.map((time,index)=><option key={index} value={time}>{time}</option>)
                                            
                                        ):
                                        <option disabled>Invalid Date</option>
                                    }
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
                <div className='mb-12 flex'>
                    
                    <p onClick={savetostate} className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold w-fit'>Countinue</p>
                    <Link href="/pages/schedule" className='px-4 py-3 text-black rounded-md uppercase font-bold'>Back</Link>
                </div>

            </div>

            

        </div>
    );
}

export default BookNow;

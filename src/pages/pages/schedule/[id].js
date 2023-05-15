import {useState,useEffect,useReducer} from 'react';
import Package from '@/pages/Components/BookOnline/Package';
import Search from '@/pages/Components/Search';
// import Bg from "../Resources/Images/mainbg.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';

import CompletionRoad from '@/pages/Components/CompletionRoad';
import { initialState,reducer } from '../../../utils/state_manager';

const Schedule = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
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
        console.log(state);
    }, []);
    return (
        <div>
           
            <CompletionRoad complition="w-1/4"/>
            <div className='mainbackground mainbgImage py-12 px-2 sm:px-6'>
                {/* <div>
                   
                    <h1 className='text-center text-white text-3xl lg:text-4xl font-extrabold leading-snug'>Select your location</h1>
                    <Search/>
                </div> */}
                
            </div><br></br><br></br>
            <div className='px-3 lg:px-24'>
               <div>
                    <p className='pl-2'>You choose Ash as your Instractor:</p>
                    {state.v_type}
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
                       
                        <br></br>
                        <div className='w-full lg:w-1/2 bg-white rounded-md p-5 border-black border-2 flex flex-wrap justify-start'>
                            <div className='flex justify-between items-center bg-white rounded-md w-full'>
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
                            <div className='flex items-center'>
                                <h3 className='text-gray-600 text-sm'>100/hr</h3>
                            </div>
                            
                            <div>
                                <p className='bg-green-400 px-2 py-1 text-xs w-fit rounded-md'>Save 10%</p>
                            </div>
                            <div>
                                <h3 className='text-gray-900 text-xl lg:text-2xl font-bold'>{hourlyValue*100}$</h3>
                            </div>
                            
                        </div>

                            <div className='w-full'>
                                
                                <div>
                                    <table className='w-full mt-5'>
                                        <tbody className=''>
                                            <tr>
                                                <td className='text-xl py-1'>1-5<sub className='text-xs '>hrs</sub></td>
                                                <td className='text-xl py-1'>$80<sub className='text-xs'>/hr</sub></td>
                                                <td className='text-xl py-1'><sub className='text-xs'></sub></td>
                                            </tr>
                                            <tr className='bg-gray-100'>
                                                <td className='text-xl py-1'>1-5<sub className='text-xs'>hrs</sub></td>
                                                <td className='text-xl py-1'>$80<sub className='text-xs'>/hr</sub></td>
                                                <td className='text-xl py-1'><p className='bg-green-400 px-2 py-1 text-xs w-fit rounded-md'>Save 10%</p></td>
                                            </tr>
                                            <tr>
                                                <td className='text-xl py-1'>1-5<sub className='text-xs'>hrs</sub></td>
                                                <td className='text-xl py-1'>$80<sub className='text-xs'>/hr</sub></td>
                                                <td className='text-xl py-1'><p className='bg-green-400 px-2 py-1 text-xs w-fit rounded-md'>Save 20%</p></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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





                <div className='my-12 flex justify-end'>
                    
                    <Link href="/pages/book-now" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Continue</Link>
                </div>

            </div>

            

        </div>
    );
}

export default Schedule;

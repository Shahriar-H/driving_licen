import Link from 'next/link';
import { useState } from 'react';
import Fotter from './Components/Footer';



const Becomeainstructor = () => {
    const [isMyself, setisMyself] = useState(true);
    return (
        <div className='bg-white'>
            
        
            <hr className='border-b-2 border-green-200'></hr>
            <br></br>
            <div className='px-2 lg:px-32 flex flex-wrap justify-start'>
                

                {/* Here start the form */}
                <div className='w-full lg:w-3/5 p-5'>
                    <h1 className='text-3xl font-bold'>Submit a Request</h1>
                    
                    <hr></hr>
                    <br></br>

                    {/* Learn personal Info */}
                    

                    <h1 className='text-2xl'>Please provide learners personal details  </h1><br></br>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>First name<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Last Name<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Email<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                            <p className='text-sm text-gray-400'>We use your email to contact you</p>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Phone<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full p-1'>
                            <p className='text-gray-600 '>Date Of Birth<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="date" placeholder='Enter a location'/>
                          
                        </div>
                        <div className='w-full p-1'>
                            <p className='text-gray-600 '>Which best describes you?<span className='text-red-600'>*</span></p>
                            <select className='p-2 w-full rounded-md border-gray-400 border-2 bg-white' type="text" placeholder='Enter a location'>
                                <option selected disabled >Please Select</option>
                                <option>I am a learner Driver</option>
                                <option>I am a driving instructor</option>
                                <option>I am a driving instructor interested to join</option>
                                <option>I am interested to become a driving instructor</option>
                                <option>I have an enquery</option>
                            </select>
                        </div>
                    </div><br></br>


                    <br></br>
                    <hr></hr>
                    <br></br>

                    
                    <div className='w-full'>
                       
                        <textarea className='h-52 w-full rounded-md border-gray-400 border-2 bg-white p-2' placeholder='Write about you'></textarea>
                       
                        
                    </div><br></br>
                    
                    {/* Agreement */}
                    <div>
                        <input type={"checkbox"} />
                        <label className={`${!isMyself&&'hidden'} text-gray-500`}> I agree to the Learner Driver Terms & Conditions</label>
                        <label className={`${isMyself&&'hidden'}  text-gray-500`}>  
                         I agree to the Learner Driver Terms & Conditions . I confirm that I am authorised to sign up for driving lessons for the learner driver & they are aware that I am doing so on their behalf.
                        </label>
                    </div><br></br><br></br>

                    {/* Buttons */}
                    <div className='mb-12'>
                        <Link href="/pages/details" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Submit Request</Link>

                       
                    </div>


                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Fotter/>
        </div>
    );
}

export default Becomeainstructor;

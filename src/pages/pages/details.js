import Link from 'next/link';

import CompletionRoad from '../Components/CompletionRoad';
import Fotter from '../Components/Footer';
import Header from '../Components/Header';


const Details = () => {
    return (
        <div className=''>
            <Header/>
            <CompletionRoad complition="w-3/4"/>
            <br></br>
            <div className='px-2 lg:px-32 flex flex-wrap justify-start flex-row-reverse'>
                <div className='w-full lg:w-2/5'>
                    <div className='flex justify-between p-4 bg-white rounded-md w-full' style={{border:"1px solid rgba(0,0,0,0.2)"}}>
                        <div className='p-2 w-1/12 lg:w-auto'>
                            <i class="bi bi-calendar2-plus text-2xl"></i>
                        </div>
                        <div className='pl-3 w-11/12'>
                            <p>You are about to make the following bookings with Cecil:</p>
                            <div className='flex justify-between text-gray-600 mt-4'>
                                <p>1 hour Lesson</p>
                                <p>28 Jan 2023, 5:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-3/5 p-5'>
                    <h1 className='text-2xl'>Who are you registering for?</h1>
                    <div className='mt-4'>
                        <div className='space-y-1'>
                            <div>
                                <input name='Duration' type="radio" />
                                <label> My Self</label>
                            </div>
                            <div>
                                <input name='Duration' type="radio" />
                                <label> Someone else (e.g. child, partner, grandchild, other)</label>
                            </div>
                        </div>
                    </div><br></br>
                    <hr></hr>
                    <br></br>

                    <h1 className='text-2xl'>Please enter your pick up details </h1><br></br>
                    <div className='p-1'>
                        <p className='text-gray-600 '>Pickup Address<span className='text-red-600'>*</span></p>
                        <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Suburb<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>State<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div><br></br>
                    <hr></hr><br></br>

                    <h1 className='text-2xl'>Please provide your personal details  </h1><br></br>
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
                            <p className='text-sm text-gray-400'>We use your email to send lesson confirmation details</p>
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
                                <option>I hold a learner licence</option>
                                <option>I hold an overseas licence(active or expired)</option>
                                <option>I hold a provosional or Full Australian licence(active or expired)</option>
                            </select>
                        </div>
                    </div>

                    <br></br>
                    <hr></hr>
                    <br></br>

                    <h1 className='text-2xl'>Choose a password for your learning dashboard</h1>
                    <p className='text-xs text-gray-600'>Your dashboard allows you to make, manage & view bookings online 24/7.</p>
                    <br></br>
                    <hr></hr>
                   

                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Password<span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                           
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Password confirmation <span className='text-red-600'>*</span></p>
                            <input className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div><br></br>

                    <div>
                        <input type={"checkbox"} />
                        <label> I agree to the Learner Driver Terms & Conditions</label>
                    </div><br></br>

                    <div className='mb-12'>
                        <Link href="/pages/details" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Continue</Link>

                        <Link href="/pages/book-now" className='px-4 py-3 text-black rounded-md uppercase font-bold'>Back</Link>
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

export default Details;

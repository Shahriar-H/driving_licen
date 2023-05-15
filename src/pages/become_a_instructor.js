import Link from 'next/link';
import { useState } from 'react';
import Fotter from './Components/Footer';
import send_email from '../lib/send_mail';
import { toast } from 'react-toastify';



const Becomeainstructor = () => {
    const [isMyself, setisMyself] = useState(true);
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [dob, setdob] = useState('');
    const [v_type, setv_type] = useState();
    const [description, setdescription] = useState('');
    const [service_area, setservice_area] = useState('');
    const [errorMessage, seterrorMessage] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();

        let randomNumber = Math.floor(Math.random()*100000000);
        let sixDigitNumber = String(randomNumber).padStart(8,'0');

        let response = await fetch(process.env.API_URL+"driver_registrationpending",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                fname,
                lname,
                phone,
                email,
                description,
                service_area,
                v_type,
                dob,
                status:"pending",
                password:sixDigitNumber,
                short_des:"",
                agreement:'',
                availability:"I am available",

            })
        });
        if(!response.ok){
            setisLoading(false)
            return seterrorMessage("Registration failed");
            
        }

        const template = '<html><head><meta charset="UTF-8"><title>Welcome to Driving Test Pro!</title></head><body style="background-color:#f7f7f7;font-family:Arial,sans-serif;font-size:16px;line-height:1.5em;margin:0;padding:0;"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;margin-top:30px;"><tr><td style="background-color:#ffffff;border-radius:5px;box-shadow:0 0 10px #ddd;padding:30px;"><h1 style="color:#006699;font-size:24px;font-weight:bold;margin-bottom:20px;">Welcome to Driving Test Pro!</h1><p style="color:#333;margin-bottom:20px;">Dear '+fname+',</p><p style="color:#333;margin-bottom:20px;">I am writing to welcome you to Driving Test Pro and to thank you for your interest in teaching with us. We have received your registration application and your account is currently under review.</p><p style="color:#333;margin-bottom:20px;">We appreciate your patience while our team reviews your account. Once the review process is complete, you will receive an email with the status of your account.</p><p style="color:#333;margin-bottom:20px;">In the meantime, please feel free to explore our website and familiarize yourself with our platform. If you have any questions or concerns, please do not hesitate to contact us at info@bestqualitydrivinschool.com.au.</p><p style="color:#333;margin-bottom:20px;">Thank you again for choosing Driving Test Pro. We look forward to having you as a part of our team!</p><p>Your password:'+sixDigitNumber+'</p><p>Your Email:'+email+'</p><p style="color:#333;margin-bottom:20px;">Best regards,<br>Ash</p></td></tr></table></body></html>';
        let result = await response.json();
            const data = {
                email:email,
                subject:'Your Registration',
                message:template
            }
            send_email(data)

        toast.success(result?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        // setemail("")
        // setfname("");
        
    }
    return (
        <div className='bg-white'>
            
        
            <hr className='border-b-2 border-green-200'></hr>
            <br></br>
            <div className='px-2 lg:px-32 flex flex-wrap justify-start'>
                

                {/* Here start the form */}
                <form onSubmit={handleSubmit} className='w-full lg:w-3/5 p-5'>
                    <h1 className='text-3xl font-bold'>Submit a Request</h1>
                    
                    <hr></hr>
                    <br></br>

                    {/* Learn personal Info */}
                    

                    <h1 className='text-2xl'>Please provide yours personal details  </h1><br></br>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>First name<span className='text-red-600'>*</span></p>
                            <input onChange={(v)=>setfname(v.target.value)} className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Last Name<span className='text-red-600'>*</span></p>
                            <input onChange={(v)=>setlname(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Email<span className='text-red-600'>*</span></p>
                            <input required onChange={(v)=>setemail(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                            <p className='text-sm text-gray-400'>We use your email to contact you</p>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Phone<span className='text-red-600'>*</span></p>
                            <input required onChange={(v)=>setphone(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full p-1'>
                            <p className='text-gray-600 '>Date Of Birth<span className='text-red-600'>*</span></p>
                            <input required onChange={(v)=>setdob(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="date" placeholder='Enter a location'/>
                          
                        </div>
                        <div className='w-full p-1'>
                            <p className='text-gray-600 '>Vehicle type<span className='text-red-600'>*</span></p>
                            <select required onChange={(v)=>setv_type(v.target.value)}  name='vtype' className='p-2 w-full rounded-md border-gray-400 border-2 bg-white' type="text" placeholder='Enter a location'>
                                <option disabled >Please Select</option>
                                <option>Auto</option>
                                <option>Manual</option>
                                
                            </select>

                            <p className='text-gray-600 '>Service area<span className='text-red-600'>*</span></p>
                            <input required onChange={(v)=>setservice_area(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Melbourne'/>
                        </div>
                    </div><br></br>


                    <br></br>
                    <hr></hr>
                    <br></br>

                    
                    <div className='w-full'>
                       
                        <textarea required onChange={(v)=>setdescription(v.target.value)}  className='h-52 w-full rounded-md border-gray-400 border-2 bg-white p-2' placeholder='Write about you'></textarea>
                       <div className='text-xs text-gray-600'>
                        <p>* Describe your self</p>
                        <p>* About your experiance</p>
                        <p>* About your vehicels</p>
                       </div>
                        
                    </div><br></br>
                    
                    {/* Agreement */}
                    <div>
                        <input required checked={isMyself} onChange={()=>setisMyself((pre)=>!pre)} type={"checkbox"} />
                        <label className={` text-gray-500`}> I agree to the Learner Driver Terms & Conditions</label>
                        
                    </div><br></br><br></br>

                    {/* Buttons */}
                    <div className='mb-12'>
                        {fname&&lname&&email&&phone&&v_type&&service_area&&dob&&description&&isMyself&&<button type='submit' className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Submit Request</button>
                        }
                       
                    </div>


                </form>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Fotter/>
        </div>
    );
}

export default Becomeainstructor;

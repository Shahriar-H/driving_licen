import Link from 'next/link';
import Router from 'next/router';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import CompletionRoad from '../Components/CompletionRoad';
import Fotter from '../Components/Footer';
import Header from '../Components/Header';
import Error from '../../lib/Error';
import islogin from '../../lib/login_feature';
import send_email from '../../lib/send_mail';


const Details = ({state,dispatch}) => {
    const [agreement, setagreement] = useState(true);
    const [iseUserLogedin, setiseUserLogedin] = useState(false);
    const [isMyself, setisMyself] = useState(true);
    const [picupaddress, setpicupaddress] = useState('');
    const [suburb, setsuburb] = useState('');
    const [statename, setstatename] = useState('');

    //learner info
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [bod, setbod] = useState('');
    const [decription, setdecription] = useState('');

    //gaurdian info
    const [gfname, setgfname] = useState('');
    const [glname, setglname] = useState('');
    const [g_email, setg_email] = useState('');
    const [g_phone, setg_phone] = useState('');
    const [relationship, setrelationship] = useState('');

    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [checkmatchpass, setcheckmatchpass] = useState(false);
    const [passwordsize, setpasswordsize] = useState(false);
    const [learnerId, setlearnerId] = useState();
    
    // my info
    const [myinfo, setmyinfo] = useState([]);
    
   

    const handlesubmit = async (e)=>{
        e.preventDefault();
        if(!checkmatchpass){
            if(!iseUserLogedin){
                return seterrorMessage("Password Not Matched!")
            }
            
        }
        if(!agreement){
            return seterrorMessage("Please mark as read to our policy!")
        }
        
        setisLoading(true);
        
        try {
            let data;
            if(!isMyself){//he is a gaurdian of leanrer
                data={
                    fname:gfname,
                    lname:glname,
                    email:g_email,
                    phone:g_phone,
                    decription:decription,
                    relationship:relationship,
                    password:password,
                    created_at:Date.now()
                }
            }else{
                data={//if learner is himself
                    fname:fname,
                    lname:lname,
                    email:email,
                    phone:phone,
                    dob:bod,
                    decription:decription,
                    relationship:relationship,
                    password:password,
                    created_at:Date.now()
                }
            }
            if(!iseUserLogedin){
                let response = await fetch(process.env.API_URL+"learner_registration",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(data)
                });
                if(!response.ok){
                    setisLoading(false)
                    return seterrorMessage("Registration failed");
                    
                }

                const template = '<body style="font-family:Arial,sans-serif;color:#333;line-height:1.5;background-color:#f7f7f7;margin:0;padding:0"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse"><tr><td style="padding:20px 0;text-align:center"><img src="http://drivingtestpro.com.au/_next/image?url=%2FResources%2FImages%2Flogo.jpeg&w=384&q=75" alt="Logo" style="display:block;width:150px;height:auto"></td></tr><tr><td style="padding:20px 0;text-align:center"></td></tr><tr><td style="padding:0 20px"><p>Dear '+fname+',</p><p>Welcome to our platform! We are glad to have you here. Our platform is designed to provide you with a great user experience, and we hope that you find it easy to use and helpful in achieving your goals. If you have any questions or need any assistance, feel free to reach out to our support team. We are always happy to help! Thank you for choosing our platform and we look forward to seeing you around!</p></td></tr><tr><td style="padding:20px 0;text-align:center"><img src="http://drivingtestpro.com.au/_next/image?url=%2FResources%2FImages%2Flogo.jpeg&w=384&q=75" alt="Receipt" style="display:block;width:300px;height:auto"></td></tr></table></body>';
                    const emaildata = {
                        email:email,
                        subject:'Welcome message',
                        message:template
                    }
                
                // response = await response.json();
                

                const responseData = await response?.json();

                if(responseData?.status===409){
                    setisLoading(false);
                    return toast.success("The phone or email is already exist", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                }
                send_email(emaildata)
                
                // responseData?.then(()=>{
                // if(responseData?.token && responseData?.id){
                    
                localStorage.setItem("token_uid_001",JSON.stringify(responseData));

                try {
                    const {driving,lesson,instructor,duration,date,time} = state || {};
                    
                    
                    const orderdata = {
                        location:picupaddress,
                        package:driving,
                        lesson:lesson,
                        instructor:JSON.stringify(instructor),
                        instructor_id:instructor?.id,
                        learner:responseData?.learner_id || learnerId,
                        dob:bod,
                        l_name:fname+' '+lname,
                        l_email:email,
                        l_phone:phone,
                        lesson_duration:duration?1:2,
                        _date:JSON.stringify(date),
                        _time:time,
                        pick_up:picupaddress,
                        suburb:suburb,
                        state:statename,
                        who:isMyself?'myself':'gaurdian',
                        created_at:new Date().getTime()
                    }

                    let orderRespnse = await fetch(process.env.API_URL+"booking",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                            "Authorization":responseData?.token
                        },
                        body:JSON.stringify(orderdata)
                    })
                    
                    if(!orderRespnse.ok){
                        setisLoading(false)
                        return seterrorMessage("Booking failed");
                        
                    }

                    const templateBok = '<body style="font-family:Arial,sans-serif;color:#333;line-height:1.5;background-color:#f7f7f7;margin:0;padding:0"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse"><tr><td style="padding:20px 0;text-align:center"><img src="http://drivingtestpro.com.au/_next/image?url=%2FResources%2FImages%2Flogo.jpeg&w=384&q=75" alt="Logo" style="display:block;width:150px;height:auto"></td></tr><tr><td style="padding:20px 0;text-align:center"></td></tr><tr><td style="padding:0 20px"><p>Dear '+fname+',</p><p>,Thank you for choosing our service. We are pleased to confirm your booking for '+JSON.stringify(date)+'. Our team is looking forward to providing you with a great experience.<br>Please feel free to contact us if you have any further questions or requests. We are happy to assist you in any way we can.<br>Thank you again for choosing us, and we look forward to seeing you soon.<br>Best regards</p></td></tr><tr><td style="padding:20px 0;text-align:center"><img src="http://drivingtestpro.com.au/_next/image?url=%2FResources%2FImages%2Flogo.jpeg&w=384&q=75" alt="Receipt" style="display:block;width:300px;height:auto"></td></tr></table></body>';
                    const dataemail2 = {
                        email:email,
                        subject:'Booking Complete',
                        message:templateBok
                    }
                    send_email(dataemail2)    
                    
                    toast.success("Order Complete", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });



                    Router.push('/pages/payment')

                } catch (error) {
                    setisLoading(false);
                    console.log(error);
                    return seterrorMessage("Order Action failed");
                }
               
                // }
                //  })
                
            }else{
                //register user order
                try {
                    const {driving,lesson,instructor,duration,date,time} = state || {};
                    let learnerId=null;
                    const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
                    const orderdata = {
                        location:picupaddress,
                        package:driving,
                        lesson:lesson,
                        instructor:JSON.stringify(instructor),
                        instructor_id:instructor?.id,
                        learner:learner_id,
                        dob:bod,
                        l_name:fname+' '+lname,
                        l_email:email,
                        l_phone:phone,
                        lesson_duration:duration?1:2,
                        _date:JSON.stringify(date),
                        _time:time,
                        pick_up:picupaddress,
                        suburb:suburb,
                        state:statename,
                        who:isMyself?'myself':'gaurdian',
                        created_at:new Date().getTime()
                    }
                    


                    const orderRespnse = await fetch(process.env.API_URL+"booking",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                            "Authorization":token
                        },
                        body:JSON.stringify(orderdata)
                    })
                   
                    if(!orderRespnse.ok){
                        setisLoading(false)
                        return seterrorMessage("Booking failed");
                        
                    }
                    const templateBok1 = '<body style="font-family:Arial,sans-serif;color:#333;line-height:1.5;background-color:#f7f7f7;margin:0;padding:0"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse"><tr><td style="padding:20px 0;text-align:center"><img src="http://drivingtestpro.com.au/_next/image?url=%2FResources%2FImages%2Flogo.jpeg&w=384&q=75" alt="Logo" style="display:block;width:150px;height:auto"></td></tr><tr><td style="padding:20px 0;text-align:center"></td></tr><tr><td style="padding:0 20px"><p>Dear '+fname+',</p><p>,Thank you for choosing our service. We are pleased to confirm your booking for '+JSON.stringify(date)+'. Our team is looking forward to providing you with a great experience.<br>Please feel free to contact us if you have any further questions or requests. We are happy to assist you in any way we can.<br>Thank you again for choosing us, and we look forward to seeing you soon.<br>Best regards</p></td></tr><tr><td style="padding:20px 0;text-align:center"><img src="http://drivingtestpro.com.au/_next/image?url=%2FResources%2FImages%2Flogo.jpeg&w=384&q=75" alt="Receipt" style="display:block;width:300px;height:auto"></td></tr></table></body>';
                    const dataemail3 = {
                        email:email,
                        subject:'Booking Complete',
                        message:templateBok1
                    }
                    send_email(dataemail3) 
                    Router.push('/pages/payment')
                    
                } catch (error) {
                    setisLoading(false);
                    console.log(error);
                    return seterrorMessage("Order Action failed");
                }

            }
            setisLoading(false);
            
                
        } catch (error) {
            console.log(error);
            setisLoading(false);
            return seterrorMessage("Two Action failed");
        }
        
    }

    useEffect(() => {
        
        if(localStorage.getItem('token_uid_001')){
            islogin().then((result)=>{
                if(result?.status===true){
                    setlearnerId(result?.id)
                    setiseUserLogedin(true)
                    setmyinfo(result?.result)
                    const reslt = result?.result;
                    const {fname,lname,email,phone} =  reslt[0] || {};
                    console.log(result?.result);
                    setfname(fname)
                    setlname(lname)
                    setphone(phone)
                    setemail(email)

                }
            })
        }
        console.log(state);
    }, []);

    useEffect(() => {

        if(!state?.price || !state?.instructor || !state?.area || !state?.date || !state?.time){
            Router.push('/pages/book-now')
        }

        if(password===confirmpassword && password!=='' && confirmpassword !==''){
            setcheckmatchpass(true)
            
        }else{
            setcheckmatchpass(false)
            
        }
        if(password.length>=6){
            setpasswordsize(true)
        }else{
            setpasswordsize(false)
        }
    }, [password,confirmpassword]);
    return (
        <div className=''>
            
            <CompletionRoad complition="w-3/4"/>
            {!iseUserLogedin&&
            <div className='px-2 lg:px-32 py-3 text-center'>
                <span>Already I have an account </span>
                <Link href="/login" className='font-bold underline'>Login Here</Link>
               
            </div>
            }
            <hr className='border-b-2 border-green-200'></hr>
            <br></br>
            {isLoading&&<div className='fixed top-0 left-0 w-full h-screen z-50 bg-black opacity-50 flex justify-center items-center'>
                <h1 className='text-white font-bold'>Looding...</h1>
            </div>}
            <div className='px-2 lg:px-32 flex flex-wrap justify-start flex-row-reverse'>
                <div className='w-full lg:w-2/5'>
                    <div className='flex justify-between p-4 bg-white rounded-md w-full' style={{border:"1px solid rgba(0,0,0,0.2)"}}>
                        <div className='p-2 w-1/12 lg:w-auto'>
                            <i className="bi bi-calendar2-plus text-2xl"></i>
                        </div>
                        <div className='pl-3 w-11/12'>
                            <p>You are about to make the following bookings with <b>{state?.instructor?.fname}</b>:</p>
                            <div className='flex justify-between text-gray-600 mt-4'>
                                {state?.lesson&&<p>{state?.lesson} hour Lesson</p>}
                                {state?.driving&&<p>{state?.driving} Test package</p>}
                                
                            </div>
                            <p className='text-gray-600 mt-4'>{JSON.stringify(state?.date)} at {JSON.stringify(state?.time)}</p>
                        </div>
                    </div>
                </div>
                {/* Who are choosen showing here up */}

                {/* Here start the form */}
                <form onSubmit={handlesubmit} className='w-full lg:w-3/5 p-5'>
                    {errorMessage!==''&&<Error message={errorMessage}/>}
                    <h1 className='text-2xl'>Who are you registering for?</h1>
                    <div className='mt-4'>
                        <div className='space-y-1'>
                            <div>
                                <input checked={isMyself} onChange={()=>setisMyself(true)} name='packagefor' type="radio" />
                                <label> My Self</label>
                            </div>
                            <div>
                                <input checked={!isMyself} onChange={()=>setisMyself(false)}  name='packagefor' type="radio" />
                                <label> Someone else (e.g. child, partner, grandchild, other)</label>
                            </div>
                        </div>
                    </div><br></br>
                    <hr></hr>
                    <br></br>

                    {/* Learn personal Info */}
                    <h1 className='text-2xl'>Please enter your pick up details </h1><br></br>
                    <div className='p-1'>
                        <p className='text-gray-600 '>Pickup Address<span className='text-red-600'>*</span></p>
                        <input value={picupaddress} required onChange={(v)=>setpicupaddress(v.target.value)} className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Suburb<span className='text-red-600'>*</span></p>
                            <input value={suburb} required onChange={(v)=>setsuburb(v.target.value)} className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>State<span className='text-red-600'>*</span></p>
                            <input value={statename} required onChange={(v)=>setstatename(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                        </div>
                    </div><br></br>
                    <hr></hr><br></br>

                    <h1 className='text-2xl'>Please provide learners personal details  </h1><br></br>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>First name<span className='text-red-600'>*</span></p>
                            <input value={fname} onChange={(v)=>setfname(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='John'/>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Last Name<span className='text-red-600'>*</span></p>
                            <input value={lname} required onChange={(v)=>setlname(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Donald'/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Email<span className='text-red-600'>*</span></p>
                            <input value={email} onChange={(v)=>setemail(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="email" placeholder='Enter a email'/>
                            <p className='text-sm text-gray-400'>We use your email to send lesson confirmation details</p>
                        </div>
                        <div className='w-1/2 p-1'>
                            <p className='text-gray-600 '>Phone<span className='text-red-600'>*</span></p>
                            <input value={phone} onChange={(v)=>setphone(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a phone'/>
                        </div>
                    </div>
                    <div className=''>
                        <div className='w-full p-1'>
                            <p className='text-gray-600 '>Date Of Birth<span className='text-red-600'>*</span></p>
                            <input value={bod} onChange={(v)=>setbod(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="date" placeholder='Enter a location'/>
                          
                        </div>
                        <div className='w-full p-1'>
                            <p className='text-gray-600 '>Which best describes you?<span className='text-red-600'>*</span></p>
                            <select onChange={(v)=>setdecription(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2 bg-white' type="text" placeholder='Enter a location'>
                                <option selected disabled >Please Select</option>
                                <option>I hold a learner licence</option>
                                <option>I hold an overseas licence(active or expired)</option>
                                <option>I hold a provosional or Full Australian licence(active or expired)</option>
                            </select>
                        </div>
                    </div><br></br>


                    {/* if buyer is another person */}
                    {!isMyself&&!iseUserLogedin&&
                    <div className={`${isMyself&&'hidden'}`}>
                        <h1 className='text-2xl'>Please provide your personal details  </h1><br></br>
                        <div className='flex justify-center'>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>First name<span className='text-red-600'>*</span></p>
                                <input value={gfname} onChange={(v)=>setgfname(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                            </div>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Last Name<span className='text-red-600'>*</span></p>
                                <input value={glname} onChange={(v)=>setglname(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Email<span className='text-red-600'>*</span></p>
                                <input value={g_email} onChange={(v)=>setg_email(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                                <p className='text-sm text-gray-400'>We use your email to send lesson confirmation details</p>
                            </div>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Phone<span className='text-red-600'>*</span></p>
                                <input value={g_phone} onChange={(v)=>setg_phone(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Enter a location'/>
                            </div>
                        </div>
                        <div className=''>
                            
                            <div className='w-full p-1'>
                                <p className='text-gray-600 '> Relationship to learner<span className='text-red-600'>*</span></p>
                                <select onChange={(v)=>setrelationship(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2 bg-white' type="text" placeholder='Enter a location'>
                                    <option selected disabled >Please Select</option>
                                    <option>Parent</option>
                                    <option>Grandparent</option>
                                    <option>Partner</option>
                                    <option>Gaurdian</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    }

                    <br></br>
                    <hr></hr>
                    <br></br>
                    {!iseUserLogedin&&
                    <>
                    <h1 className='text-2xl'>Choose a password for your learning dashboard</h1>
                    <p className='text-xs text-gray-600'>Your dashboard allows you to make, manage & view bookings online 24/7.</p>
                    <br></br>
                    <hr></hr>
                   
                    
                    
                    <div className='flex justify-center flex-wrap'>
                        <div className='w-full md:w-1/2 p-1'>
                            <p className='text-gray-600 '>Password<span className='text-red-600'>*</span></p>
                            <input onChange={(v)=>setpassword(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="password" placeholder='Enter a password'/>
                           
                        </div>
                        <div className='w-full md:w-1/2 p-1'>
                            <p className='text-gray-600 '>Password confirmation <span className='text-red-600'>*</span></p>
                            <input onChange={(v)=>setconfirmpassword(v.target.value)}  className='p-2 w-full rounded-md border-gray-400 border-2' type="password" placeholder='Enter confirm password'/>
                        </div>
                    </div>
                    {checkmatchpass?<p className='text-green-600 text-xs'>Password Matched</p>:<p className='text-red-600 text-xs'>Password Not Matched</p>}
                    {passwordsize?<p className='text-green-600 text-xs'>Password size 6</p>:<p className='text-red-600 text-xs'>Password should be more then 6 Charters</p>}
                    </>}
                    <br></br>
                    
                    {/* Agreement */}
                    <div>
                        <input type={"checkbox"} onChange={()=>setagreement((prev)=>!prev)} checked={agreement}/>
                        <label className={`${!isMyself&&'hidden'} text-gray-500`}> I agree to the Learner Driver Terms & Conditions</label>
                        <label className={`${isMyself&&'hidden'}  text-gray-500`}>  
                         I agree to the Learner Driver Terms & Conditions . I confirm that I am authorised to sign up for driving lessons for the learner driver & they are aware that I am doing so on their behalf.
                        </label>
                    </div><br></br><br></br>

                    {/* Buttons */}
                    <div className='mb-12 flex'>
                        {/* <p className='px-4 py-3 bg-blue-400 cursor-pointer text-white rounded-md uppercase font-bold w-fit'>Continue</p> */}
                        <input disabled={isLoading}  className='bg-blue-400 cursor-pointer px-5 text-white rounded-md uppercase font-bold w-fit' type='submit' value={"Continue"} />

                        <Link href="/pages/book-now" className='px-4 py-3 text-black rounded-md uppercase font-bold'>Back</Link>
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

export default Details;

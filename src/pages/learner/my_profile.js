import islogin from '@/lib/login_feature';
import { useRouter } from 'next/router';
import React,{useEffect,useState} from 'react';
import Sidebar from './Components/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from '../../lib/Error';



const ViewOrders = () => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [type, settype] = useState('');
    const [description, setdescription] = useState('');
    const [servicearea, setservicearea] = useState('');
    const [available, setavailable] = useState();
    const [phone, setphone] = useState();
    const [Oldpassword, setOldpassword] = useState();
    const [NewPassword, setNewPassword] = useState();
    const [typeOldPass, settypeOldPass] = useState();
    const [isOldpassMached, setisOldpassMached] = useState(false);

    const [allOrders, setallOrders] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [lerneridis, setlerneridis] = useState();
    const router = useRouter();
    const forwhich = router.query.f;
    useEffect(() => {
        console.log(router.query);
        if(localStorage.getItem("token_uid_001")){
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
            setlerneridis(learner_id)
            islogin().then((result)=>{
                if(result==='Session Expired'){
                    router.push('/')
                    console.log('result');
                    seterrorMessage("Session Expired")
                }
            })
            setisLoading(true)
            fetch(process.env.API_URL+"user/"+learner_id,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            })
            .then((res)=>res.json())
            .then((result)=>{
                setfname(result[0]?.fname)
                setlname(result[0]?.lname)
                setservicearea(result[0]?.service_area)
                settype(result[0]?.v_type)
                setdescription(result[0]?.decription)
                setavailable(result[0]?.availability)
                setphone(result[0]?.phone)
                setOldpassword(result[0]?.password)
                setallOrders(result)
                console.log(result);
                setisLoading(false)
            })
        }
    }, []);
    // const notify = () => {
      
    //     toast("Wow so easy!");
    // }
    if(isLoading) return <Error message={"Loading...."}/>
    if(errorMessage) return <Error message={errorMessage}/>
    const handleSave = (e)=>{
        e.preventDefault();
        if(!localStorage.getItem("token_uid_001")){
            return toast.success("Token Not Found", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
        
        const data = {
            fname,
            lname,
            decription:description,
            password:isOldpassMached&&NewPassword!==''?NewPassword:Oldpassword
        }
        fetch(process.env.API_URL+"update_learner/"+learner_id,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((result)=>{
            toast.success(result?.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            console.log(result);
            setisLoading(false)
        })
        

    }

    const machingOldPass = (value)=>{
        settypeOldPass(value);
        if(value===Oldpassword){
            setisOldpassMached(true)
        }else{
            setisOldpassMached(false)
        }
    }
    return (
        <div>
            <div className='bg-gray-300 w-full h-full flex'>
                <Sidebar/>
                <div className='w-full lg:w-10/12 min-h-screen p-5 bg-white overflow-y-scroll scrollHeight'>
                    <h1 className='text-2xl'>My Profile</h1>
                    <hr></hr><br></br>
                    <form onSubmit={handleSave}>
                        <div className='flex justify-center'>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>First Name<span className='text-red-600'>*</span></p>
                                <input onChange={(v)=>setfname(v.target.value)} required className='p-2 w-full rounded-md border-gray-400 border-2' type="text" value={fname} placeholder='John'/>
                            </div>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Last Name<span className='text-red-600'>*</span></p>
                                <input onChange={(v)=>setlname(v.target.value)} value={lname} required  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Sinah'/>
                            </div>
                        </div><br></br>
                        <div className='flex justify-center'>
                            {/* <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Birth Date<span className='text-red-600'>*</span></p>
                                <input required className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='John'/>
                            </div> */}
                            <div className='w-full p-1'>
                                <p className='text-gray-600 '>Short Description<span className='text-red-600'>*</span></p>
                                
                                <input onChange={(v)=>setdescription(v.target.value)} value={description} required className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='I have 5 years experiance, I can speak in 3 languages, English, Arabic...'/>
                                <p className='text-gray-500 text-xs'>It will show on your profile</p>
                            </div>
                            
                        </div><br></br>
                      

                        <div className='flex justify-center'>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Old Password<span className='text-red-600'>*</span></p>
                                <input onChange={(v)=>machingOldPass(v.target.value)} value={typeOldPass} className={`p-2 w-full rounded-md ${forwhich!=='available'?" border-gray-400":" border-red-800 bg-red-100"} border-2`} type="text" placeholder='0234232'/>
                            </div>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>New Password<span className='text-red-600'>*</span></p>
                                
                                <input disabled={!isOldpassMached} onChange={(v)=>setNewPassword(v.target.value)} value={NewPassword}  className={`p-2 w-full rounded-md ${forwhich!=='available'?" border-gray-400":" border-red-800 bg-red-100"} border-2`} type="text" placeholder='1'/>
                                {!isOldpassMached&&<p className='text-gray-500 text-xs'>Old Password Not matched</p>}
                            </div>
                            
                        </div><br></br>
                        <input type={'submit'} className="px-5 py-3 border-2 border-black rounded-sm" value={'Save Changes'} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ViewOrders;

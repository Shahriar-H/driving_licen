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

    const [allOrders, setallOrders] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const [lerneridis, setlerneridis] = useState();
    const router = useRouter();
    const forwhich = router.query.f;
    useEffect(() => {
        console.log(router.query);
        if(localStorage.getItem("token_uid_002")){
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_002"));
            setlerneridis(learner_id)
            islogin().then((result)=>{
                if(result==='Session Expired'){
                    router.push('/')
                    console.log('result');
                    seterrorMessage("Session Expired")
                }
            })
            setisLoading(true)
            fetch(process.env.API_URL+"instructors/"+learner_id,{
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
                setdescription(result[0]?.description)
                setavailable(result[0]?.availability)
                setphone(result[0]?.phone)
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
        if(!localStorage.getItem("token_uid_002")){
            return toast.success("Token Not Found", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_002"));
        
        const data = {
            fname,
            lname,
            phone,
            description:description,
            v_type:type,
            service_area:servicearea,
            availability:available
        }
        fetch(process.env.API_URL+"update_instructors/"+learner_id,{
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
                                <p className='text-gray-600 '>Type<span className='text-red-600'>*</span></p>
                                <input onChange={(v)=>settype(v.target.value)} value={type} required  className='p-2 w-full rounded-md border-gray-400 border-2' type="text" placeholder='Sinah'/>
                            </div>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Service Area.<span className='text-red-600'>*</span></p>
                                <input onChange={(v)=>setservicearea(v.target.value)} value={servicearea} required  className={`p-2 w-full rounded-md ${forwhich!=='service'?" border-gray-400":" border-red-800 bg-red-100"} border-2`} type="text" placeholder='Sinah'/>
                                <p className='text-gray-500 text-xs'>ex: Sydney,Melbourne</p>
                            </div>
                        </div><br></br>

                        <div className='flex justify-center'>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Phone<span className='text-red-600'>*</span></p>
                                <input onChange={(v)=>setphone(v.target.value)} value={phone} required className='p-2 w-full rounded-md border-gray-400 border-2' type="number" placeholder='0234232'/>
                            </div>
                            <div className='w-1/2 p-1'>
                                <p className='text-gray-600 '>Im not Available at:<span className='text-red-600'>*</span></p>
                                
                                <input onChange={(v)=>setavailable(v.target.value)} value={available} required className={`p-2 w-full rounded-md ${forwhich!=='available'?" border-gray-400":" border-red-800 bg-red-100"} border-2`} type="text" placeholder='1'/>
                                <p className='text-gray-500 text-xs'>It will show on your profile</p>
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

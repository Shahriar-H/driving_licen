import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Error from '../lib/Error';
import Router from 'next/router';
import islogin from '../lib/login_feature';
import isloginInst from '../lib/login_feature1';
const Login = () => {
    const inputRef = useRef();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [sessionSave, setsessionSave] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    
    useEffect(() => {
        // if(islogin()){
        //     Router.push('/')
        // } 
        if(localStorage.getItem("token_uid_001")){ 
            islogin().then((result)=>{
                if(result?.status===true){
                    Router.push('/')
                }else if(result==="Session Expired"){
                    seterrorMessage(result)
                }
                console.log(result);
            }).catch((err)=>{
                console.log(err);
            })
        }
        if(localStorage.getItem("token_uid_002")){ 
            isloginInst().then((result)=>{
                if(result?.status===true){
                    Router.push('/')
                }else if(result==="Session Expired"){
                    seterrorMessage(result)
                }
                console.log(result);
            }).catch((err)=>{
                console.log(err);
            })
        }
        
        // inputRef.current.focus();
        window.scrollTo(0,document.body.scrollHeight)
        setisLoading(false)
    }, []);

    const handleHubmit = async (e)=>{
        e.preventDefault();
        setisLoading(true)
        let body = {
            email,
            password,
            sessionSave
        }
        console.log(body);
        try {
            const response = await fetch(process.env.API_URL+"learner_login",{
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email,
                    password,
                    sessionSave
                })
            });
            //response check
            if (!response.ok) {
                return seterrorMessage("Login failed");
                setisLoading(false)
            }
            //parse data
            const data = await response.json();
            if(data?.token && data?.learner_id){
                // const {token, learner_id} = data || {};
                //token_uid_001 this is for learner
                //token_uid_002 this is for instructor
                localStorage.setItem("token_uid_001",JSON.stringify(data));
                if(localStorage.getItem("token_uid_002")){
                    localStorage.removeItem("token_uid_002")
                }
                Router.push('/')
            }
            console.log(data);
            seterrorMessage("Login Success");
            setisLoading(false)

        } catch (err) {
            console.log(err);
            seterrorMessage("Login Error");
            setisLoading(false)
        }

        
        
       
    }


    return (
        <div className='flex justify-center'>
            <div className='hidden md:flex w-1/2 items-center bg-white'>
                <Image src={"/Resources/Images/cara_login.webp"} height="200" width={1000} alt="image" />
            </div>
            <div className='w-full md:w-1/2 bg-blue-500 p-10 h-screen flex items-center'>
                <div className='w-full'>
                    <h1 className='text-4xl text-white'>Login</h1>
                    <hr className='w-11 mb-2'></hr>
                    <p className='text-gray-100'>Learn can login here.</p>
                    <br></br>
                    <form className='space-y-4' onSubmit={(e)=>handleHubmit(e)}>
                        {errorMessage!==''&&<Error message={errorMessage} />}
                        <div>
                            <p className='text-white'>Email:</p>
                            <input onChange={(v)=>setemail(v.target.value)} type="email" className='p-2 border-2 border-black w-full rounded-md' />
                        </div>
                        <div>
                            <p className='text-white'>Password:</p>
                            <input onChange={(v)=>setpassword(v.target.value)} type="password" className='p-2 border-2 border-black w-full rounded-md' />
                        </div>
                        <div>
                            <input onChange={(v)=>setsessionSave(v.target.value)} type="checkbox"/>
                            <label className='text-white'> Remember me</label>
                        </div>
                        <div>
                            <input disabled={isLoading} type="submit" className='p-2 cursor-pointer w-full rounded-md bg-green-500 text-white' value="Login Now" />
                        </div><br></br>
                        <Link href="/forgotepassword" className='text-center underline text-white'>Forgot password?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

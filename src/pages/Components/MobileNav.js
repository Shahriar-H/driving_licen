import { useEffect,useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import islogin from '@/lib/login_feature';
import Router from 'next/router';
import isloginInst from '@/lib/login_feature1';

const MobileNav = () => {
    const [mobileMenuisOpen, setmobileMenuisOpen] = useState(false);
    const [logintrue, setlogintrue] = useState(false);
    const [isInstructorLogin, setisInstructorLogin] = useState(false);
    const [errorMessage, seterrorMessage] = useState('');
    const logOutFun = ()=>{
        if(localStorage.getItem("token_uid_001")){
            localStorage.removeItem("token_uid_001");
            setlogintrue(false);
            Router.push('/login');
        }
        if(localStorage.getItem("token_uid_002")){
            localStorage.removeItem("token_uid_002");
            setisInstructorLogin(false);
            Router.push('/login');
        }
    }
    useEffect(() => {
        if(localStorage.getItem("token_uid_001")){
            islogin().then((result)=>{
                if(result?.id){
                    setlogintrue(true)
                    seterrorMessage('')
                    console.log(result);
                }
                if(result==='Session Expired' || !result){
                    seterrorMessage("Session Expired")
                   
                }
                // console.log(result);
                
            })
            .catch((err)=>{
                console.log("fdsfd"+err)
            })
        }


        if(localStorage.getItem("token_uid_002")){
            isloginInst().then((result)=>{
                if(result?.id){
                    setisInstructorLogin(true)
                    seterrorMessage('')
                    console.log(result);
                }
                if(result==='Session Expired' || !result){
                    seterrorMessage("Session Expired")
                   
                }
                console.log(result);
                
            })
            .catch((err)=>{
    
            })
        }
        
    }, [islogin,logOutFun,logintrue,isInstructorLogin]);
    return (
        <div className='block lg:hidden'>
            <div className='p-4 flex justify-between items-center bg-white'>
                <div className='pl-2 flex space-x-3 items-center font-bold'>
                    <li className='pr-3'>
                        <Link href='/'>
                            <Image className='' height="100" width="100" style={{maxWidth:'150px'}} src={"/Resources/Images/logo.jpeg"} alt="Logo"/>
                        </Link>
                    </li>
                    
                </div>
                <div className=''>
                    <li onClick={()=>setmobileMenuisOpen((prev)=>!prev)}><i className="bi bi-list text-4xl text-black"></i></li>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`bg-white p-8 absolute top-200 shadow-md w-full ${!mobileMenuisOpen?'mobileShow anim':'notshowing'}`}>
                <div className='text-md space-y-1 mb-2'>
                        {/* {!logintrue&&!isInstructorLogin&&<p><Link href='/login'>Learner Login</Link></p>}
                        {!logintrue&&!isInstructorLogin&&<p><Link href='/instructor_login'>Instructor Login</Link></p>}
                        
                        <p><Link href='/#footer'>Support</Link></p>
                        <p><Link href='/'>Blog</Link></p>              
                      
                        <p><Link href='/become_a_instructor'>Become an instructor</Link></p> */}
                        <div className=' block space-x-4 text-sm transition'>
                            {
                            !logintrue&&!isInstructorLogin?(
                            
                            <div className='space-x-4 block uppercase'>
                                <Link href='/login'>LEARNNER LOGIN</Link>
                             
                                <Link href='/instructor_login'>Instructor Login</Link>
                            </div>
                            ):(
                            !isInstructorLogin?
                            <div className='space-x-4 flex uppercase'>
                                <Link href='/learner'>Dashboard</Link>
                               
                                <p className='cursor-pointer' onClick={logOutFun}>Logout</p>
                            </div>:
                            <div className='space-x-4 block uppercase'>
                                <Link href='/dashboard'>Instructor Panel</Link>
                               
                                <p className='cursor-pointer' onClick={logOutFun}>Logout</p>
                            </div>
                            )
                            }
                            
                            
                            
                        </div>
                </div>
               
                <hr></hr>

                <div className="space-y-2 mt-2">
                    <li>
                        <Link href='/pages/book_online'>Driving Lincence</Link>
                    </li>
                    <li>
                        <Link href='/pages/book_online'>Test Packages</Link>
                    </li>
                    <li>
                        <Link href='/#giftCard'>Gift Vouchers</Link>
                    </li>
                    <li>
                        <Link href='/pages/book_online'>Pricing</Link>
                    </li>
                </div>

            </div>
        </div>
    );
}

export default MobileNav;

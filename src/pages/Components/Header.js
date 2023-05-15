import { useEffect,useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import islogin from '../../lib/login_feature';

import Router from 'next/router';
import Error from '../../lib/Error';
import isloginInst from '@/lib/login_feature1';


const Header = () => {
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
    return (<>
        <div className='hidden lg:block'>
            {errorMessage!==''&&<Error message={errorMessage}/>}
            <div className='p-3 mainbackground flex text-white justify-between'>
                <div className='mainbackground flex text-white space-x-4 text-sm'>
                    <div className='space-x-4 flex'>
                        <Link href=''>Support</Link>
                        <Link href='/'>Blog</Link>
                    </div>
                    <p className='text-gray-800'>|</p>
                    <div className='space-x-4 flex'>
                        {/* <Link href='/become_a_instructor'>Instruct with EzLicence</Link> */}
                        <Link href='/become_a_instructor'>Become an instructor</Link>
                    </div>
                </div>
                <div className='mainbackground flex text-white space-x-4 text-sm transition'>
                    {
                    !logintrue&&!isInstructorLogin?(
                    
                    <div className='space-x-4 flex uppercase'>
                        <Link href='/login'>LEARNNER LOGIN</Link>
                        <p className='text-gray-800'>|</p>
                        <Link href='/instructor_login'>Instructor Login</Link>
                    </div>
                    ):(
                    !isInstructorLogin?
                    <div className='space-x-4 flex uppercase'>
                        <Link href='/learner'>Dashboard</Link>
                        <p className='text-gray-800'>|</p>
                        <p className='cursor-pointer' onClick={logOutFun}>Logout</p>
                    </div>:
                    <div className='space-x-4 flex uppercase'>
                        <Link href='/dashboard'>Instructor Panel</Link>
                        <p className='text-gray-800'>|</p>
                        <p className='cursor-pointer' onClick={logOutFun}>Logout</p>
                    </div>
                    )
                    }
                    
                    
                    
                </div>
            </div>
            <div className='p-4 flex justify-between items-center bg-white shadow-md shadow-gray-300'>
                <div className='pl-2 flex space-x-3 items-center font-bold'>
                    <li className='pr-3'>
                        <Link href="/">
                            <Image className='' width="180" height="180" style={{maxWidth:'150px'}} src={"/Resources/Images/logo.jpeg"} alt="Logo"/>
                        </Link>
                    </li>
                    <li>
                        <Link href='/pages/book_online'>Driving Lincence</Link>
                    </li>
                    <li>
                        <Link href='/pages/book_online'>Test Packages</Link>
                    </li>
                    <li>
                        <Link href='/#giftCard'>Gift Vouchers</Link>
                    </li>
                    <li className='text-gray-500'>|</li>
                    <li>
                        <Link href='/pages/book_online?pricing=true'>Pricing</Link>
                    </li>
                </div>
                {/* <div className=''>
                    <Link href="/pages/book_online" className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold'>Book Online</Link>
                </div> */}
            </div>
        </div>
        <MobileNav/>
        </>
    );
}

export const getServerSideProps= async ()=>{
    try {
      
      const responseImagesHeader = await fetch(process.env.API_URL + "frontimages");
      const DataRImagesheader = await responseImagesHeader.json();
      // console.log(Data1);

      return { props: { DataRImagesheader } };
    } catch (error) {
        console.log(error);
        return { props: { error } };
    }
  
}

export default Header;

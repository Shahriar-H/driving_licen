import React,{useEffect,useState} from 'react';
import Calender from './Components/calender';
import { useRouter } from 'next/router';

const Mycalender = () => {
    const [errorMessage, seterrorMessage] = useState('');
    const Router = useRouter()
    useEffect(() => {
        if(!localStorage.getItem('token_uid_002')){
            islogin().then((result)=>{
                if(result==='Session Expired'|| !result){
                    Router.push('/')
                    seterrorMessage("Session Expired");
                    
                }
            })
        }
    }, []);
    return (
        <div>
            <Calender/>
        </div>
    );
}

export default Mycalender;

import React,{useState} from 'react';
import send_email from '../lib/send_mail';

const Forgotepassword = (e) => {
    
    const [email, setemail] = useState('');
    const [issentcode, setissentcode] = useState(false);
    const [isUserExist, setisUserExist] = useState(false);
    const [otp, setotp] = useState();
    const [isotpfoud, setisotpfoud] = useState(false);


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email===''){
            return 0;
        }
        let randomNumber = Math.floor(Math.random()*100000000);
        let sixDigitNumber = String(randomNumber).padStart(8,'0');
        const data = {
            email,
            message:"This is Your new password: "+sixDigitNumber + " <br><p>You can change the password from your profile page</p>",
            subject:"Password Request"
        }

        checkemailExist(email).then((result)=>{
            if(result?.status===200){
                fetch(process.env.API_URL+'update_learnerbyemail/'+email,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        password:sixDigitNumber,
                        
                    })
                })
                .then((res)=>res.json())
                .then((result)=>{
                    console.log(result);
                    send_email(data);
                })
                .catch((error)=>{
                    console.log(error);
                })
                console.log(sixDigitNumber);
    
                
    
                setissentcode(true)
            }else{
                setisUserExist(true)
                console.log("No user found");
            }
        })
        
        
        

    }

    const checkemailExist=async (v)=>{
        const response = await fetch(process.env.API_URL+'userbyemail/'+v);
        const data = await response.json();
        
        console.log(data);
        return data;
        
        
    }


    return (
        <div className='flex justify-center items-center h-96'>
            {!issentcode?<form onSubmit={handleSubmit} className='w-full lg:w-1/2 bg-white shadow-md p-5'>
                {email!=='' && isUserExist&&<p>No user Found</p>}
                <input onChange={(e)=>setemail(e.target.value)} type={'email'} className="w-full border-2 p-3 border-gray-600 rounded-md" placeholder='Input your registered email' />
                <input type={'submit'} value="Send" className='px-10 py-3 mt-3 bg-blue-400 rounded-md' />
            </form>:
            <div className='w-full lg:w-1/2 bg-white shadow-md p-5'>
                <p className='text-center text-2xl'>Please check your email {email}</p>
                <p className='text-center'>Password has been reset. Please use this password for login.</p>
            </div>
            }
            
        </div>
    );
}

export default Forgotepassword;

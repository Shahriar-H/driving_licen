import Link from 'next/link';
import send_email from '../../lib/send_mail';
import { useState } from 'react';
import { toast } from 'react-toastify';


const Fotter = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [messages, setmessages] = useState('');
    const [isallFiledFill, setisallFiledFill] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name===''||email===''||phone===''||messages===''){
            
            return setisallFiledFill(true);
        }
        const data = {
            email:"shakihusain4@gmail.com",
            subject:"Contact message from "+name,
            message:`<p>${messages}<br>email:${email}<br>phone:${phone}</p>`
        }
        send_email(data)
        toast.success("Message send..", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        setname('');
        setemail('');
        setphone('');
        setmessages('');

    }
    return (
        <div id='fotter'>
            <div className='bg-gray-800 px-5 lg:px-20 py-10 text-white flex justify-center items-start flex-wrap space-y-10 lg:space-y-0'>
                <div className='w-full lg:w-1/3'>
                    <h1 className='text-3xl'>Contact Us</h1>
                    <hr className='w-10'></hr><br></br><br></br>
                    <div className='space-y-2'>
                        <p><i className="bi bi-telephone-fill"></i> 0404015174 (Ash)</p>
                        <p><i className="bi bi-geo-alt"></i> 19 Danny St, Werrington, NSW, 2747</p>
                        <p><i className="bi bi-envelope-at-fill"></i> info@bestqualitydrivinschool.com.au</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    {/* <h1 className='text-3xl'>Driving Instructor<br></br> by state</h1>
                    <hr className='w-10'></hr>
                    <br></br><br></br>
                    <div className='space-y-2'>
                        <p><Link href='/'><i className="bi bi-link-45deg"></i>  Find Location</Link></p>
                        <p><Link href='/'><i className="bi bi-link-45deg"></i>  Find Location</Link></p>
                        <p><Link href='/'><i className="bi bi-link-45deg"></i>  Find Location</Link></p>
                        <p><Link href='/'><i className="bi bi-link-45deg"></i>  Find Location</Link></p>
                        <p><Link href='/'><i className="bi bi-link-45deg"></i>  Find Location</Link></p>
                    
                    </div> */}
                </div>
                <form onSubmit={handleSubmit} className='w-full lg:w-1/3'>
                    <h1 className='text-3xl'>Message Us</h1>
                    <hr className='w-10'></hr><br></br><br></br>
                    {isallFiledFill&&<p>All input is required</p>}
                    <div className='space-y-2 text-black'>
                        <div className='flex justify-between space-x-2'>
                            <input value={name} required onChange={(e)=>setname(e.target.value)} className='p-2 w-full' type="text" placeholder='Name' />
                        </div>
                        <div className='flex justify-between space-x-2'>
                            <input value={email} required onChange={(e)=>setemail(e.target.value)} className='p-2 w-1/2' type="text" placeholder='Email' />
                            <input value={phone} required onChange={(e)=>setphone(e.target.value)} className='p-2 w-1/2' type="text" placeholder='Phone' />
                        </div>
                        <div className='w-full'>
                            <textarea value={messages} required onChange={(e)=>setmessages(e.target.value)} className='p-2 w-full' placeholder='Message...'></textarea>
                        </div>
                        <div>
                            <input className='px-4 py-3 bg-blue-400  text-white rounded-md uppercase font-bold' value="Send Now" type="submit"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className='bg-gray-900 p-3 px-20 flex flex-wrap justify-center lg:justify-between'>
                <div className='space-x-3 text-gray-400'>
                    <Link href='/'><i className="bi bi-facebook"></i></Link>
                    <Link href='/'><i className="bi bi-whatsapp"></i></Link>
                    <Link href='/'><i className="bi bi-tiktok"></i></Link>
                    <Link href='/'><i className="bi bi-instagram"></i></Link>
                </div>
                <div className='text-gray-400'>
                    <p>Best Quality Driving School © 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Fotter;

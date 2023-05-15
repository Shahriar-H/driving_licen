import moment from 'moment/moment';
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect,useState} from 'react';
import Error from '../../lib/Error';
import islogin from '../../lib/login_feature';
import Stripe from 'stripe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import send_email from '../../lib/send_mail';
import Points from '../learner/Components/points';
import Router from 'next/router';


const Payment = ({state, dispatch}) => {
    const [isLoading, setisLoading] = useState(false);
    const [learnerId, setlearnerId] = useState();
    const [allOrders, setallOrders] = useState([]);
    const [errorMessage, seterrorMessage] = useState('');
    const [DynamicpaymentLink, setDynamicpaymentLink] = useState('');
    const [totalPayment, settotalPayment] = useState('');
    const [isLoadingLink, setisLoadingLink] = useState(false);
    const [isCheckbalance, setisCheckbalance] = useState(false);
    const [pointis, setpointis] = useState(0);
    const [userinfo, setuserinfo] = useState([]);
    const [instructorInfo, setinstructorInfo] = useState();
    

    const stripe = new Stripe(process.env.PUBLISHER_KEY);
    const createDynamicPaymentLink = async (priceId)=>{
        setisLoadingLink(true)
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [{price: 'price_1Mat1EBKLEfyMFWiHX4TeCfw'
          , quantity: 1}],
          after_completion: {type: 'redirect', redirect: {url: 'https://example.com'}}
          });
        console.log(paymentLink);
        
        return paymentLink.url;
    }

    const handleCreateLink = async ()=>{
        let priceId='prod_NLaBNazAOn8uJO';
        
        const link = await createDynamicPaymentLink(priceId);
        setisLoadingLink(false)
        setDynamicpaymentLink(link)
    }

    //delete handle
    const deleteOrderHandle = (orderId)=>{
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
        setisLoading(true)
        fetch(process.env.API_URL+"delete-booking/"+orderId,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
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

    //check balance from wallet

    const handleWalletPaymnt = (orderId,Restupdatedpoints,totalPaid)=>{
        confirm("Press ok to complete payment.")
        //update booking/order status
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
        setisLoading(true)
        const changeStatusData = {
            status:'paid'
        }
        fetch(process.env.API_URL+"update_booking/"+orderId,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            },
            body:JSON.stringify(changeStatusData)
        })
        .then((res)=>res.json())
        .then((result)=>{
            const updateDataofPoints = {
                points:Restupdatedpoints
            }
            //after update booking status update points filed from user row
            fetch(process.env.API_URL+"update_learner/"+learner_id,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                },
                body:JSON.stringify(updateDataofPoints)
            })
            .then((res)=>res.json())
            .then((result)=>{
                const {fname} = JSON.parse(instructorInfo) ||{};
                const {fname:username} = userinfo[0] || {}
                const {id} = allOrders[0] || {};
                const orderid = 12345*id;
                const template = '<body style="font-family:Arial,sans-serif;color:#333;line-height:1.5;background-color:#f7f7f7;margin:0;padding:0"><table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse"><tr><td style="padding:20px 0;text-align:center"><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Logo" style="display:block;width:150px;height:auto"></td></tr><tr><td style="padding:20px 0;text-align:center"><h1 style="font-size:24px;margin:0">Payment Status</h1></td></tr><tr><td style="padding:0 20px"><p>Dear '+username+',</p><p>I am writing to inform you about the payment status of your recent order with Instructor for Test Driving. Your order ID is #'+orderid+'.</p><p>I am pleased to inform you that your payment of $'+totalPaid+' has been successfully processed and we have received the funds. Thank you for completing the payment process.</p><p>As a reminder, your participation in this course is very important to us, and we are confident that it will be a valuable learning experience for you. Please do not hesitate to reach out to us if you have any questions or concerns.</p><p>We have included a receipt of your payment in this email for your reference. If you have any issues or questions regarding the payment, please feel free to contact us.</p><p>Thank you for your continued support of '+fname+' and for choosing to learn with us. We wish you all the best in your studies.</p></td></tr><tr><td style="padding:20px 0;text-align:center"><img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Receipt" style="display:block;width:300px;height:auto"></td></tr></table></body>';
                const data = {
                    email:'shakisk23@gmail.com',
                    subject:'Payment Complete',
                    message:template
                }
                toast.success("Payment Complete & "+result?.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                send_email(data)
                console.log(result);
                setisLoading(false)
            })
            .catch(()=>{
                toast.success("Error occured. Failed", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })

            
            console.log(result);
            setisLoading(false)
        })
        
    }


    useEffect(() => {
        if(localStorage.getItem("token_uid_001")){
            const {token,learner_id} = JSON.parse(localStorage.getItem("token_uid_001"));
            setlearnerId(learner_id)
            islogin().then((result)=>{
                if(result==='Session Expired'){
                    seterrorMessage("Session Expired")
                }
            })
        
        // if(learnerId){
            setisLoading(true)
            fetch(process.env.API_URL+"booking_learner_end/"+learner_id,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            })
            .then((res)=>res.json())
            .then((result)=>{
                // if(result?.length<=0){
                //     Router.push('/')
                // }
                setinstructorInfo(result[0]?.instructor)
                setallOrders(result)
                console.log(allOrders[0]?.id);
                setisLoading(false)
            })

            fetch(process.env.API_URL+"user/"+learner_id,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            })
            .then((res)=>res.json())
            .then((result)=>{
                
                setpointis(result[0]?.points)
                setuserinfo(result)
                console.log(allOrders);
                setisLoading(false)
            })
        //}
        }
        
    }, [isLoading]);
    let totalAm = 0;
    let orderIdis;
    if (errorMessage!=='') return <Error message={errorMessage}/>
    // if (isLoading) return <p>Loading...</p>
    // if (!allOrders) return <p>No data</p>
    return (
        <div className='px-2 lg:px-32 mt-10 flex justify-start flex-wrap'>
            
            {/* <div className='p-1 w-full lg:w-1/2'>
                <div className='bg-white w-full h-full p-5 lg:p-10 shadow-sm rounded-sm text-center space-y-5 flex items-center justify-center'>
                    <div>
                        <div>
                            {DynamicpaymentLink!==''&&<Link href={DynamicpaymentLink} target="_blank" className='px-10 w-1/2 py-3 rounded-sm bg-blue-600 text-white'>Pay Now</Link>}
                        </div><br></br>
                        <p onClick={handleCreateLink} className='px-10 py-3 rounded-sm border-blue-600 border-2 hover:bg-blue-300 cursor-pointer text-black'>Create Payment Link</p>
                    </div>
                    <p className=''> -OR- </p>
                    <div className='flex justify-center'>
                        <Image src={"/Resources/Images/qr.png"} width="200" height={200} alt="QR" />
                    </div>
                </div>
            </div> */}
            <div className='p-1 w-full lg:w-full'>
                <div className='bg-white w-full p-5 shadow-sm rounded-sm space-y-2'>
                    {allOrders && Array.isArray(allOrders)? (allOrders?.map((order,index)=>{
                        const {fname} =JSON.parse(order?.instructor);
                        let priceis1=0;
                        if(order?.package==199){
                            priceis1=199;
                        }
                        priceis1 = priceis1+(order?.lesson*80)
                        totalAm +=priceis1;
                        orderIdis=order?.id;
                    return <div key={index} className='flex relative justify-between p-4 bg-white rounded-md w-full' style={{border:"1px solid rgba(0,0,0,0.2)"}}>
                        <p onClick={()=>deleteOrderHandle(order?.id)} className="cursor-pointer absolute top-4 right-3 z-40">
                            <i className="bi bi-trash text-xl"></i>
                        </p>
                        <div className='p-2 w-1/12 lg:w-auto'>
                            <i className="bi bi-calendar2-plus text-2xl"></i>
                        </div>
                        <div className='pl-3 w-11/12'>
                            <p>You are about to make the following bookings with <b>{fname}</b>:</p>
                            <div className='flex justify-between text-gray-600 mt-4'>
                                {order?.lesson&&<p>{order?.lesson} hour Lesson</p>}
                                {order?.package&&<p>{order?.package} Test package</p>}
                                
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-600 mt-4'>{order?._date} at {order?._time}</p>
                                <p className='mt-4 text-red-500'>Total: ${priceis1}</p>
                            </div>
                            
                        </div>
                    </div>})
                    ):<p>No Data Found</p>
                }
                </div>
                <br></br><br></br>
                <div className='bg-white p-4 rounded-sm'>
                    {allOrders.length&&pointis&& pointis>=totalAm?
                    <div className='flex space-x-2'>
                        <Points/>
                    </div>:
                    <div className='flex'>
                        <p className='text-red-400'>You are not able to go with wallet! </p>
                        <Link href={'/learner'}>Learn more</Link>
                    </div>
                    }
                    
                </div><br></br>
                <div className='flex space-x-3 items-center'>
                    <div>
                        {DynamicpaymentLink&&DynamicpaymentLink!==''&&<Link href={DynamicpaymentLink} target="_blank" className='px-10 w-1/2 py-4 rounded-sm bg-blue-600 text-white'>Pay Now <b>${totalAm}</b></Link>}
                    </div>
                    {/* <Link target='_blank' href={'https://book.stripe.com/test_dR6g1E4eL7ozfew3cc?client_reference_id'} className='px-10 py-3 rounded-sm border-blue-600 border-2 hover:bg-blue-300 cursor-pointer text-black text-center bg-white'>Pay Now <b>${totalAm}</b></Link> */}
                    {allOrders.length&&pointis&& pointis>=totalAm?<button className='px-10 py-3 rounded-sm border-blue-600 border-2 hover:bg-blue-300 cursor-pointer text-black text-center bg-white' onClick={()=>handleWalletPaymnt(orderIdis,pointis-totalAm,totalAm)}>{isLoadingLink?"LOADING....":`Pay with wallet $${totalAm}`}</button>:
                    allOrders.length&&<button className='px-10 py-3 rounded-sm border-blue-600 border-2 hover:bg-blue-300 cursor-pointer text-black text-center bg-white' onClick={handleCreateLink}>{isLoadingLink?"LOADING....":"Continue"}</button>
                    }
                </div>
                <br></br><br></br><br></br><br></br>
            </div>
            
        </div>
    );
}

export default Payment;

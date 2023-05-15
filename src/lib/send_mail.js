import { toast } from "react-toastify";
// export const funVoid =()=>{
//     return 0
// }
const send_email = (data)=>{
    fetch(process.env.API_URL+"send_email",{
        method:"POST",
        mode: 'cors',
        headers:{
            "Content-Type":"application/json",
           
        },
        body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((result)=>{
        // toast.success(result?.message, {
        //     position: "top-right",
        //     autoClose: 3000,
        //     hideProgressBar: true,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        // });
        console.log('Send');
       
    })
}

export default send_email;


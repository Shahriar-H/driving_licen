
const islogin = async () => {
    if(localStorage.getItem("token_uid_001")){
        let data = localStorage.getItem("token_uid_001");
        const {token,learner_id} = JSON.parse(data);
        let tokenRespon = await fetch(process.env.API_URL+"user_login_auth/"+learner_id,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        let mytokenRespon = await tokenRespon.json();
        // console.log(learner_id);
        if(mytokenRespon?.result){
            return {status:true,id:learner_id,token:token,result:mytokenRespon?.result};
        }else if(mytokenRespon?.message==="Session Expired"){
            return "Session Expired";
        }
       
        

    }    
}




export default islogin;
const isloginInst = async () => {
    if(localStorage.getItem("token_uid_002")){
        let data = localStorage.getItem("token_uid_002");
        const {token,learner_id} = JSON.parse(data);
        //cheking validation of token
        let tokenRespon = await fetch(process.env.API_URL,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        let mytokenRespon = await tokenRespon.json();
        console.log(learner_id);
        if(mytokenRespon?.result){
            return {status:true,id:learner_id};
        }else if(mytokenRespon?.message==="Session Expired"){
            return "Session Expired";
        }
       
        

    }    
}


export default isloginInst;
export const initialState = {
    v_type:"auto",
    area:null,
    instructor:null,
    lesson:null,
    driving:null,
    price:null,
    duration:null,
    date:null,
    time:null
}

export const reducer = (state,action)=>{
    switch (action.type) {
        case "change_vahicle":
            if(!action.payload){
                return {...state,v_type:"auto"}
            }else{
                return {...state,v_type:"manual"}
            }
        case "area":
            return {...state,area:action.payload}
        case "instructor":
            return {...state,instructor:action.payload}
            
        case "package":
            return {...state,lesson:action.payload.lesson,driving:action.payload.driving,price:action.payload.price}
        case "time_duration":
            return {...state,duration:action.payload.duration,date:action.payload.date,time:action.payload.time}
            
        default:
            break;
    }
}



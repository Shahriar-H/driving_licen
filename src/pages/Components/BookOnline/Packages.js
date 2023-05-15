import { useEffect } from 'react';
import Package from './Package';


const Packages = ({Data}) => {
    
    useEffect(() => {
       console.log(Data);
    }, [Data]);
    return (
        <div className='flex justify-center flex-wrap'>
            {
                Data?.map((ele,index)=><Package key={index}/>)
            }
            {/* <Package/>
            <Package/>
            <Package/>
            <Package/>
            <Package/>
            <Package/> */}
        </div>
    );
}



export default Packages;

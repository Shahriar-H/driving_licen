import Link from "next/link";
import { useEffect,useState } from "react";
import Faq from "react-faq-component";

const FaqCom = ({faq}) => {
    
    const [Data, setData] = useState({});

    useEffect(() => {
        setData(faq?.result)
        console.log(faq?.result);
    }, []);
    const data = {
        title: "Top Frequently Asked Questions (FAQ )",
        rows: Data
    };
    
    const styles = {
        bgColor: 'transparent',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: 'grey',
        arrowColor: "gray",
    };
    
    const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
    };
    


    return (
        <div className='px-5 lg:px-24 py-12'>
            
            <br></br><br></br>

            <div>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div><br></br><br></br>
            <div className='text-center w-full'>
                <Link href={'#fotter'} className=' bg-blue-400 px-4 py-3 rounded-md text-white'>I want Support</Link>
            </div>
        </div>
    );
}

export default FaqCom;

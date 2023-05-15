import React,{useEffect,useState} from 'react';
import CheckPricing from '../Components/CheckPricing';
import DrivingLesseon from '../Components/DrivingLesseon';
import FaqCom from '../Components/Faq';
import GiftCard from '../Components/GiftCard';
import Howitswork from '../Components/Howitswork';
import MainSection from '../Components/MainSection';
import Review from '../Components/Review';
import Seoparagraph from '../Components/Seoparagraph';
import WhyBest from '../Components/WhyBest';

const Home = ({Data,faq,reviews,images}) => {
   
    
    return (
        <div>
       
            
            <MainSection images={images}/>
            {/* <CheckPricing/> */}
            <Howitswork images={images?.result[2]} />
            <Review reviews = {reviews}/>
            <DrivingLesseon/>
            <GiftCard images={images?.result[3]}/>
            <FaqCom faq = {faq}/>
            <WhyBest Data = {Data}/>
            <Seoparagraph Data = {Data}/>
          
            
        </div>
    );
}



export default Home;

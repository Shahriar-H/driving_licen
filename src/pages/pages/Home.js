import React from 'react';
import CheckPricing from '../Components/CheckPricing';
import DrivingLesseon from '../Components/DrivingLesseon';
import FaqCom from '../Components/Faq';
import GiftCard from '../Components/GiftCard';
import Howitswork from '../Components/Howitswork';
import MainSection from '../Components/MainSection';
// import Review from '../Components/Review';
import Seoparagraph from '../Components/Seoparagraph';
import WhyBest from '../Components/WhyBest';

const Home = () => {
    return (
        <div>
       
            
            <MainSection/>
            <CheckPricing/>
            <Howitswork/>
            {/* <Review/> */}
            <DrivingLesseon/>
            <GiftCard/>
            <FaqCom/>
            <WhyBest/>
            <Seoparagraph/>
          
            
        </div>
    );
}

export default Home;

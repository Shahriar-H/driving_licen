import React from 'react';

import SlideItem from './SlideItem';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Review = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
      ];
    const resPn=      {
        0: {
            items: 1,
        },
        1024: {
            items: 3,
            itemsFit: 'contain',
        }
      }
    return (
        <div className='bg-gray-100 px-5 lg:px-24 py-12'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl font-bold'>What our learners say</h1>
                <p className='text-xl text-gray-500'>Choose a driving instructor you can trust</p>
            </div>
            <AliceCarousel animationDuration="2000" mouseTracking items={items} responsive={resPn} autoPlay={true} infinite={true} />
            
           
        </div>
    );
}

export default Review;

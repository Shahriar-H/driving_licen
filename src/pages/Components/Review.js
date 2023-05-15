import SlideItem from './SlideItem';



const Review = ({reviews}) => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
        <SlideItem key={Math.random()}/>,
      ];
    const resPn={
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
           
            <div className='w-full'>
                <div className='customHorijontalScroll'>
                    {
                        reviews?.result&& Array.isArray(reviews?.result) && reviews?.result?.map((review, index)=>{
                            return <SlideItem key={index} reviews={review}/>
                        })
                    }
                    
                    {/* <SlideItem/>
                    <SlideItem/>
                    <SlideItem/>
                    <SlideItem/> */}
                </div>
            </div>
           
        </div>
    );
}

export default Review;


import Link from 'next/link';
// import giftCard from "../public/Resources/Images/giftCard";
import Image from 'next/image';

const GiftCard = () => {
    return (
        <div className='px-5 lg:px-24 py-11 bg-gray-100'>
            
            <div className='flex flex-wrap justify-center items-center w-full'>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <Image className='' src={"/Resources/Images/giftCard.png"} height="400" width={400} alt="image" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-center text-2xl font-extrabold'>The gift of life long skills</h2><br></br><br></br>
                    <div className='flex justify-between w-full'>
                        <div className='text-center w-1/2 p-2'>
                            <i className="bi bi-postcard-heart text-5xl"></i>
                            <div>
                                <h1 className='text-2xl font-bold'>Pick a voucher</h1>
                                <p className='text-gray-500'>
                                    Choose from a wide variety of instructors in your area. Check rating & reviews from real learners.
                                </p>
                            </div>
                        </div>
                        <div className='text-center w-1/2 p-2'>
                            <i className="bi bi-gift text-5xl"></i>
                            <div>
                                <h1 className='text-2xl font-bold'>Pick a voucher</h1>
                                <p className='text-gray-500'>
                                    Choose from a wide variety of instructors in your area. Check rating & reviews from real learners.
                                </p>
                            </div>
                        </div>
                    </div><br></br><br></br>
                    <div className='text-center w-full'>
                        {/* <Link href="/" className=' bg-blue-400 px-4 py-3 rounded-md text-white'>
                            <a>Book Driving Lesson Now</a>
                        </Link> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default GiftCard;

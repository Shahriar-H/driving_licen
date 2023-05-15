import Image from "next/image";
import Link from "next/link";

// import HowTodo from "../Resources/Images/howtodo.webp"

const Howitswork = ({images}) => {
    return (
        <div className='px-5 lg:px-24 py-11 '>
            <div className='text-center mb-12'>
                <h1 className='text-3xl font-bold'>How its work?</h1>
                <p className='text-xl text-gray-500'>Simple & flexible booking system</p>
            </div>

            <div className='flex flex-wrap justify-center items-center w-full'>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <Image src={"http://myaddmin.virtualxpose.com.au/driving/drivierImages/"+images?.photo} width="300" height={300} alt="how" />
                </div>
                <div className='w-full lg:w-1/2'>
                    <div>
                        <div className='space-x-4 flex justify-start mb-3'>
                            <i className="bi bi-1-circle-fill text-3xl"></i>
                            <div>
                                <h1 className='text-2xl font-bold'> Find Your Driving Instructors</h1>
                                <p className='text-gray-500'>
                                    Choose from a wide variety of instructors in your area. Check rating & reviews from real learners.
                                </p>
                            </div>
                        </div>

                        <div className='space-x-4 flex justify-start mb-3'>
                            <i className="bi bi-2-circle-fill text-3xl"></i>
                            <div>
                                <h1 className='text-2xl font-bold'> Book Your Driving Lessons</h1>
                                <p className='text-gray-500'>
                                    Book online with instant confirmation. Easily manage your lesson schedule via our online dashboard.
                                </p>
                            </div>
                        </div>

                        <div className='space-x-4 flex justify-start mb-3'>
                            <i className="bi bi-3-circle-fill text-3xl"></i>
                            <div>
                                <h1 className='text-2xl font-bold'> Find Your Driving Instructors</h1>
                                <p className='text-gray-500'>
                                    Your instructor picks you up from your chosen address and you are on your way 🚗
                                </p>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howitswork;

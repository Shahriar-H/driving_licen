import Image from "next/image";
// import client1 from "../Resources/Images/clients1.jpeg"
const SlideItem = () => {
    return (
        <div className='bg-white p-5 rounded-sm shadow-md' style={{margin:'10px'}}>
                    <div className='flex space-x-3'>
                        <Image className='h-12 w-12 rounded-full border-2 border-white shadow-md' src={"/Resources/Images/clients1.jpeg"} width="80" height={80} alt="Image"/>
                        <div>
                            <h3>David</h3>
                            <div className='text-yellow-400 flex space-x-1'>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div><br></br>
                    <div>
                        <p className='text-gray-500'>Anita is such an AMAZING instructor!! She is very patient and really observant. After only 3 lessons she prepared me for the test and passed on the first go. Thanks so much Anita!!</p>
                    </div><br></br>

                    <i>David</i>
                </div>
    );
}

export default SlideItem;

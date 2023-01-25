
import MainSection from '../Components/MainSection';
import Search from '../Components/Search';
// import Bg from "../Resources/Images/mainbg.png"
import Packages from '../Components/BookOnline/Packages';
import Header from '../Components/Header';
import Fotter from '../Components/Footer';

const BookOnline = () => {
    return (
        <div>
            <Header/>
            <div className='mainbackground mainbgImage py-12 px-2 sm:px-6'>
                <div>
                    <h1 className='text-center text-white text-3xl lg:text-4xl font-extrabold leading-snug'>Where do you need a driving instructor?</h1>
                </div>
                <Search/>
            </div>

            <div className='bg-blue-300 px-3 lg:px-24 py-10 flex flex-wrap justify-center'>
                <div className='w-full lg:w-1/2 flex items-center'>
                    <div className='py-3'>
                        <h1 className='text-black text-3xl lg:text-3xl font-extrabold leading-snug'>Choose your Instructor</h1>
                        <p className='text-xl text-gray-600'>We have <b>10 auto instructors</b> available in Sydney, 2000</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 bg-white rounded-md p-5 border-black border-2 flex flex-wrap justify-start'>
                    <div className='w-full sm:w-1/2 sm:border-r-2 border-dotted border-gray-500'>
                        <h2 className='text-xl'>Driving Lesson Pricing</h2>
                        <p className='text-gray-500 text-xs'>Our Available Packages</p>
                        <div>
                            <table className='w-full mt-5'>
                                <tbody className=''>
                                    <tr>
                                        <td className='text-xl py-1'>1-5<sub className='text-xs '>hrs</sub></td>
                                        <td className='text-xl py-1'>$80<sub className='text-xs'>/hr</sub></td>
                                        <td className='text-xl py-1'><sub className='text-xs'></sub></td>
                                    </tr>
                                    <tr className='bg-gray-100'>
                                        <td className='text-xl py-1'>1-5<sub className='text-xs'>hrs</sub></td>
                                        <td className='text-xl py-1'>$80<sub className='text-xs'>/hr</sub></td>
                                        <td className='text-xl py-1'><p className='bg-green-400 px-2 py-1 text-xs w-fit rounded-md'>Save 10%</p></td>
                                    </tr>
                                    <tr>
                                        <td className='text-xl py-1'>1-5<sub className='text-xs'>hrs</sub></td>
                                        <td className='text-xl py-1'>$80<sub className='text-xs'>/hr</sub></td>
                                        <td className='text-xl py-1'><p className='bg-green-400 px-2 py-1 text-xs w-fit rounded-md'>Save 20%</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='hidden sm:block w-full sm:w-1/4 px-2 sm:border-r-2 border-gray-600'>
                        <h1 className='text-black lg:text-lg lg:font-bold leading-snug'>Calculator</h1><br></br>
                        <select className='w-full p-2'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                        <p className='font-bold text-xl mt-10'>122$</p>
                    </div>
                    <div className='hidden sm:block w-full sm:w-1/4 px-2 text-center'>
                        <p className=''>Test Package</p><br></br>
                        <p className='font-bold text-xl'>199$</p>

                        <ul className='mt-3' style={{fontSize:'10px'}}>
                            <li style={{listStyleType:'square'}}>Pick up & drop off</li>
                            <li style={{listStyleType:'square'}}>Pre-test lesson</li>
                            <li style={{listStyleType:'square'}}>Use of car for test</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='px-2 sm:px-6 py-12'>
                
                <Packages/>
            </div>
            <Fotter/>
        </div>
    );
}

export default BookOnline;

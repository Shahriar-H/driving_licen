
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

            <div className='px-2 sm:px-6 py-12'>
                <div>
                    <h1 className='text-center text-black text-3xl lg:text-3xl font-extrabold leading-snug mb-3'>Choose your Instructor</h1>
                </div>
                <Packages/>
            </div>
            <Fotter/>
        </div>
    );
}

export default BookOnline;

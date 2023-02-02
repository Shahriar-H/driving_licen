
import { useEffect } from "react";
// import Car from "../Resources/Images/car1.png"
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import Search from "./Search";
import Image from "next/image";
import Link from "next/link";

const MainSection = () => {
  const images = ['fimpress.gif','Ch_2.gif']
  
  const selectImage = ()=>{
    let selectindex = Math.floor(Math.random() * 2);
    return images[selectindex];
  }
  useEffect(() => {
    selectImage()
  }, []);
  return (
    <div
      className="mainbackground py-12 px-2 sm:px-6"
      style={{ backgroundImage: `url(/Resources/Images/mainbg.png)` }}
    >
    
      

      <div className="pt-10 px-5 lg:px-20 flex justify-between items-center mb-3 flex-wrap flex-row-reverse">
        
        {/* <div className="w-full lg:w-1/3 text-white text-lg space-y-2 text-left">
          <p>
            <i className="bi bi-check-lg text-green-400 text-3xl"> </i> Choose
            from 800+ verified instructors
          </p>
          <p>
            <i className="bi bi-check-lg text-green-400 text-3xl"> </i> 100,000+
            new learners per year
          </p>
          <p>
            <i className="bi bi-check-lg text-green-400 text-3xl"> </i> 24/7
            online booking & rescheduling
          </p>
          <p className="pb-3">
            <i className="bi bi-check-lg text-green-400 text-3xl"> </i> Change
            your instructor anytime
          </p>

          <hr></hr>

          <div>
            
          </div>
        </div> */}

        <div className="w-full lg:w-1/2">
          <div>
            <h1 className="text-center text-white text-3xl lg:text-4xl font-extrabold leading-snug">
                What do you need ?
              </h1>
          </div>
            {/* <Search /> */}
          <div className="space-y-8 my-5">
            <div className="text-center">
              <Link href="/pages/book_online" className='px-16 py-3 bg-black  text-white rounded-md uppercase font-bold w-full lg:w-1/2'>Driving Packages</Link>
            </div>
            <div className="text-center">
              <Link href="/pages/details" className='px-16 py-3 w-full lg:w-1/2 bg-white  text-black rounded-md uppercase font-bold'>Driving Packages & Lessons</Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image className='' src={`/Resources/Images/${selectImage()}`} width="500" height={500}  alt="car"/>
        </div>

      </div>
    </div>
  );
};

export default MainSection;

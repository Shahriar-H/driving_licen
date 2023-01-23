import React from "react";

// import Car from "../Resources/Images/car1.png"
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Cities from "../utils/AllCity";
import Search from "./Search";
import Image from "next/image";

const MainSection = () => {
  return (
    <div
      className="mainbackground py-12 px-2 sm:px-6"
      style={{ backgroundImage: `url(/Resources/Images/mainbg.png)` }}
    >
    
      <div>
        <h1 className="text-center text-white text-3xl lg:text-4xl font-extrabold leading-snug">
          Where do you need a driving instructor?
        </h1>
      </div>
      <Search />

      <div className="pt-10 px-5 lg:px-20 flex justify-between items-center mb-3 flex-wrap">
        <div className="w-full lg:w-2/3">
          <Image className='' src={"/Resources/Images/car1.png"} width="500" height={500}  alt="car"/>
        </div>
        <div className="w-full lg:w-1/3 text-white text-lg space-y-2 text-left">
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
            {/* <Image height={200} width="200" style={{maxWidth:'200px'}} src='https://topazhouse.com/wp-content/uploads/2020/05/6a7989edfdda098dd819490f8dd6b53c_google-reviews-logo-transparent-png-clipart-free-download-ywd_3000-1718.png' /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

import React from "react";
import profile from "../assets/Images/profile.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ResumeBtn from "./ResumBtn";
// import profile from "../assets/Images/profile.png"
const Home = () => {
  return (
    <>
      <div
        name="home"
        className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
           <h2 className="text-3xl sm:text-7xl font-bold text-white mt-32 md:mt-0">
             <span className="text-cyan-500">I'</span> m a fullStack  developer
            </h2> 
            <p className="text-gray-500 py-4 max-w-md">
              Hi, I'm Nikesh Sharma, an aspiring MERN Stack Developer with a
              passion for web development. Currently, I'm undergoing Full Stack
              Training at Antier Solution and have 3 years of customer support
              experience. I specialize in building responsive, user-friendly web
              applications and love creating projects that solve real-world
              problems
            </p>

            {/* comment code  */}
            {/* <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div> */}

            {/* end  */}



            {/* btn new code  */}
<div className="flex  m-3 gap-3 ">

<ResumeBtn name="Portfolio" to="portfolio" isScroll={true} />
  <ResumeBtn name="Resume" to="/resume.pdf" download={true} />
</div>
          </div>
          <div>
             <img 
              src={profile}
              alt="my profile"
            
              className="rounded-full mx-auto w-2/3 md:w-full shadow-[0_4px_16px_rgba(255,255,255,0.5)]"
             /> 



    
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

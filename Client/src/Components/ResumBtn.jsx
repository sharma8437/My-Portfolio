import React from 'react';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ResumeBtn = ({ name = 'Portfolio', to = '/portfolio', download = false, isScroll = false }) => {
  return (
    <div>
      {isScroll ? (
        <Link
          to={to}
          smooth
          duration={500}
          className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          {name}
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      ) : (
        <a
          href={to}
          download={download}
          className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          {name}
          <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </a>
      )}
    </div>
  );
};

export default ResumeBtn;

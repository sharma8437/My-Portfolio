// import React from "react";
// import testify from '../assets/Images/testify.png'
// import book from '../assets/Images/book.png'
// import food from '../assets/Images/food.png'
// import movie from '../assets/Images/movie.png'
// import otp from '../assets/Images/otp.png'
// import brand from '../assets/Images/brand.png'
// import { space } from "postcss/lib/list";

// const Portfolio = () => {

//     const portfolio =[
//         {
//             id:1,
//             src:testify
//         },
//         {
//             id:2,
//             src:book
//         },
//         {
//             id:3,
//             src:food
//         },
//         {
//             id:4,
//             src:movie
//         },
//         {
//             id:5,
//             src:otp
//         },
//         {
//             id:6,
//             src:brand
//         },
       
//     ]
//   return (
//     <>
//       <div
//         name="Projects"
//         className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//       >
//         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//           <div className="pb-8">
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//               Projects 
//             </p>
//             <p className="py-6">Check Out Some of My Work Here .</p>
//           </div>
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {
//             portfolio.map(({id,src})=>(
                
//                 <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
//                   <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 z-0" />
//                   <div className="flex flex-col items-center mt-4 mb-4 space-y-2">
//   <span className="text-sm">Go to the Link:</span>
//   <button className="px-6 py-2 duration-200 hover:scale-105 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
//     Code
//   </button>
// </div>
//                 </div>

// ))
// }
// </div>
         
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;



import React from "react";
import testify from '../assets/Images/testify.png';
import book from '../assets/Images/book.png';
import food from '../assets/Images/food.png';
import movie from '../assets/Images/movie.png';
import otp from '../assets/Images/otp.png';
import brand from '../assets/Images/brand.png';
import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolio = [
    { id: 1, src: testify,link:'https://github.com/sharma8437/Testify' },
    { id: 2, src: book, link:'https://github.com/sharma8437/MERN_Project_BookStore' },
    { id: 3, src: food, link:'https://github.com/sharma8437/React-Projects/tree/main/FoodAppWith_API/foodappAPI' },
    { id: 4, src: movie, link:'https://github.com/sharma8437/React-Projects/tree/main/moviehouseproject' },
    { id: 5, src: otp, link:'https://github.com/sharma8437/React-Projects' },
    { id: 6, src: brand, link:'https://github.com/sharma8437/brand-project' },
  ];

  return (
    <>
      <div
        name="Projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-500">
              Projects
            </p>
            <p className="py-6">Check Out Some of My Work Here.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolio.map(({ id, src,link }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex flex-col items-center space-y-2 mt-4 mb-4">
                  <span className="text-sm">Go to the Github Link:</span>
                  <a href={link} target="_blank" className="px-6 py-2 duration-200 hover:scale-105 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;


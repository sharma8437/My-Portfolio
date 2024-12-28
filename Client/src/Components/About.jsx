// import React from "react";

// const About = () => {
//   return (
//     <>
//       <div
//         name="about"
//         className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex"
//       >
//         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
//           <div className="pb-8 mt-5">
//             <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-500">
//               About
//             </p>

//             <br />
//             <p className="text-xl mt-20">
//               Hi, I’m Nikesh Sharma, a passionate MERN stack developer and tech
//               enthusiast. My journey in web development started with a curiosity
//               to build dynamic, user-friendly applications, and it has since
//               grown into a career ambition. I specialize in crafting robust
//               backend systems and interactive frontends, ensuring seamless user
//               experiences. With a strong foundation in React, Node.js, Express,
//               and MongoDB, I thrive on building scalable and efficient
//               solutions. When I’m not coding, you can find me exploring new
//               places, learning about emerging tech trends, or sharing my
//               knowledge with others. My goal is to continuously grow, innovate,
//               and contribute to impactful projects that make a difference. Let’s
//               build something amazing together! 🚀
//             </p>
//             <br />
//             <p className="text-3xl font-bold inline border-b-4 border-gray-500 text-cyan-500">
//               Education </p>

//             {/* <p className="text-xl">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Accusantium sunt quia, incidunt similique inventore quaerat, vel,
//               repudiandae impedit debitis ipsa error eveniet provident in iure
//               nam corporis quibusdam minima! Iusto necessitatibus tenetur
//               perferendis quos et cumque earum itaque incidunt at voluptatem
//               dolores rem iste, quam quisquam nisi id accusamus obcaecati.
//             </p> */}
//             <ul>
//                 <li>Secondary education</li>
//                 <li>higher education</li>
//                 <li>bechelors education</li>
//             </ul>
//           </div>
        
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;


import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        {/* About Section */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-cyan-500">
            About
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-10">
          <p className="text-xl leading-8">
            Hi, I’m <span className="font-bold text-cyan-500">Nikesh Sharma</span>, 
            a passionate MERN stack developer and tech enthusiast. My journey in web 
            development started with a curiosity to build dynamic, user-friendly applications, 
            and it has since grown into a career ambition.
            <br /><br />
            With a strong foundation in{" "}
            <span className="font-bold text-cyan-500">
              React, Node.js, Express, and MongoDB
            </span>, I thrive on building scalable and efficient solutions. 
            Let’s build something amazing together! 
          </p>
        </div>

        {/* Education Section */}
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-cyan-500 text-cyan-500">
            Education
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-500">Bachelors Of Computer Application</h3>
              <p className="text-sm">2019-2022</p>
            </div>
            {/* <div className="h-1 bg-cyan-500 w-10 sm:w-20"></div> */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-500">Senior Secondary Education</h3>
              <p className="text-sm">2017-2019</p>
            </div>
            {/* <div className="h-1 bg-cyan-500 w-10 sm:w-20"></div> */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-500">Secondary Education</h3>
              <p className="text-sm">2015-2017</p>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-cyan-500 text-cyan-500">
            Work Experience
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 duration-200">
            <h3 className="text-2xl font-bold text-cyan-500 mb-4">Customer Support</h3>
            <p className="text-lg">
              3 Years work experience in customer support.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 duration-200">
            <h3 className="text-2xl font-bold text-cyan-500 mb-4">Full-Stack Developer - <span className="text-green-500 text-sm">Present</span></h3>
            <p className="text-lg">
            Currently undergoing training in Full Stack development, including MongoDB, Express.js, React.js, and
Node.js at "Antier School of Blocktech"
            </p>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-cyan-500 text-cyan-500">
            Technical Skills
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JavaScript (ES6+)",
              "HTML5 & CSS3",
              "Git & GitHub",
              "RESTful APIs",
              "Tailwind CSS",
              "Material-UI",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 p-2 rounded text-center hover:bg-cyan-500 duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


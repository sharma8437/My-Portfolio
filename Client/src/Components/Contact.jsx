import React from "react";

const Contact = () => {
  return (
    <>
      <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-500">Contact</p>
            <p className="py-6 font-bold text-sm">Submit the Form below to get in touch with me..</p>
          </div>

          <div className="flex justify-center items-center">
            <form action="" className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name.."
                className="  p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />

<input
                type="text"
                name="name"
                placeholder="Enter your email.."
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea name="message" placeholder="En ter your message.." rows='10' className=" bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Let's talk</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

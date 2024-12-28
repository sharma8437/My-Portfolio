import React from 'react'
import css from '../assets/css.png'
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import node from '../assets/node.png'

const Experience = () => {
    const tech =[
        {
            id:1,
            src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd2rMcfI56SZEenhvautbZl_xUsPSHaktNw&s',
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:react,
            title:'React',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-orange-500'
        },
        {
            id:5,
            src:bootstrap,
            title:'Nodejs',
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:node,
            title:'Nextjs',
            style:'shadow-white'
        },
    ]
  return (
    <>
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-cyan-500'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>

                {
                    tech.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='py-4'>{title}</p>
                </div>

                    ))
                }
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Experience
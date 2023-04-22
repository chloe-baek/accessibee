import React from 'react';
import { motion as m } from 'framer-motion';

export default function Team() {
  const cardStyle = 'flex flex-col items-center my-12 w-full';
  const imgStyle =
    'my-3 mx-auto md:m-0 w-4/6 h-4/6 2xl:w-5/6 2xl:h-5/6 rounded-full min-w-[200px] max-w-[350px] ';
  return (
    <m.section
      className='w-full h-full min-h-0 overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <h3 className='mr-10 mt-10 ml-12 pb-4 text-center text-4xl lg:text-5xl font-serif font-semibold border-b-2 border-gray-500 uppercase'>
        MAGJAY Team
      </h3>
      <div className='flex justify-center flex-wrap items-center h-4/5 w-5/6 mx-auto  '>
        <div>
          <div className={cardStyle}>
            <img className={imgStyle} src='/img/personas/Anita.jpg' alt='' />
            <h3 className='pt-2 text-lg font-semibold underline decoration-[#286074] decoration-4'>
              <span className='text-2xl font-extrabold text-yellow-500'>M</span>
              uke Li
            </h3>
          </div>
          <div className={cardStyle}>
            <img className={imgStyle} src='/img/personas/Anita.jpg' alt='' />
            <h3 className='pt-2 text-lg font-semibold underline decoration-[#286074] decoration-4'>
              <span className='text-2xl font-extrabold text-yellow-500'>G</span>
              unchin Dandar
            </h3>
          </div>
        </div>
        <div>
          <div className={cardStyle}>
            <img className={imgStyle} src='/img/personas/Anita.jpg' alt='' />
            <h3 className='pt-2 text-lg font-semibold underline decoration-[#286074] decoration-4'>
              <span className='text-2xl font-extrabold text-yellow-500'>A</span>
              nne Bolton
            </h3>
          </div>
          <div className={cardStyle}>
            <img className={imgStyle} src='/img/personas/Anita.jpg' alt='' />
            <h3 className='pt-2 text-lg font-semibold underline decoration-[#286074] decoration-4'>
              <span className='text-2xl font-extrabold text-yellow-500'>J</span>
              ewon Baek
            </h3>
          </div>
        </div>
      </div>
    </m.section>
  );
}

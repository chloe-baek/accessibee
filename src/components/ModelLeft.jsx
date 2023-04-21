import React from 'react';
import { motion as m } from 'framer-motion';

// const items = [items];
// const itemArray = items.map((items) => <li>{items}</li>);
export default function ModelLeft({ title, subtitle, src, para1 }) {
  return (
    <m.section
      className='w-full h-full min-h-0 flex-auto overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <h3 className='pb-6 ml-6 text-5xl font-serif font-semibold'>{title}</h3>
      <div className='flex items-start justify-center '>
        <div className='basis-[45%] h-[inherit]'>
          <h4 className='pb-6 text-2xl font-serif font-semibold'>{subtitle}</h4>
          <p className='leading-8 text-lg'>{para1}</p>
          {/* <ul className='list-disc'>{itemArray}</ul> */}
        </div>
        <div className='basis-[45%] pl-5'>
          <video autoPlay muted loop>
            <source src={src} type='video/mp4' />
          </video>
        </div>
      </div>
    </m.section>
  );
}
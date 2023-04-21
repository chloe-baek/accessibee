import React from 'react';
import { motion as m } from 'framer-motion';

function NewLine(props) {
  const text = props.text;
  return text
    .split('\n')
    .map((str) => <p className='py-4 text-lg leading-8'>{str}</p>);
}

export default function Model({ title, src, para1, para2 }) {
  return (
    <m.section
      className='flex items-center justify-center w-full h-full min-h-0 ml-8 flex-auto overflow-y-auto '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      {/* <div className='flex items-start justify-center '> */}
      <div className='basis-[45%] flex justify-center'>
        <video autoPlay muted loop className='w-2/3'>
          <source src={src} type='video/mp4' />
        </video>
      </div>
      <div className='basis-[45%] h-full'>
        <h3 className='pb-6 text-5xl font-serif font-semibold'>{title}</h3>
        <NewLine text={para1} />
      </div>
      {/* </div> */}
    </m.section>
  );
}

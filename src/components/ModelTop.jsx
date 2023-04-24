import React from 'react';
import { motion as m } from 'framer-motion';

function NewLine(props) {
  const text = props.text;
  return text
    .split('\n')
    .map((str) => (
      <p className='py-3 text-lg leading-8 w-2/3 max-w-5xl'>{str}</p>
    ));
}

export default function ModelTop({ title, src, para1 }) {
  return (
    <m.section
      className='flex flex-col items-center justify-evenly w-full h-full min-h-0 flex-auto overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <h3 className='pb-4 mb-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold border-b-2 border-gray-500 pt-5 md:pt-0'>
        {title}
      </h3>
      <div className='w-1/2'>
        <video
          autoPlay
          muted
          loop
          className='w-full max-w-[660px] mx-auto min-w-[300px]  rounded-3xl'
        >
          <source src={src} type='video/mp4' />
        </video>
      </div>

      <NewLine text={para1} />
    </m.section>
  );
}

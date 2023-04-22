import React from 'react';
import { motion as m } from 'framer-motion';

function NewLine(props) {
  const text = props.text;
  return text
    .split('\n')
    .map((str) => <p className='py-3 text-lg leading-8'>{str}</p>);
}

export default function Model({ title, src, para1 }) {
  return (
    <m.section
      className='md:flex md:items-center md:justify-center w-full h-full min-h-0 md:flex-auto overflow-y-auto -ml-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='md:basis-[40%] flex justify-center'>
        <video
          autoPlay
          muted
          loop
          className='min-w-[184px] w-2/5 md:w-3/5 md:max-w-sm rounded-3xl'
        >
          <source src={src} type='video/mp4' />
        </video>
      </div>
      <div className='mx-auto max-w-md md:mx-0 md:basis-[50%] h-fit pt-2 md:max-w-2xl'>
        <h3 className='pb-4 mb-4 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold border-b-2 border-gray-500 pt-5 md:pt-0'>
          {title}
        </h3>
        <NewLine text={para1} />
      </div>
    </m.section>
  );
}

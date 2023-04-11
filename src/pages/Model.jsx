import React from 'react';
import { motion as m } from 'framer-motion';

export default function Model({ title, subtitle, src, para1 }) {
  return (
    <m.section
      className='flex items-center justify-center w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <div className='basis-[45%] pr-5'>
        <video autoPlay muted loop>
          <source src={src} type='video/mp4' />
        </video>
      </div>
      <div className='basis-[45%]'>
        <h3 className='pb-6 text-5xl font-serif text-right font-semibold'>
          {title}
        </h3>
        <h4 className='pb-6 text-3xl font-serif text-right font-semibold'>
          {subtitle}
        </h4>
        <p className='leading-8 text-right text-lg'>{para1}</p>
      </div>
    </m.section>
  );
}

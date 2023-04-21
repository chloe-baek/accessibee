import React from 'react';
import { motion as m } from 'framer-motion';

export default function Home() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
      className='flex justify-center items-center w-full h-full bg-[#ffbf81] dark:bg-[#046277] rounded-r-xl'
    >
      <div className='basis-[45%] pr-8'>
        <h1 className='text-6xl font-bold pb-8 text-[#f7f3e3]'>
          <div className='text-2xl text-black font-bold'>Case Study of</div>
          Web and Mobile Accessibility
        </h1>
        <p className='leading-relaxed text-xl'>
          The global <strong>internet usage</strong> rate was approximately{' '}
          <strong>59%</strong> as of January 2021. According to a report by the
          World Health Organization (WHO), about{' '}
          <strong>
            15% of the world's population has various types of disabilities
          </strong>
          . Despite this, numerous studies and reports on web and mobile
          application accessibility indicate that many users continue to face
          accessibility issues. Therefore, we aim to provide comprehensive{' '}
          <strong>design guidelines</strong> to designers and web developers
          based on web and mobile application designs that consider all users.
        </p>
      </div>
      <div className='basis-[45%]'>
        <video autoPlay muted loop>
          <source src='video/sample.mp4' type='video/mp4' />
        </video>
      </div>
    </m.section>
  );
}
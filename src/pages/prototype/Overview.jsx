import React from 'react';
import { motion as m } from 'framer-motion';

export default function Overview() {
  const paraStyle = 'text-md xl:text-lg py-4 leading-8 xl:leading-9';
  return (
    <m.section
      className='w-full h-full min-h-0 overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.25, duration: 0.5, ease: 'easeInOut' }}
    >
      <h3 className='mr-10 mt-10 ml-12 pb-4 text-center text-4xl lg:text-5xl font-serif font-semibold border-b-2 border-gray-500'>
        Overview
      </h3>
      <div className='ml-4 py-6 px-8 md:px-20'>
        <p className={paraStyle}>
          Our capstone project was an opportunity to apply all the knowledge and
          experiences we’ve gained through our program and extend beyond the
          scope of our regular studies. We took this opportunity, and decided to
          tackle an issue we felt would have a big impact on those with limited
          access in the digital space. Accessibility for mobile applications and
          websites are improving thanks to ongoing standards like the WCAG and
          system wide accessibility settings in iOS and Android. However, we
          felt these were only expressed mostly in writing, and we knew we could
          research, analyze, and materialize these solutions further through our
          creative design process.{' '}
        </p>

        <p className={paraStyle}>
          This guideline comes in the form of “Accessibee”, a fictional
          application for mobile and web that showcases the design solutions we
          were able to ideate. We hope the design solutions we present through
          Accessibee can be inspiration for future designers and developers
          looking to incorporate more accessible design into their work.{' '}
        </p>

        <p className={paraStyle}>
          As there is a wide range of visual, audio, physical, and cognitive
          accessibility issues, it was a challenge to design for all areas. In
          this case study we present to you the solutions we felt were either
          most important, under utilized in industry, or the most creative. This
          project will be further improved upon in the future once more design
          solutions and guidelines have been made.
        </p>
      </div>
    </m.section>
  );
}

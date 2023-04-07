import React from 'react';

export default function RightV({ h3, p, video }) {
  return (
    <section className='flex items-center justify-center w-full'>
      <div className='basis-[45%] pr-5'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div className='basis-[45%]'>
        <h3 className='pb-6 text-4xl font-serif text-right'>{h3}</h3>
        <p className='leading-8 text-right text-lg'>{p}</p>
      </div>
    </section>
  );
}

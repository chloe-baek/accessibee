import React from 'react';

export default function LeftV({ h3, p, video }) {
  return (
    <section className='flex items-center justify-center w-full'>
      <div className='basis-[45%]'>
        <h3 className='pb-6 text-4xl font-serif'>{h3}</h3>
        <p className='pr-5 leading-8 text-lg'>{p}</p>
      </div>
      <div className='basis-[45%]'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </section>
  );
}

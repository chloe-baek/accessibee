import React from 'react';

export default function LeftV({ h3, p, video }) {
  return (
    <section className='py-36 mx-auto w-4/5' id='left1'>
      <div className='flex'>
        <div className='basis-1/2'>
          <h3 className='pb-6 text-4xl font-serif'>{h3}</h3>
          <p className='pr-5 leading-8 text-lg'>{p}</p>
        </div>
        <div className='basis-1/2'>
          <video autoPlay muted loop>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  );
}

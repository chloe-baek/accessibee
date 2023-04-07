import React from 'react';

export default function Main() {
  return (
    <section className='flex justify-center items-center w-full'>
      <div className='basis-[45%] pr-8'>
        <h1 className='text-6xl font-semibold pb-8'>
          <div className='text-2xl pb-6'>small heading</div>
          Heading
        </h1>
        <p className='leading-relaxed text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          minima ut enim saepe iure recusandae obcaecati dolores! Maxime
          assumenda debitis at ad, deleniti ducimus illo ipsum dolore?
        </p>
      </div>
      <div className='basis-[45%]'>
        <video autoPlay muted loop>
          <source src='video/sample.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
}

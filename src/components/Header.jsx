import React from 'react';

export default function Header() {
  return (
    <header className='w-full bg-[#f0ab56] h-3/6 py-32'>
      <div className='flex mx-auto w-10/12'>
        <div className='basis-1/2'>
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
        <div className='basis-1/2 pl-6'>
          <video autoPlay muted loop>
            <source src='video/sample.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </header>
  );
}

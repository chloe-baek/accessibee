import React from 'react';

export default function LeftV() {
  return (
    <section className='py-40 mx-auto w-11/12'>
      <div className='flex'>
        <div className='basis-1/2'>
          <h2 className='pb-6 text-4xl font-serif'>Heading</h2>
          <p className='pr-5 leading-8 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
            laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
            architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
            exercitationem placeat aliquid vero minima quod vitae cumque,
            inventore iure voluptas cupiditate voluptatum incidunt ab dolor
            modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
            delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
            repudiandae consectetur nemo totam autem consequatur soluta
            obcaecati sit incidunt reiciendis aperiam, amet quibusdam
            accusantium. Quasi ab nihil eveniet asperiores qui aliquid
            architecto voluptatibus?
          </p>
        </div>
        <div className='basis-1/2'>
          <video autoPlay muted loop>
            <source src='video/sample.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  );
}

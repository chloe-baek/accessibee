import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[url('/public/img/footer.svg')] h-80 w-full bg-cover bg-no-repeat bg-bottom aspect-video relative">
      <p className='absolute h-10 w-full bottom-0 right-7 text-right'>
        &copy;Footer
      </p>
    </footer>
  );
}

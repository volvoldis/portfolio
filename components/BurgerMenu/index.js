import React from 'react';

import CloseIcon from '@/public/img/CloseIcon.svg';

const MenuItem = ({ href, title, clickHandler }) => (
  <a
    href={href}
    onClick={clickHandler}
    className='border-b border-solid border-white py-4 text-xl font-bold uppercase hover:border-primary hover:text-primary'
  >
    {title}
  </a>
);

export default function BurgerMenu({ closeHandler }) {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 bg-level1 px-5 md:hidden'>
      <button
        className='absolute top-6 right-6 flex items-center justify-between rounded-full bg-white hover:bg-primary'
        onClick={closeHandler}
      >
        <CloseIcon className='h-8 w-8' />
      </button>
      <nav className='flex h-screen w-full flex-col items-center justify-center'>
        {/* <MenuItem href='#experience' title='Experience' clickHandler={closeHandler} /> */}
        <MenuItem href='#skills' title='Skills' clickHandler={closeHandler} />
        <MenuItem href='#works' title='Works' clickHandler={closeHandler} />
      </nav>
    </div>
  );
}

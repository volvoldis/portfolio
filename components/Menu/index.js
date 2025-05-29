import React, { useState } from 'react';

import BurgerMenu from '@/components/BurgerMenu';
import BurgerIcon from '@/public/img/BurgerIcon.svg';

const MenuItem = ({ href, title }) => (
  <a href={href} className='h-full px-6 font-bold uppercase leading-[5.5rem] hover:bg-primary'>
    {title}
  </a>
);

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <nav className='hidden h-full items-center md:flex'>
        {/* <MenuItem href='#experience' title='Experience' /> */}
        <MenuItem href='#skills' title='Skills' />
        <MenuItem href='#works' title='Works' />
      </nav>
      <BurgerIcon className='h-8 w-8 cursor-pointer fill-white hover:fill-primary md:hidden' onClick={openMenu} />
      {isOpen && <BurgerMenu closeHandler={closeMenu} />}
    </>
  );
}

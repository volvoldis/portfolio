import React from 'react';

import Logo from '@/components/Logo';
import Menu from '@/components/Menu';

export default function Header() {
  return (
    <header className='absolute z-10 h-20 w-full md:h-22 lg:bg-[transparent]'>
      <div className='container mx-auto h-full'>
        <div className='flex h-full items-center justify-between'>
          <Logo />
          <Menu />
        </div>
      </div>
    </header>
  );
}

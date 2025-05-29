import React from 'react';

import LogoIcon from '@/public/img/LogoIcon.svg';

export default function Logo() {
  return (
    <div className='flex items-center'>
      <LogoIcon className='h-14 w-14 rotate-25 fill-primary' />
      {/* <p className='text-xl font-bold uppercase'>VD.Dev</p> */}
    </div>
  );
}

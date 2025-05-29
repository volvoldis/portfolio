import Image from 'next/image';
import React, { Fragment } from 'react';

import { works } from '@/common/wokrs.config';
import { Section, SectionSubTitle, SectionTitle } from '@/components/UI';
import CodeIcon from '@/public/img/CodeIcon.svg';

const Item = ({ href, codeHref, showSource = false, title, img, type, tools }) => {
  return (
    <a
      href={href}
      target='_blank'
      className='group flex flex-col justify-between overflow-hidden rounded-xl bg-level1 hover:shadow-lg hover:shadow-primary'
    >
      <Image src={`/img/works/${img}`} width={500} height={500} alt={title} className='rounded-t-lg' />
      <div className='flex flex-col gap-3 p-4'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-lg font-bold text-white group-hover:text-primary'>{title}</p>
            <p className='text-lg'>{type}</p>
          </div>
          {showSource && (
            <a href={codeHref} target='_blank' className='group rounded px-2 py-1'>
              <CodeIcon className='h-7 w-7 fill-white group-hover:fill-primary' />
            </a>
          )}
        </div>
        <div className='flex gap-2'>
          {tools.map(({ id, Icon, path }) => (
            <Fragment key={id}>
              {path ? (
                <Image src={path} alt='icon' width={28} height={28} className='h-7 w-7' />
              ) : (
                <Icon className='w-7' />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </a>
  );
};

export default function WorksSection() {
  return (
    <Section id='works'>
      <SectionSubTitle text='-- Examples --' />
      <SectionTitle text='Works' />
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {works.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}

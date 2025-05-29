import React from 'react';

export const Section = ({ id, children, ...props }) => {
  return (
    <section id={id} {...props}>
      <div className='container mx-auto py-6 md:py-14 xl:py-20'>{children}</div>
    </section>
  );
};

export const SectionSubTitle = ({ text, ...props }) => (
  <p className='pb-2 text-base font-bold uppercase text-primary' {...props}>
    {text}
  </p>
);

export const SectionTitle = ({ text, ...props }) => (
  <h2 className='pb-8 text-3xl md:text-5xl' {...props}>
    {text}
  </h2>
);

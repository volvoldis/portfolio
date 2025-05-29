// import Contacts from '@/components/Contacts';

export default function IntroSection() {
  return (
    <section className='flex h-screen flex-col md:h-fit md:flex-row md:items-stretch md:py-22 lg:h-screen lg:py-0'>
      <div className='flex-1 bg-intro bg-cover bg-center bg-no-repeat md:h-auto md:w-2/5 md:bg-contain lg:w-1/2' />

      <div className='container mx-auto pt-12 pb-20 md:w-3/5 md:py-[5.5rem] md:pl-0 md:pr-8 lg:flex lg:h-full lg:w-1/2 lg:flex-col lg:justify-center lg:bg-level1 lg:py-0 lg:px-4'>
        {/* <p className='text-center text-xl text-grey xl:max-w-3xl xl:text-3xl'>Hi, my name is</p> */}
        <h1 className='pb-6 text-center text-4xl md:text-5xl xl:max-w-3xl xl:text-8xl'>
          <span className='text-primary'>Portfolio</span>
          <br />
          <span className='text-grey'>Frontend</span> Developer
        </h1>
        {/* <Contacts /> */}
      </div>
    </section>
  );
}

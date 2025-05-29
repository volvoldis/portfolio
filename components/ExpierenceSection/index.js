import { expierence } from '@/common/expierence.config';
import { Section, SectionSubTitle, SectionTitle } from '@/components/UI';

export default function ExpierenceSection() {
  return (
    <Section id='experience'>
      <SectionSubTitle text='-- Work experience --' />
      <SectionTitle text='Experience' />

      <div className='grid w-full gap-6 md:grid-cols-3 xl:gap-x-16'>
        {expierence.map(({ id, company, companyLink, position, time }) => (
          <div key={id}>
            <h3 className='text-9xl text-grey'>{id}</h3>
            <a className={`pb-2 text-2xl font-bold text-blue hover:text-primary`} href={companyLink} target='_blank'>
              {company}
            </a>
            {'  '}
            <span className='rounded-md bg-grey px-2 text-lg'>{time}</span>
            <p className='text-text text-2xl font-bold'>{position}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

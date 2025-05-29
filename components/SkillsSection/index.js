import Image from 'next/image';

import {
  backend,
  browserApi,
  builders,
  cicd,
  client,
  frameworks,
  languages,
  libs,
  store,
  tests,
  ui,
} from '@/common/skills.config';
import { Section, SectionSubTitle, SectionTitle } from '@/components/UI';

const Item = ({ title, icons, path }) => (
  <div className='flex items-center border border-solid border-level1 p-3'>
    {path ? (
      <Image src={path} height={36} width={33} alt='icon' className='mr-3 h-9 w-auto' />
    ) : (
      <>
        {icons?.map(({ id, Icon }) => (
          <Icon key={id} className='min-w-9 mr-2 h-9 w-9' />
        ))}
      </>
    )}

    <p className='text-lg font-bold'>{title}</p>
  </div>
);

const List = ({ title, items }) => (
  <div className='mb-6 flex flex-col gap-4 last:mb-0 lg:mb-0 lg:flex-row'>
    <p className='text-base text-grey sm:text-lg md:text-xl lg:w-40 lg:pt-4 xl:w-48 xl:text-2xl'>{title}:</p>
    <div className=' grid flex-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {items.map(({ title, icons, path }) => (
        <Item key={title} title={title} icons={icons} path={path} />
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <Section id='skills'>
      <SectionSubTitle text='-- Skills --' />
      <SectionTitle text='Tech Skills' />
      <List title='Languages' items={languages} />
      <List title='Frameworks|Libs' items={frameworks} />
      <List title='UI' items={ui} />
      <List title='Store' items={store} />
      <List title='API client' items={client} />
      <List title='Builders|Runners' items={builders} />
      <List title='Browser API' items={browserApi} />
      <List title='Other libs' items={libs} />
      <List title='Tests' items={tests} />
      <List title='Backend' items={backend} />
      <List title='CI/CD' items={cicd} />
    </Section>
  );
}

// import GitHubIcon from '@/public/img/contacts/github.svg';
import LinkedInIcon from '@/public/img/contacts/linkedin.svg';

export default function Contacts() {
  return (
    <div className='flex items-center justify-center gap-4 xl:max-w-3xl'>
      {/* <a href='https://github.com/dmitriywolf' aria-label='Link to my github page' target='_blank'>
        <GitHubIcon className='w-8 fill-grey hover:fill-primary lg:w-12' />
      </a> */}
      <a
        href='https://www.linkedin.com/in/dmytro-volchenko-1a4334224/'
        aria-label='Link to my linkedin page'
        target='_blank'
      >
        <LinkedInIcon className='w-10 fill-grey hover:fill-primary lg:w-12' />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className='bg-level1'>
      <div className='container mx-auto flex items-center justify-between py-4 md:py-6'>
        <p className='w-full text-center text-grey'>&#169; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

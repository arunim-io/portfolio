import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { SiGitlab } from '@react-icons/all-files/si/SiGitlab';

const Footer = () => (
  <footer className='footer items-center border-t border-gray-800 p-5 text-neutral-content'>
    <div className='grid-flow-col items-center'>
      <a
        className='text-2xl'
        href='/'
      >
        Mugdha Arunim Ahmed
      </a>
    </div>
    <div className='grid-flow-col gap-4 text-base md:place-self-center md:justify-self-end'>
      <a href='/'>
        <FaFacebook className='h-6 w-6 fill-current' />
      </a>
      <a href='/'>
        <FaInstagram className='h-6 w-6 fill-current' />
      </a>
      <a href='/'>
        <FaTwitter className='h-6 w-6 fill-current' />
      </a>
      <a href='/'>
        <FaGithub className='h-6 w-6 fill-current' />
      </a>
      <a href='/'>
        <SiGitlab className='h-6 w-6 fill-current' />
      </a>
    </div>
  </footer>
);

export default Footer;

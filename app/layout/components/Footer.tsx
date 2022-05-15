import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { SiGitlab } from '@react-icons/all-files/si/SiGitlab';

export default function Footer() {
  return (
    <footer className='footer items-center border-t border-gray-800 p-5 text-neutral-content'>
      <div className='grid-flow-col items-center'>
        <h1 className='text-2xl'>Mugdha Arunim Ahmed</h1>
      </div>
      <div className='grid-flow-col gap-4 text-base md:place-self-center md:justify-self-end'>
        <a>
          <FaFacebook className='h-6 w-6 fill-current' />
        </a>
        <a>
          <FaInstagram className='h-6 w-6 fill-current' />
        </a>
        <a>
          <FaTwitter className='h-6 w-6 fill-current' />
        </a>
        <a>
          <FaGithub className='h-6 w-6 fill-current' />
        </a>
        <a>
          <SiGitlab className='h-6 w-6 fill-current' />
        </a>
      </div>
    </footer>
  );
}

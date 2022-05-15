import Link from 'next/link';

export default function Header() {
  return (
    <nav className='navbar sticky top-0 z-10 bg-green-400 bg-opacity-30 px-20 backdrop-blur-lg backdrop-filter'>
      <Link href='/'>
        <a className='text-xl capitalize'>Mugdha Arunim Ahmed</a>
      </Link>
      <ul className='menu menu-horizontal ml-auto p-0'>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

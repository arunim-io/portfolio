import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { BsNewspaper } from '@react-icons/all-files/bs/BsNewspaper';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { Link, NavLink } from '@remix-run/react';

export default function Sidebar() {
  const navigation = [
    {
      name: 'Home',
      link: '/',
      icon: AiOutlineHome,
    },
    {
      name: 'About Me',
      link: '/about',
      icon: FiUser,
    },
    {
      name: 'Contact Me',
      link: '/contact',
      icon: FiMail,
    },
    {
      name: 'My Blog',
      link: '/blog',
      icon: BsNewspaper,
    },
  ];

  return (
    <aside className="ml-auto flex h-full min-h-screen w-16 flex-col bg-neutral">
      <Link className="mx-auto py-8 text-center" to="/">
        <img alt="logo" className="my-2 h-auto w-6" />
        <img alt="arunim" className="w-12" />
      </Link>
      <nav className="mx-auto mt-36 flex flex-col">
        {navigation.map(({ link, icon: Icon }) => (
          <NavLink to={link} key={link} className="p-3">
            <Icon className="h-7 w-7 text-[#4d4d4e]" />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

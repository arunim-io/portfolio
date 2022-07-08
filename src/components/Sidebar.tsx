import type { IconType } from '@react-icons/all-files';
import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { BsNewspaper } from '@react-icons/all-files/bs/BsNewspaper';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import * as React from 'react';

export default function Sidebar() {
  const navigation = [
    {
      name: 'To Home',
      href: '/',
      icon: AiOutlineHome,
    },
    {
      name: 'About Me',
      href: '/about',
      icon: FiUser,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: FiMail,
    },
    {
      name: 'My Blog',
      href: '/blog',
      icon: BsNewspaper,
    },
  ] as { name: string; href: string; icon: IconType }[];

  return (
    <header className="bottom-0 block sm:absolute sm:right-0">
      <section className="navbar my-auto block h-10 bg-base-300 sm:hidden">
        <div className="my-auto flex flex-row transition-none">
          <a className="px-5" href="/">
            <img alt="logo" className="" />
          </a>
          <nav className="ml-auto mr-5 flex flex-row">
            {navigation.map(({ href, icon: Icon }, index) => (
              <a
                key={index}
                href={href}
                className="p-2.5 hover:translate-y-5 hover:rounded-full hover:bg-secondary-content hover:p-5 hover:text-secondary-focus hover:transition hover:duration-[250ms] hover:ease-in-out"
              >
                <Icon className="mx-auto h-6 w-6 md:h-8 md:w-8" />
              </a>
            ))}
          </nav>
        </div>
      </section>
      <section className="ml-auto hidden h-full min-h-screen w-20 flex-col bg-base-300 text-neutral-content sm:block md:w-24">
        <a className="mx-auto flex flex-col py-8" href="/">
          <img alt="logo" className="my-2 h-auto w-6" />
          <img alt="arunim" className="w-12" />
        </a>
        <nav className="mx-auto mt-36 flex flex-col">
          {navigation.map(({ href, icon: Icon, name }, index) => (
            <a
              key={index}
              href={href}
              className="p-2.5 text-center hover:-translate-x-5 hover:rounded-full hover:bg-secondary-content hover:p-5 hover:text-secondary-focus hover:transition hover:duration-[250ms] hover:ease-in-out"
            >
              <Icon className="mx-auto h-6 w-6 md:h-8 md:w-8" />
              <span className="text-2xs">{name}</span>
            </a>
          ))}
        </nav>
      </section>
    </header>
  );
}

import { AiOutlineHome } from '@react-icons/all-files/ai/AiOutlineHome';
import { BsNewspaper } from '@react-icons/all-files/bs/BsNewspaper';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import * as React from 'react';

export default function Sidebar() {
  const navigation = [
    {
      name: 'To Home',
      link: '/',
      icon: AiOutlineHome,
    },
    {
      name: 'About Me',
      link: '/about',
      icon: FiUser,
    },
    {
      name: 'Contact',
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
    <header>
      <section className="navbar my-auto block h-10 bg-base-300 sm:hidden">
        <div className="my-auto flex flex-row transition-none">
          <a className="px-5" href="/">
            <img alt="logo" className="" />
          </a>
          <nav className="ml-auto mr-5 flex flex-row">
            {navigation.map(({ link, icon: Icon, name }) => (
              <a
                href={link}
                key={name}
                // className={`${
                //   isActive
                //     ? 'text-primary hover:bg-primary-content hover:text-primary-focus'
                //     : 'hover:bg-secondary-content hover:text-secondary-focus'
                // } p-2.5 hover:translate-y-5 hover:rounded-full hover:p-5 hover:transition hover:duration-[250ms] hover:ease-in-out`}
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
          {navigation.map(({ link, icon: Icon, name }) => (
            <a
              href={link}
              key={name}
              // className={`${
              //   isActive
              //     ? 'text-primary hover:bg-primary-content hover:text-primary-focus'
              //     : 'hover:bg-secondary-content hover:text-secondary-focus'
              // } p-2.5 text-center hover:-translate-x-5 hover:rounded-full hover:p-5 hover:transition hover:duration-[250ms] hover:ease-in-out`}
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

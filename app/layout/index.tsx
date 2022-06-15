import type { ReactNode } from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => (
  <main className="container flex flex-col-reverse md:flex-col">
    {children}
    <Sidebar />
  </main>
);

export default Layout;

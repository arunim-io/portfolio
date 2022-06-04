import type { ReactNode } from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => (
  <main className="flex h-full w-full">
    {children}
    <Sidebar />
  </main>
);

export default Layout;

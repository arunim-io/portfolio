import type { ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;

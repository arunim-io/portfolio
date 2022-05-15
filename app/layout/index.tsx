import { ReactNode } from 'react';
import Theme from '~/config/theme';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Theme>
      <Header />
      {children}
      <Footer />
    </Theme>
  );
}

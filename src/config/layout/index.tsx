import { ReactNode } from 'react';
import Theme from '../theme';

export default function Layout({ children }: { children: ReactNode }) {
  return <Theme>{children}</Theme>;
}

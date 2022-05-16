import { Outlet } from '@remix-run/react';
import React from 'react';
import Layout from '~/layout';

export default function IndexLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

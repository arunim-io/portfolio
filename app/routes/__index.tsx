import { Outlet } from '@remix-run/react';
import Layout from '~/layout';

const IndexLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default IndexLayout;

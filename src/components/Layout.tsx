import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarApp from './Navbar';

const Layout: React.FC = () => {
  return (
    <>
      <NavbarApp />
      <Outlet />
    </>
  );
};

export default Layout;

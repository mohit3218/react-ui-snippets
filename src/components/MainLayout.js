import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <SideBar />
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

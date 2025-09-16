// defaultLayout.tsx
import Sidebar from '../components/SideBar/SideBar';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
// import { Grid } from '@mui/material';
import { useState } from 'react';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-row">
        <div className="w-[72px] fixed top-15 left-0 bottom-0 bg-blue-600">
          <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        {/* Main Content (Outlet) */}
        <div className="ml-[72px] px-8 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

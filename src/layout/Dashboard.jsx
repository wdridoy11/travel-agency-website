import React, { useState } from 'react';

import Sidebar from '../pages/dashboard/Sidebar';
// import Header from '../components/DashboardComponents/Header';
import { Outlet } from 'react-router-dom';

const Dashboard=()=> {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <h1>Sidebar</h1>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <Outlet></Outlet>

          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;
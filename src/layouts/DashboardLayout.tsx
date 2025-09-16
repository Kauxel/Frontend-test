import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

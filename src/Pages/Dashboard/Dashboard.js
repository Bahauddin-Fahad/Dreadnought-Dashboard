import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile bg-[#E9F0F8]">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-primary glass hover:bg-primary text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="text-white font-bold" to="/">
              Update Profile
            </Link>
          </li>
          <li>
            <Link className="text-white font-bold" to="/manageUsers">
              Manage Users
            </Link>
          </li>
          <li>
            <Link className="text-white font-bold" to="/manageInstructors">
              Manage Instructors
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

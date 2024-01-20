import { Outlet } from "react-router-dom";

import { Sidebar } from "../components";

export const DashboardLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[auto,1fr]">
      <Sidebar />

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}

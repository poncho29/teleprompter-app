import { Outlet } from "react-router-dom";

import { Sidebar } from "../components";

import { FaCircleUser } from "react-icons/fa6";

export const DashboardLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[auto,1fr]">
      <Sidebar />

      <main className="w-full overflow-y-auto">
        <section className="sticky top-0 w-auto h-16 flex items-center justify-end px-6 bg-slate-200">
          <div className="w-8 h-8 rounded-full cursor-pointer">
            <FaCircleUser size={32} />
          </div>
        </section>

        <section className="h-content m-6">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

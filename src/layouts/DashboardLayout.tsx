import { Outlet } from "react-router-dom";

import { AccountMenu, Sidebar } from "../components";

export const DashboardLayout = () => {
  // const matches = useMatches();

  // const crumbs = matches.map((match: UIMatch) => match.pathname);

  // const crumbs = matches.map((match: UIMatch) => match.handle && match.handle.crumb(match.data));
  // console.log(crumbs)

  return (
    <div className="h-screen grid grid-cols-[auto,1fr]">
      <Sidebar />

      <main className="w-full overflow-y-auto">
        <section className="sticky top-0 w-auto h-16 flex items-center justify-between px-6 bg-slate-200">
          {/* <ol className="w-[300px] flex gap-2">
            {crumbs.map((crumb, index) => (
              <li key={index}>{crumb}</li>
            ))}
          </ol> */}

          <AccountMenu />
        </section>

        <section className="h-content m-6">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

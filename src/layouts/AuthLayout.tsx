import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 bg-banner-auth bg-no-repeat bg-cover"></div>

      <div className="w-1/2 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl text-center mb-12 uppercase">
          <span className="text-5xl">Welcome To</span><br />My Teleprompter
        </h1>

        <Outlet />
      </div>
    </div>
  )
}

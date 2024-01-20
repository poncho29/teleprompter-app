import { NavItem } from ".."

export const Navbar = () => {
  return (
    <nav className="w-full flex flex-grow mb-4">
      <ul className="w-full">
        <NavItem to="/dashboard" text="Home" />
        <NavItem to="/dashboard/videos" text="Videos" />
        <NavItem to="/dashboard/account" text="Mi Cuenta" />
      </ul>
    </nav>
  )
}

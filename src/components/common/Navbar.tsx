import { NavItem } from "..";

interface IRoute {
  to: string;
  end?: boolean;
  text: string;
}

const routes: IRoute[] = [
  { to: '/dashboard', text: 'Home', end: true },
  { to: '/dashboard/videos', text: 'Videos' },
  { to: '/dashboard/account', text: 'Mi cuenta' },
];

export const Navbar = () => {
  return (
    <nav className="w-full flex flex-col flex-grow mb-4">
      {routes.map(({ to, end, text }) => (
        <NavItem key={to} end={end} to={to} text={text} />
      ))}
    </nav>
  )
}

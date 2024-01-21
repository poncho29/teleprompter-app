import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  end?: boolean,
  text: string;
}

export const NavItem = ({ to, end, text }: Props) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `
        w-full h-10 flex items-center px-4 mt-2 rounded-lg cursor-pointer 
        hover:bg-sky-500/50 ${isActive ? 'bg-sky-700' : ''}
      `}
    >
      <span className="block w-full text-start text-slate-200 font-medium">{text}</span>
    </NavLink>
  );
};

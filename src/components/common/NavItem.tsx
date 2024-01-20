import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

type LIProps = HTMLAttributes<HTMLLIElement>;

type CustomProps = {
  to: string;
  text: string;
}

type Props = LIProps & CustomProps;

export const NavItem = ({ to, text, ...props }: Props) => {
  const navigate = useNavigate();

  return (
    <li
      {...props}
      className="w-full h-10 flex items-center px-4 rounded-lg cursor-pointer hover:bg-sky-500/50"
      onClick={() => navigate(to)}
    >
        <span className="block w-full text-start text-slate-200 font-medium">{text}</span>
    </li>
  );
};

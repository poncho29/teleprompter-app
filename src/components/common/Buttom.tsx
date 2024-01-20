import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type CustomProps = {
  children: ReactNode;
}

type Props = ButtonProps & CustomProps;

export const Buttom = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="button-base"
    >
      {children}
    </button>
  );
};

import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type CustomProps = {
  customClass?: string;
  children: ReactNode;
}

type Props = ButtonProps & CustomProps;

export const Buttom = ({ customClass, children, ...props }: Props) => {
  return (
    <button
      {...props}
      className={`button-base ${customClass}`}
    >
      {children}
    </button>
  );
};

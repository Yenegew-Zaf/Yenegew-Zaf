import React, { ReactNode, MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children?: ReactNode;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  options?: any;
};

const Button = ({ children, className, handleClick, ...options }: Props) => {
  return (
    <button
      className={twMerge(
        `bg_primary rounded-sm  px-5 py-2.5 font-medium tracking-wide text-green-50 transition-all duration-200 hover:opacity-95 active:opacity-100`,
        className,
      )}
      onClick={handleClick}
      {...options}
    >
      {children}
    </button>
  );
};

export default Button;

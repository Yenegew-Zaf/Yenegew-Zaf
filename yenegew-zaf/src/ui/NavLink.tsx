"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
type Props = {
  href: string;
  children?: ReactNode;
  className?: string;
  activeStyle?: string;
  config?: any;
};

const NavLink = ({
  href,
  children,
  className,
  activeStyle,
  ...config
}: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={twMerge(
        `hover:text_primary font-medium tracking-wide text-white transition-all duration-200`,
        className,
        `${pathname === href && `text_primary`} `,
        activeStyle,
      )}
      {...config}
    >
      {children || "Link Placeholder"}
    </Link>
  );
};

export default NavLink;

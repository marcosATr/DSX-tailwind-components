import classNames from "classnames";
import React from "react";
import { _VARIANTTYPES } from "./vars";

interface ButtonProps {
  variant?: _VARIANTTYPES;
  version?: "solid" | "transparent";
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  children?: string;
  className?: string;
}

function Button({
  variant = "primary",
  version = "solid",
  leftIcon,
  rightIcon,
  children,
  className,
}: ButtonProps) {
  const cn = classNames(
    "px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center leading-[1.1rem]",
    version === "solid"
      ? [
          "hover:saturate-150",
          "text-white",
          `bg-${variant}`,
        ]
      : [
          "hover:brightness-90",
          `text-${variant}`,
          `bg-${variant}-light`,
        ],
    className && className
  );

  const CNtextWrapper = classNames(
    leftIcon && "ml-3",
    rightIcon && "mr-3"
  );

  return (
    <button className={cn}>
      {leftIcon}
      <span className={CNtextWrapper}>{children}</span>
      {rightIcon}
    </button>
  );
}

export default Button;

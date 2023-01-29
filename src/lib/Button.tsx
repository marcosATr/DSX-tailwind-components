import classNames from "classnames";
import React from "react";
import { _VARIANTTYPES } from "./vars";

interface ButtonProps {
  variant: _VARIANTTYPES;
  version?: "solid" | "transparent";
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconClasses?: string;
  text: string;
}

function Button({
  variant,
  version = "solid",
  leftIcon,
  rightIcon,
  iconClasses,
  text,
}: ButtonProps) {
  const cn = classNames(
    "px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center",
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
        ]
  );

  return (
    <button className={cn}>
      {leftIcon &&
        React.cloneElement(leftIcon, {
          className: iconClasses || "mr-3",
        })}
      {text}
      {rightIcon &&
        React.cloneElement(rightIcon, {
          className: iconClasses || "ml-3",
        })}
    </button>
  );
}

export default Button;

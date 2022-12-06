import React from "react";
import { _BACKGROUND, _TEXTCOLORS } from "./vars";

interface ButtonProps {
  variant: keyof typeof _BACKGROUND['solid'];
  version?: keyof typeof _BACKGROUND;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconClasses?: string;
  text: string;
}

function Button({ variant, version = 'solid', leftIcon, rightIcon, iconClasses, text }: ButtonProps) {
  return (
    <button className={`
      ${_BACKGROUND[version][variant]}
      ${version === 'solid' ? 'text-white' : _TEXTCOLORS[variant]}
      ${version === 'solid' ? 'hover:saturate-150' : 'hover:brightness-90'}
      px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center strok
      `}>
      {leftIcon && React.cloneElement(leftIcon, { className: iconClasses || 'mr-3' })}
      {text}
      {rightIcon && React.cloneElement(rightIcon, { className: iconClasses || 'ml-3' })}
    </button>
  );
}

export default Button;;
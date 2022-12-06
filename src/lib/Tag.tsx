import React from 'react';
import { _BACKGROUND, _VARIANTTYPES } from "./vars";

interface TagProps {
  text: string;
  variant?: _VARIANTTYPES;
  rounded?: boolean;
}

function Tag({ text, variant= "primary", rounded}: TagProps) {
  return (
    <div className="flex w-fit items-center font-bold">
      <div className={`h-[10px] w-[10px] mr-[6px] ${_BACKGROUND.solid[variant]} ${rounded && "rounded-full"}`}></div>
      <span className="text-sm font-semibold text-dark">{text}</span>
    </div>
  );
}

export default Tag;
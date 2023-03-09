import { twMerge } from "tailwind-merge";

export interface DividerProps {
  vertical?: boolean;
}

function Divider({ vertical }: DividerProps) {
  const CNDivider = twMerge(
    "bg-lightBorder inline-block",
    vertical ? "h-full w-[1px]" : "w-full h-[1px]"
  );
  return <div className={CNDivider}></div>;
}

export default Divider;

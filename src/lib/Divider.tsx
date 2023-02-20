import { twMerge } from "tailwind-merge";

function Divider({ vertical }: { vertical?: boolean }) {
  const CNDivider = twMerge(
    "bg-lightBorder inline-block",
    vertical ? "h-full w-[1px]" : "w-full h-[1px]"
  );
  return <div className={CNDivider}></div>;
}

export default Divider;

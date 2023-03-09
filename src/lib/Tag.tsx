import classNames from "classnames";
import { _VARIANTTYPES } from "./vars";

export interface TagProps {
  text: string;
  variant?: _VARIANTTYPES;
  rounded?: boolean;
}

function Tag({
  text,
  variant = "primary",
  rounded,
}: TagProps) {
  const cn = classNames(
    "h-[10px] w-[10px] mr-[6px]",
    rounded && "rounded-full",
    `bg-${variant}`
  );
  return (
    <div className="flex w-fit items-center font-bold">
      <div className={cn}></div>
      <span className="text-sm font-semibold text-dark">
        {text}
      </span>
    </div>
  );
}

export default Tag;

import classNames from "classnames";
import React from "react";
import { _VARIANTTYPES } from "./vars";
interface IconProps {
  className: string;
}

interface IconWithBadgeProps {
  icon: React.ReactElement;
  number?: number;
  badgeBackgroundColor?: _VARIANTTYPES;
}

function IconWithBadge({
  icon,
  number,
  badgeBackgroundColor = "primary",
}: IconWithBadgeProps) {
  const cn = classNames(
    "absolute rounded-full top-[-10px] right-[-10px] flex h-4 w-4 items-center justify-center p-1 text-[9px] text-white",
    badgeBackgroundColor && `bg-${badgeBackgroundColor}`
  );
  return (
    <div className="relative flex w-fit">
      {icon}
      <div className={cn}>{number}</div>
    </div>
  );
}

export default IconWithBadge;

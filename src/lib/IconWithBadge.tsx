import React, {
  ComponentClass,
  FunctionComponent,
} from "react";
interface IconProps {
  className: string;
}

interface IconWithBadgeProps {
  icon: React.ReactElement;
  number?: number;
  iconClasses?: string;
  badgeBackgroundColor?: "primary" | "danger" | "warning" | "success";
}

const background = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  primary: "bg-primary",
};

function IconWithBadge({
  icon,
  number,
  iconClasses,
  badgeBackgroundColor = "primary",
}: IconWithBadgeProps) {
  return (
    <div className="relative flex w-fit">
      {React.cloneElement(icon, {
        ...(iconClasses && {
          className: iconClasses,
        }),
      })}
      <div className={`absolute rounded-full ${background[badgeBackgroundColor]} text-white text-[9px] p-1 flex w-4 h-4 items-center justify-center top-[-10px] right-[-10px]`}>
        {number}
      </div>
    </div >
  );
}

export default IconWithBadge;

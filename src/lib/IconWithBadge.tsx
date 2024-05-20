// import classNames from "classnames";
// import React from "react";
// import { _VARIANTTYPES } from "./vars";
// interface IconProps {
//   className: string;
// }

// export interface IconWithBadgeProps {
//   icon: React.ReactElement;
//   number?: number;
//   variant?: _VARIANTTYPES;
//   onClick: () => void;
// }

// function IconWithBadge({
//   icon,
//   number,
//   variant = "primary",
//   onClick
// }: IconWithBadgeProps) {
//   const cn = classNames(
//     "absolute rounded-full top-[-10px] right-[-10px] flex h-4 w-4 items-center justify-center p-1 text-[9px] text-white",
//     variant && `bg-${variant}`
//   );
//   return (
//     <div
//       className="relative flex w-fit cursor-pointer"
//       onClick={onClick}
//     >
//       {icon}
//       <div className={cn}>{number}</div>
//     </div>
//   );
// }

// export default IconWithBadge;

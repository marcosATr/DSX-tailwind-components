// import React from "react";
// import { _VARIANTTYPES } from "./vars";
// import classNames from "classnames";

// export interface BadgeProps {
//   text: string | React.ReactElement;
//   variant?: _VARIANTTYPES;
//   version?: "solid" | "transparent";
// }

// export default function Badge({
//   text,
//   variant = "primary",
//   version = "solid",
// }: BadgeProps) {
//   const typeString = typeof text === "string";

//   const cn = classNames(
//     "flex w-fit rounded font-bold leading-3",
//     typeString
//       ? "px-[10px] py-[5px] text-xs"
//       : "p-[5px] text-sm",
//     version === "solid"
//       ? `bg-${variant} text-white`
//       : `bg-${variant}-light text-${variant}`
//   );
//   return <div className={cn}>{text}</div>;
// }

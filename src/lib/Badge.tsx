import React from "react";
import { _VARIANTTYPES } from "./vars";

interface BadgeProps {
  text: string | React.ReactElement;
  variant?: _VARIANTTYPES;
  version?: "solid" | "transparent";
}

const background = ({
  variant = "primary",
  version,
}: Pick<BadgeProps, "variant" | "version">) => {
  const schema = {
    success:
      version === "solid" ? "bg-success text-white" : "bg-success-light text-success",
    warning:
      version === "solid" ? "bg-warning text-white" : "bg-warning-light text-warning",
    danger: version === "solid" ? "bg-danger text-white" : "bg-danger-light text-danger",
    primary:
      version === "solid" ? "bg-primary text-white" : "bg-primary-light text-primary",
  };
  return schema[variant];
};

export default function Badge({
  text,
  variant = "primary",
  version = "solid",
}: BadgeProps) {
  const typeString = typeof text === "string";

  return (
    <div
      className={`flex w-fit rounded font-bold leading-3 ${typeString ? "px-[10px] py-[5px] text-xs" : "p-[5px] text-sm"
        } ${background({
          variant,
          version,
        })}`}
    >
      {!typeString ? React.cloneElement(text, { className: "stroke-[3]" }) : text}
    </div>
  );
}

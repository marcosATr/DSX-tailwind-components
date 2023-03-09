import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from ".";

export interface ICardProps {
  image?: string;
  title?: string;
  text?: string;
  interaction?: ReactNode;
  wrapperClasses?: string;
  variant?: "default" | "small" | "horizontal";
  clamp?: boolean;
}
export default function Card({
  image,
  title,
  text,
  interaction,
  wrapperClasses,
  variant="default",
  clamp,
}: ICardProps) {
  const properties = {
    default: "flex-col w-[356px]",
    small: "w-[271px] flex-col",
    horizontal: "h-[208px] w-[568px]",
  };
  const CNWrapper = twMerge([
    "flex rounded bg-white shadow",
    properties[variant],
    wrapperClasses,
  ]);

  const CNImageWrapper = twMerge(
    variant === "default"
      ? "rounded-t"
      : "min-w-[200px] h-[208px] rounded-l object-cover"
  );

  const CNText = twMerge([
    !!title && "mt-4",
    clamp && "line-clamp-3",
  ]);

  return (
    <div className={CNWrapper}>
      {image && (
        <div className={CNImageWrapper}>
          <img
            className={CNImageWrapper}
            src={image}
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <Typography variant="h5">{title}</Typography>
        )}
        {text && (
          <Typography className={CNText}>{text}</Typography>
        )}
        {interaction}
      </div>
    </div>
  );
}

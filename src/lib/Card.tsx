import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from ".";

interface ICardProps {
  image?: string;
  title: string;
  text: string;
  interaction?: ReactNode;
  wrapperClasses?: string;
  direction?: "vertical" | "horizontal";
}
export default function Card({
  image,
  title,
  text,
  interaction,
  wrapperClasses,
  direction = "vertical",
}: ICardProps) {
  const CNWrapper = twMerge(
    "flex rounded bg-white shadow",
    direction === "vertical"
      ? "flex-col w-[356px]"
      : "h-[208px] w-[568px]",
    wrapperClasses
  );
  const CNImageWrapper = twMerge(
    direction === "vertical"
      ? "rounded-t"
      : "min-w-[200px] h-[208px] rounded-l object-cover"
  );
  return (
    <div className={CNWrapper}>
      {image && (
        <div className={CNImageWrapper}>
          <img
            className={CNImageWrapper}
            src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          />
        </div>
      )}
      <div className="p-6">
        <Typography variant="h5">{title}</Typography>
        <Typography className="mt-4">{text}</Typography>
        {interaction}
      </div>
    </div>
  );
}

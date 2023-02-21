import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function Surface({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "outlined" | "default";
  className?: string;
}) {
  const CNSurface = twMerge(
    "w-full rounded-md",
    variant === "default"
      ? "shadow"
      : "border border-solid border-lightBorder",
    className
  );
  return <div className={CNSurface}>{children}</div>;
}

export default Surface;

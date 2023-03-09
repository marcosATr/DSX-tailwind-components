import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
export interface SurfaceProps {
  children: ReactNode;
  variant?: "outlined" | "default";
  className?: string;
}

function Surface({
  children,
  variant = "default",
  className,
}: SurfaceProps) {
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

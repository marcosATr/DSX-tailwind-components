import { twMerge } from "tailwind-merge";
import { createElement } from "react";

const variants = {
  display1:
    "font-medium text-[64px] leading-[84px] text-heading",
  display2:
    "font-medium text-[56px] leading-[78px] text-heading",
  display3:
    "font-medium text-[48px] leading-[68px] text-heading",
  display4:
    "font-medium text-[32px] leading-[46px] text-heading",
  h1: "font-semibold text-[2.375rem] leading-[3.25rem] text-heading",
  h2: "font-semibold text-[2rem] leading-[2.75rem] text-heading",
  h3: "font-semibold text-[1.625rem] leading-[2.25rem] text-heading",
  h4: "font-semibold text-[1.375rem] leading-[1.875rem] text-heading",
  h5: "font-semibold text-[1.125rem] leading-[1.5rem] text-heading",
  h6: "font-semibold text-[0.925rem] leading-[1.25rem] text-heading",
  lead: "font-normal text-[1.125rem] leading-[1.75rem] text-defaultText",
  paragraph:
    "font-normal text-[0.9375rem] leading-[1.375rem] text-defaultText",
  caption:
    "font-normal text-[0.6875rem] leading-[0.875rem] text-defaultText",
};

const components = {
  display1: "h1",
  display2: "h1",
  display3: "h2",
  display4: "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  lead: "p",
  paragraph: "p",
  caption: "span",
};

type AsTypes =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

type Variant = keyof typeof variants;
export interface TypographyProps {
  variant?: Variant;
  as?: AsTypes;
  className?: string;
  children: React.ReactNode[] | React.ReactNode;
}
function Typography({
  variant = "paragraph",
  as,
  className,
  children,
}: TypographyProps) {
  const CNtypography = twMerge(
    variants[variant],
    className
  );
  return createElement(
    as || components[variant],
    {
      className: CNtypography,
    },
    children
  );
}

export default Typography;

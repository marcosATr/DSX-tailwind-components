import React, { MouseEventHandler } from "react";
import { _VARIANTTYPES } from "./vars";
export interface ButtonProps {
    variant?: _VARIANTTYPES;
    version?: "solid" | "transparent";
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    children?: string;
    className?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
declare function Button({ variant, version, leftIcon, rightIcon, children, className, onClick, }: ButtonProps): JSX.Element;
export default Button;

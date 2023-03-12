import React from "react";
import { _VARIANTTYPES } from "./vars";
export interface BadgeProps {
    text: string | React.ReactElement;
    variant?: _VARIANTTYPES;
    version?: "solid" | "transparent";
}
export default function Badge({ text, variant, version, }: BadgeProps): JSX.Element;

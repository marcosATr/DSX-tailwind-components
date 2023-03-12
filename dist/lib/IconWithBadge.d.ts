import React from "react";
import { _VARIANTTYPES } from "./vars";
export interface IconWithBadgeProps {
    icon: React.ReactElement;
    number?: number;
    variant?: _VARIANTTYPES;
    onClick: () => void;
}
declare function IconWithBadge({ icon, number, variant, onClick }: IconWithBadgeProps): JSX.Element;
export default IconWithBadge;

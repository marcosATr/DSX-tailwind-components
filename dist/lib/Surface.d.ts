import { ReactNode } from "react";
export interface SurfaceProps {
    children: ReactNode;
    variant?: "outlined" | "default";
    className?: string;
}
declare function Surface({ children, variant, className, }: SurfaceProps): JSX.Element;
export default Surface;

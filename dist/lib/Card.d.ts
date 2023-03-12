import { ReactNode } from "react";
export interface ICardProps {
    image?: string;
    title?: string;
    text?: string;
    interaction?: ReactNode;
    wrapperClasses?: string;
    variant?: "default" | "small" | "horizontal";
    clamp?: boolean;
}
export default function Card({ image, title, text, interaction, wrapperClasses, variant, clamp, }: ICardProps): JSX.Element;

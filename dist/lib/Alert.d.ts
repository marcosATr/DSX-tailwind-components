import { _VARIANTTYPES } from "./vars";
export interface AlertProps {
    title?: string;
    text: string;
    variant?: _VARIANTTYPES;
    icon?: React.ReactElement;
}
declare function Alert({ title, text, icon, variant, }: AlertProps): JSX.Element;
export default Alert;

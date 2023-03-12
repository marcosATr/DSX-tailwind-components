import { _VARIANTTYPES } from "./vars";
type Options = {
    id: number | string;
    handleClick: () => void;
    value: string;
}[];
export interface IDropdownProps extends IMenuProps {
    text: string;
    outlined?: boolean;
    className?: string;
}
export interface IMenuProps {
    options: Options;
    variant?: _VARIANTTYPES;
}
declare function Dropdown({ text, options, variant, outlined, className, }: IDropdownProps): JSX.Element;
export default Dropdown;

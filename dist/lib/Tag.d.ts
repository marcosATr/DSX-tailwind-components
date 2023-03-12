import { _VARIANTTYPES } from "./vars";
export interface TagProps {
    text: string;
    variant?: _VARIANTTYPES;
    rounded?: boolean;
}
declare function Tag({ text, variant, rounded, }: TagProps): JSX.Element;
export default Tag;

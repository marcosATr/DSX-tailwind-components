import { ReactElement, ReactNode } from "react";
export interface IMainMenuProps {
    groups: Group[];
    logoComponent?: ReactNode;
}
type Group = {
    name?: string;
    items: Item[];
};
type Item = {
    label: string;
    icon?: ReactElement;
    counter?: number;
    onClick: () => void;
    active?: boolean;
};
declare function Menu({ groups, logoComponent }: IMainMenuProps): JSX.Element;
export default Menu;

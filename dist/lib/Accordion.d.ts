interface AccordionItem {
    labelIcon?: React.ReactNode;
    label: string;
    id: string;
    component: React.ReactNode;
}
type AccordionState = {
    [T: string]: boolean;
};
type Mode = "single" | "multiple";
export interface AccordionWrapperProps {
    items: AccordionItem[];
    highlight?: boolean;
    className?: string;
    mode?: Mode;
    initialState?: AccordionState;
}
export interface AccordionProps {
    labelIcon?: React.ReactNode;
    label: string;
    accordionState: AccordionState;
    id: string;
    component: React.ReactNode;
    highlight?: boolean;
    handleOpenClose: () => void;
    mode: Mode;
}
declare function Accordion({ labelIcon, label, accordionState, id, component, highlight, handleOpenClose, mode, }: AccordionProps): JSX.Element;
declare function AccordionWrapper({ className, mode, highlight, items, initialState, }: AccordionWrapperProps): JSX.Element;
export { Accordion, AccordionWrapper };

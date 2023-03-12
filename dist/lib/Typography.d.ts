declare const variants: {
    display1: string;
    display2: string;
    display3: string;
    display4: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    lead: string;
    paragraph: string;
    caption: string;
};
type AsTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Variant = keyof typeof variants;
export interface TypographyProps {
    variant?: Variant;
    as?: AsTypes;
    className?: string;
    children: React.ReactNode[] | React.ReactNode;
}
declare function Typography({ variant, as, className, children, }: TypographyProps): import("react").ReactElement<{
    className: string;
}, string | import("react").JSXElementConstructor<any>>;
export default Typography;

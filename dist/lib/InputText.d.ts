export interface InputTextProps {
    placeholder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    label?: string;
}
declare function InputText({ label, ...props }: InputTextProps): JSX.Element;
export default InputText;

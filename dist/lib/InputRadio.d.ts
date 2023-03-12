export interface InputRadioProps {
    id: string;
    label: string;
    selected: string | undefined;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare function InputRadio({ id, label, selected, disabled, onChange, }: InputRadioProps): JSX.Element;
export default InputRadio;

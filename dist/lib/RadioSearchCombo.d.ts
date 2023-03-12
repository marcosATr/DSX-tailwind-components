export interface RadioSearchComboProps {
    placeholder?: string;
    options: {
        id: string;
        label: string;
    }[];
    selected: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    emptyResultText: string;
}
declare function RadioSearchCombo({ placeholder, options, selected, onChange, emptyResultText, }: RadioSearchComboProps): JSX.Element;
export default RadioSearchCombo;

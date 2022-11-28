interface InputRadioProps {
  id: string;
  label: string;
  selected: string | undefined;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputRadio({ id, label, selected, disabled, onChange }: InputRadioProps) {
  return (
    <div className="flex items-center">
      <input type="radio" id={id} value={id} onChange={onChange} checked={selected === id} disabled={disabled} className="flex items-center justify-center mr-2 h-4 w-4 focus-visible:border-0 appearance-none rounded-full border border-lightBorder relative checked:before:content-[''] before:block before:w-2 before:h-2 checked:before:bg-primary before:rounded-full disabled:bg-gray" />
      <label htmlFor={id} className="text-sm text-defaultText">{label}</label>
    </div>
  );
}

export default InputRadio;
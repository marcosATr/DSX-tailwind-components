interface InputRadioProps {
  id: string;
  label: string;
  selected: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputRadio({ id, label, selected, onChange }: InputRadioProps) {
  return (
    <div className="flex items-center">
      <input type="radio" id={id} value={id} onChange={onChange} checked={selected === id} className="flex items-center justify-center mr-2 h-4 w-4 focus-visible:border-0 appearance-none rounded-full border border-lightBorder relative checked:before:content-[''] before:block before:w-2 before:h-2 checked:before:bg-primary before:rounded-full" />
      <label htmlFor={id} className="text-sm text-defaultText">{label}</label>
    </div>
  );
}

export default InputRadio;
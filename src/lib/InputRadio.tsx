interface InputRadioProps {
  id: string;
  label: string;
  selected: string | undefined;
  disabled?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function InputRadio({
  id,
  label,
  selected,
  disabled,
  onChange,
}: InputRadioProps) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        id={id}
        value={id}
        onChange={onChange}
        checked={selected === id}
        disabled={disabled}
        className="relative mr-2 flex h-4 w-4 appearance-none items-center justify-center rounded-full border border-lightBorder before:block before:h-2 before:w-2 before:rounded-full checked:before:bg-primary checked:before:content-[''] focus-visible:border-0 disabled:bg-gray"
      />
      <label
        htmlFor={id}
        className="text-sm text-defaultText"
      >
        {label}
      </label>
    </div>
  );
}

export default InputRadio;

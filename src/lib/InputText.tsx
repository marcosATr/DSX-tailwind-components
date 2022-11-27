interface InputTextProps {
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
function InputText({ placeholder = '', disabled }: InputTextProps) {
  return (
    <input disabled={disabled} type="text" placeholder={placeholder} className="border border-lightBorder focus:border-primary focus:border focus-visible:border-0 min-w-[200px] w-full h-8 px-3 py-2 placeholder:text-lightText text-defaultText rounded font-normal text-sm leading-6 disabled:bg-gray" />
  );
}

export default InputText;
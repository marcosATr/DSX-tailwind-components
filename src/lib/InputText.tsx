import React from "react";

interface InputTextProps {
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
}

function Input(props: InputTextProps) {
  return <input {...props} type="text" className="border border-lightBorder focus:border-primary focus:border focus-visible:border-0 min-w-[200px] w-full h-8 px-3 py-2 placeholder:text-lightText text-defaultText rounded font-normal text-sm leading-6 disabled:bg-gray" />;
};

function InputText({ label, ...props }: InputTextProps) {
  if (label)
    return (
      <label className="text-[13px] text-dark"><span className="mb-1 flex">{label}</span>
        <Input {...props} />
      </label>
    );

  return <Input {...props} />;
}

export default InputText;
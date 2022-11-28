import { useState } from "react";
import InputText from "./InputText";

interface RadioSearchComboProps {
  placeholder?: string;
}

function RadioSearchCombo({
  placeholder= '',
}: RadioSearchComboProps) {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="">
      <InputText placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

export default RadioSearchCombo;
import { InputText } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;



export const TextInputWithoutPlaceholder: ComponentStory<typeof InputText> = () => (
  <InputText />
);

export const TextInputWithLabel: ComponentStory<typeof InputText> = () => (
  <InputText label="Full name"/>
);



export const TextInputWithPlaceholder: ComponentStory<typeof InputText> = () => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <InputText placeholder="Input Text" value={value} onChange={onChange} />;
}
  ;

export const TextInputDisabled: ComponentStory<typeof InputText> = () => (
  <InputText placeholder="Input Text" disabled />
);

import { RadioSearchCombo } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

const options = [
  {
    id: '1',
    label: 'first option',
  },
  {
    id: '2',
    label: 'second option',
  },
  {
    id: '3',
    label: 'third option',
  },
  {
    id: '4',
    label: 'fourth option',
  }
];

export default {
  title: "RadioSearchCombo",
  component: RadioSearchCombo,
} as ComponentMeta<typeof RadioSearchCombo>;


export const FilterAndSelect: ComponentStory<typeof RadioSearchCombo> = () => {
  const [value, setValue] = useState('');
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <RadioSearchCombo options={options} placeholder='Filter classes' selected={value} onChange={onChangeValue} emptyResultText='No results found' />;
};

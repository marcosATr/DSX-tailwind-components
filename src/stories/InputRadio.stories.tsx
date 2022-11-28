import { InputRadio } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "InputRadio",
  component: InputRadio,
} as ComponentMeta<typeof InputRadio>;

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


export const TextInputWithoutPlaceholder: ComponentStory<typeof InputRadio> = () => {
  const [value, setValue] = useState<string>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputRadio id="121223123--123123123-123123123" label="first input" onChange={onChange} selected={value} />;
};

export const DisabledRadioInput: ComponentStory<typeof InputRadio> = () => {
  const [value, setValue] = useState<string>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputRadio id="232--111-211" label="first input" onChange={onChange} selected={value} disabled />;
};

export const DisabledCheckedRadioInput: ComponentStory<typeof InputRadio> = () => {
  const [value, setValue] = useState<string>("232--111-211");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <InputRadio id="232--111-211" label="first input" onChange={onChange} selected={value} disabled />;
};


export const MultipleRadioInputs: ComponentStory<typeof InputRadio> = () => {
  const [value, setValue] = useState<string>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col">
      {
        options.map(option => {
          return (
            <InputRadio id={option.id} label={option.label} selected={value} onChange={onChange} key={option.id} />
          );
        })
      }
    </div>
  );
};
MultipleRadioInputs.parameters = {
  docs: {
    description: {
      story: "Create and options array and map it into multiple inputs. Customize it to your needs or use RadioGroup component."
    }
  }
};
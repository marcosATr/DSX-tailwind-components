import { InputText } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

export const TextInputWithoutPlaceholder: ComponentStory<typeof InputText> = () => (
  <InputText />
);


export const TextInputWithPlaceholder: ComponentStory<typeof InputText> = () => (
  <InputText placeholder="Input Text" />
);

export const TextInputDisabled: ComponentStory<typeof InputText> = () => (
  <InputText placeholder="Input Text" disabled />
);

import { Dropdown } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const DefaultDropdown: ComponentStory<
  typeof Dropdown
> = () => (
  <Dropdown text="Primary" />
);
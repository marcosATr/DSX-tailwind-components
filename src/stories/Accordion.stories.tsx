import { Accordion } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

export default {
  title: "Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const DefaultAccordionPrimary: ComponentStory<typeof Accordion> = () => (
  <Accordion />
);

import { Surface } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

export default {
  title: "Surface",
  component: Surface,
} as ComponentMeta<typeof Surface>;

export const DefaultSurface: ComponentStory<
  typeof Surface
> = () => (
  <Surface className="p-4">Default surface</Surface>
);

export const OutlinedSurface: ComponentStory<
  typeof Surface
> = () => (
  <Surface
    variant="outlined"
    className="p-4"
  >
    Outlined version
  </Surface>
);

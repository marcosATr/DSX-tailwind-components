import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Typography, Divider } from "../lib";

export default {
  title: "Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          "Use the vertical prop to change the <Divider /> orientation.",
      },
    },
  },
} as ComponentMeta<typeof Divider>;

export const DefaultDivider: ComponentStory<
  typeof Divider
> = () => {
  return (
    <div className="flex flex-col gap-1">
      <Typography>first line</Typography>
      <Divider />
      <Typography>second line</Typography>
    </div>
  );
};

export const VerticalDivider: ComponentStory<
  typeof Divider
> = () => {
  return (
    <div className="flex h-7 w-full items-center gap-1">
      <Typography as="span">first line</Typography>
      <Divider vertical />
      <Typography as="span">also first line</Typography>
    </div>
  );
};

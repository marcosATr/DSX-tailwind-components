// Alert.stories.js|jsx
import { Badge } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Plus } from "phosphor-react";

export default {
  title: "Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Primary: ComponentStory<typeof Badge> = () => (
  <Badge text="Primary" />
);

export const PrimaryTransparent: ComponentStory<
  typeof Badge
> = () => (
  <Badge
    text="Lighter"
    version="transparent"
  />
);

export const Success: ComponentStory<typeof Badge> = () => (
  <Badge
    text="Success"
    variant="success"
  />
);

export const Danger: ComponentStory<typeof Badge> = () => (
  <Badge
    text="Danger variant"
    variant="danger"
  />
);

export const Danger_Transparent: ComponentStory<
  typeof Badge
> = () => (
  <Badge
    text="Another Danger"
    variant="danger"
    version="transparent"
  />
);

export const Warning: ComponentStory<typeof Badge> = () => (
  <Badge
    text="Badge"
    variant="warning"
  />
);

export const SingleText: ComponentStory<
  typeof Badge
> = () => (
  <Badge
    text="1"
    variant="warning"
  />
);

export const ReceivingIconAsProp: ComponentStory<
  typeof Badge
> = () => (
  <Badge
    text={
      <Plus
        size={14}
        weight="bold"
      />
    }
    variant="success"
  />
);

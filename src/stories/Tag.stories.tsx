import { Tag } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const DefaultTagPrimary: ComponentStory<typeof Tag> = () => (
  <Tag
    text="Success"
  />
);

export const DangerTag: ComponentStory<typeof Tag> = () => (
  <Tag text="Danger" variant="danger" />
);

export const WarningTagRounded: ComponentStory<typeof Tag> = () => (
  <Tag text="Warning" variant="warning" rounded />
);

export const SuccessTag: ComponentStory<typeof Tag> = () => (
  <Tag text="Success" variant="success" />
);

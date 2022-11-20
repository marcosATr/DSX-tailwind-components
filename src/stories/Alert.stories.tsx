// Alert.stories.js|jsx
import React, { useState } from "react";
import { Alert } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = () => (
  <Alert text="This is the primary alert variant" />
);

export const Success: ComponentStory<typeof Alert> = () => (
  <Alert text="This is the success alert variant" variant="success" />
);

export const Danger: ComponentStory<typeof Alert> = () => (
  <Alert text="This is the danger alert variant" variant="danger" />
);

export const Warning: ComponentStory<typeof Alert> = () => (
  <Alert text="This is the warning alert variant" variant="warning" />
);

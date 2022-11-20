// Typography.stories.js|jsx
import React, { useState } from "react";
import { Typography } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Primary: ComponentStory<typeof Typography> = () => (
  <Typography>Typography</Typography>
);

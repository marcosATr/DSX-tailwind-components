// Alert.stories.js|jsx
import { Button } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Clipboard, PhoneCall } from "phosphor-react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const PrimaryButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    text="Primary"
  />
);

export const SuccessButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="success"
    text="Success"
  />
);

export const DangerButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="danger"
    text="Danger"
  />
);

export const WarningButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="warning"
    text="Warning"
  />
);

export const PrimaryTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
    text="Primary"
  />
);

export const SuccessTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="success"
    version="transparent"
    text="Success"
  />
);

export const DangerTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="danger"
    version="transparent"
    text="Danger"
  />
);

export const WarningTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="warning"
    version="transparent"
    text="Warning"
  />
);

export const WithLeftIcon: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
    text="Support"
    leftIcon={<Clipboard />}
  />
);

export const WithRightIcon: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
    text="Support"
    rightIcon={<PhoneCall size={20} />}
  />
);

WithRightIcon.parameters = {
  docs: {
    description: {
      story:
        "Icon is not big enough? You can still customize it through phosphor icon props",
    },
  },
};

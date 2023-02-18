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
> = () => <Button variant="primary">Primary</Button>;

export const SuccessButton: ComponentStory<
  typeof Button
> = () => <Button variant="success">Success</Button>;

export const DangerButton: ComponentStory<
  typeof Button
> = () => <Button variant="danger">danger</Button>;

export const WarningButton: ComponentStory<
  typeof Button
> = () => <Button variant="warning">warning</Button>;

export const PrimaryTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
  >
    primary
  </Button>
);

export const SuccessTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="success"
    version="transparent"
  >
    Success
  </Button>
);

export const DangerTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="danger"
    version="transparent"
  >
    Danger
  </Button>
);

export const WarningTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="warning"
    version="transparent"
  >
    Warning
  </Button>
);

export const WithLeftIcon: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
    leftIcon={<Clipboard />}
  >
    with Icon
  </Button>
);

export const WithRightIcon: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
    rightIcon={<PhoneCall size={20} />}
  >
    Right Icon
  </Button>
);

WithRightIcon.parameters = {
  docs: {
    description: {
      story:
        "Icon is not big enough? You can still customize it through phosphor icon props",
    },
  },
};


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
    onClick={() => console.log("clicked")}
  >
    Primary
  </Button>
);

export const SuccessButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="success"
    onClick={() => console.log("clicked")}
  >
    Success
  </Button>
);

export const DangerButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="danger"
    onClick={() => console.log("clicked")}
  >
    danger
  </Button>
);

export const WarningButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="warning"
    onClick={() => console.log("clicked")}
  >
    warning
  </Button>
);

export const PrimaryTransparentButton: ComponentStory<
  typeof Button
> = () => (
  <Button
    variant="primary"
    version="transparent"
    onClick={() => console.log("clicked")}
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
    onClick={() => console.log("clicked")}
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
    onClick={() => console.log("clicked")}
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
    onClick={() => console.log("clicked")}
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
    onClick={() => console.log("clicked")}
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
    onClick={() => console.log("clicked")}
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

// Alert.stories.js|jsx
import { Button } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RiCustomerServiceFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const PrimaryButton: ComponentStory<typeof Button> = () => <Button variant="primary" text="Primary" />;

export const SuccessButton: ComponentStory<typeof Button> = () => <Button variant="success" text="Success" />;

export const DangerButton: ComponentStory<typeof Button> = () => <Button variant="danger" text="Danger" />;

export const WarningButton: ComponentStory<typeof Button> = () => <Button variant="warning" text="Warning" />;

export const PrimaryTransparentButton: ComponentStory<typeof Button> = () => <Button variant="primary" version="transparent" text="Primary" />;

export const SuccessTransparentButton: ComponentStory<typeof Button> = () => <Button variant="success" version="transparent" text="Success" />;

export const DangerTransparentButton: ComponentStory<typeof Button> = () => <Button variant="danger" version="transparent" text="Danger" />;

export const WarningTransparentButton: ComponentStory<typeof Button> = () => <Button variant="warning" version="transparent" text="Warning" />;

export const WithLeftIcon: ComponentStory<typeof Button> = () => <Button variant="primary" version="transparent" text="Support" leftIcon={<RiCustomerServiceFill />} />;

export const WithRightIcon: ComponentStory<typeof Button> = () => <Button variant="primary" version="transparent" text="Support" rightIcon={<RiCustomerServiceFill />} />;

export const WithCustomIconClasses: ComponentStory<typeof Button> = () => <Button variant="primary" version="transparent" text="Support" rightIcon={<HiArrowRight />} iconClasses='ml-4 text-lg stroke-1' />;
WithCustomIconClasses.parameters = {
  docs: {
    description: {
      story: "Sometimes we just want more customization over the icon size, color, stroke or padding. If you don't want to use the default settings, overide them with iconClasses. Just remember to manually set the margins."
    }
  }
};
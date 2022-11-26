import { IconWithBadge } from "../lib";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FiAlertTriangle, FiCalendar, FiFolder, FiPhoneOutgoing, FiTwitter } from "react-icons/fi";

export default {
  title: "IconWithBadge",
  component: IconWithBadge,
} as ComponentMeta<typeof IconWithBadge>;

export const WithCustomIconClasses: ComponentStory<typeof IconWithBadge> = () => (
  <IconWithBadge
    icon={<FiTwitter />}
    number={31}
    iconClasses="stroke-2 text-primary text-xl"
  />
);

export const DefaultSizeWithBadgeColor: ComponentStory<typeof IconWithBadge> = () => (
  <IconWithBadge icon={<FiCalendar />} number={4} badgeBackgroundColor="danger"/>
);

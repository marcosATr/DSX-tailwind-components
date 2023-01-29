import { IconWithBadge } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { TwitterLogo, TwitchLogo } from "phosphor-react";

export default {
  title: "IconWithBadge",
  component: IconWithBadge,
} as ComponentMeta<typeof IconWithBadge>;

export const WithCustomIconClasses: ComponentStory<
  typeof IconWithBadge
> = () => (
  <IconWithBadge
    icon={<TwitchLogo size={22} />}
    number={31}
  />
);
WithCustomIconClasses.storyName = "Twitch logo";

export const DefaultSizeWithBadgeColor: ComponentStory<
  typeof IconWithBadge
> = () => (
  <IconWithBadge
    icon={<TwitterLogo size={22} />}
    number={4}
    badgeBackgroundColor="danger"
  />
);
DefaultSizeWithBadgeColor.storyName =
  "Twitter logo with danger background";

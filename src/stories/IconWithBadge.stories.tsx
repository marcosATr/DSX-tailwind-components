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

function onClick() {
  console.log("clicked");
}

export const WithCustomIconClasses: ComponentStory<
  typeof IconWithBadge
> = () => (
  <IconWithBadge
    icon={<TwitchLogo size={22} />}
    number={31}
    onClick={onClick}
  />
);
WithCustomIconClasses.storyName = "Twitch logo";

export const DefaultSizeWithBadgeColor: ComponentStory<
  typeof IconWithBadge
> = () => (
  <IconWithBadge
    icon={<TwitterLogo size={22} />}
    number={4}
    variant="danger"
    onClick={onClick}
  />
);
DefaultSizeWithBadgeColor.storyName =
  "Twitter logo with danger background";

import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Button, Card } from "../lib";

export default {
  title: "Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "The <Card /> is vertical by default, but you can change this with the direction prop. Use the clamp prop to determine is ellipisis should be added to the text prop.\n\nInteraction Prop: Pass a component to be displayed at the bottom of the card, useful when you need to add icons, buttons and links.\n\nThe wrapperClasses prop can be used to overide shadow, width, height and other attributes.",
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const DefaultCardWithClampProp: ComponentStory<
  typeof Card
> = () => {
  return (
    <Card
      title="Hello from title"
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."
      interaction={
        <Button className="mt-4">Read more</Button>
      }
      clamp
      image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    />
  );
};

export const HorizontalCard: ComponentStory<
  typeof Card
> = () => {
  return (
    <Card
      variant="horizontal"
      title="Hello from title"
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."
      clamp
      interaction={
        <Button className="mt-4 ml-auto">Read more</Button>
      }
      image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    />
  );
};

export const SmallNoInteraction: ComponentStory<
  typeof Card
> = () => {
  return (
    <Card
      title="Hello from title"
      variant="small"
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."
    />
  );
};

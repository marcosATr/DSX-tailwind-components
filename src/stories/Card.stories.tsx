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
          "Use the <Accordion /> component to display a single accordion. Optionally use the AccordionWrapper component to style and wrap the accordtion items.\n\nComponent Prop: Pass a component to be displayed when the accordion is open.\n\nState Management and the id prop: for",
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const DefaultCard: ComponentStory<
  typeof Card
> = () => {
  return (
    <Card
      title="Hello from title"
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."
      interaction={
        <Button className="mt-4">Read more</Button>
      }
      image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    />
  );
};

export const HorizontalCard: ComponentStory<
  typeof Card
> = () => {
  return (
    <Card
      direction="horizontal"
      title="Hello from title"
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."
      interaction={
        <Button className="mt-4">Read more</Button>
      }
      image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
    />
  );
};

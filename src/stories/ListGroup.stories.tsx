import { ListGroup } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

export default {
  title: "ListGroup",
  component: ListGroup,
} as ComponentMeta<typeof ListGroup>;

export const DefaultListGroup: ComponentStory<
  typeof ListGroup
> = () => {
  const items = [
    {
      id: 1,
      value: "Option 1",
      onClick: () => console.log("1"),
    },
    {
      id: 2,
      value: "Option 2",
      onClick: () => console.log("2"),
    },
    {
      id: 3,
      value: "Option 3",
      onClick: () => console.log("3"),
    },
    {
      id: 4,
      value: "Option 4",
      onClick: () => console.log("4"),
    },
  ];

  return (
    <>
      <div className="mt-4">
        <ListGroup
          items={items}
          active={2}
        />
      </div>
    </>
  );
};

import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Anchor, Article, Bell } from "phosphor-react";
import { Accordion, AccordionWrapper } from "../lib";

export default {
  title: "Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "Use the <Accordion /> component to display a single accordion. Optionally use the AccordionWrapper component to style and wrap the accordtion items.\n\nComponent Prop: Pass a component to be displayed when the accordion is open.\n\nState Management and the id prop: for",
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

const items = [
  {
    label: "item 1",
    id: "1",
    component: (
      <p className="text-[14px] font-normal text-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor.
      </p>
    ),
  },
  {
    label: "item 2",
    id: "2",
    component: (
      <p className="text-[14px] font-normal text-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor.
      </p>
    ),
  },
  {
    label: "item 3",
    id: "3",
    component: (
      <p className="text-[14px] font-normal text-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor.
      </p>
    ),
  },
];
const items2 = [
  {
    labelIcon: <Bell size={20} />,
    label: "item 1",
    id: "1",
    component: (
      <p className="text-[14px] font-normal text-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor.
      </p>
    ),
  },
  {
    labelIcon: <Article size={20} />,
    label: "item 2",
    id: "2",
    component: (
      <p className="text-[14px] font-normal text-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor.
      </p>
    ),
  },
  {
    labelIcon: <Anchor size={20} />,
    label: "item 3",
    id: "3",
    component: (
      <p className="text-[14px] font-normal text-heading">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor.
      </p>
    ),
  },
];

export const DefaultAccordionPrimary: ComponentStory<
  typeof Accordion
> = () => {
  return (
    <AccordionWrapper
      className="w-8/12"
      items={items}
    />
  );
};

export const SingleModeWithHighlightedContent: ComponentStory<
  typeof Accordion
> = () => {
  return (
    <AccordionWrapper
      className="w-8/12"
      items={items}
      highlight
      mode="single"
    />
  );
};

SingleModeWithHighlightedContent.parameters = {
  docs: {
    description: {
      story:
        "Use the highlight prop to highlight the open accordion. Use the mode prop to customize the behavior. If set to single, only one Accordion Item can be open at a time. If set to multiple, you can open all the accordions at once.",
    },
  },
};

export const With_icons: ComponentStory<
  typeof Accordion
> = () => {
  return (
    <AccordionWrapper
      className="w-8/12"
      items={items2}
      highlight
      mode="single"
    />
  );
};

With_icons.parameters = {
  docs: {
    description: {
      story:
        "Use the label icon prop to customize icon displayed at the handle.",
    },
  },
};

export const Inital_state: ComponentStory<
  typeof Accordion
> = () => {
  return (
    <AccordionWrapper
      className="w-8/12"
      items={items2}
      highlight
      mode="single"
      initialState={{ 2: true }}
    />
  );
};

Inital_state.parameters = {
  docs: {
    description: {
      story:
        "Use initial state to define which items start with open set to true. Ex: `initialState={{ 2: true }}`. 2 is the id provided to the second accordtion in the Items array.",
    },
  },
};

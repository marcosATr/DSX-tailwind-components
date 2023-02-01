import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Anchor, Article, Bell } from "phosphor-react";
import { useState } from "react";
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

export const DefaultAccordionPrimary: ComponentStory<
  typeof Accordion
> = () => {
  const [accordionState, setAccordionState] = useState<{
    [T: string]: boolean;
  }>({});
  return (
    <AccordionWrapper className="w-8/12">
      <Accordion
        label="Exemplo de Accordion"
        accordionState={accordionState}
        id="1"
        setAccordionState={setAccordionState}
        component={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <p>
              In reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </>
        }
      />

      <Accordion
        label="Exemplo de Accordion"
        accordionState={accordionState}
        id="2"
        setAccordionState={setAccordionState}
        component={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <p>
              In reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </>
        }
      />

      <Accordion
        label="Exemplo de Accordion"
        accordionState={accordionState}
        id="3"
        setAccordionState={setAccordionState}
        component={
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
            <p>
              In reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </>
        }
      />
    </AccordionWrapper>
  );
};


export const DefaultAccordionPrimary2: ComponentStory<
  typeof Accordion
> = () => {
  const [accordionState, setAccordionState] = useState<{
    [T: string]: boolean;
  }>({});
  return (
    <AccordionWrapper className="w-8/12">
      <Accordion
        label="Exemplo de Accordion"
        accordionState={accordionState}
        id="1"
        setAccordionState={setAccordionState}
        highlight
        labelIcon={<Article size={20} />}
        component={
          <>
            <p className="text-[14px] font-normal text-heading">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
          </>
        }
      />

      <Accordion
        label="Exemplo de Accordion"
        accordionState={accordionState}
        id="2"
        highlight
        labelIcon={<Anchor size={20} />}
        setAccordionState={setAccordionState}
        component={
          <>
            <p className="text-[14px] font-normal text-heading">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
          </>
        }
      />

      <Accordion
        label="Exemplo de Accordion"
        accordionState={accordionState}
        id="3"
        highlight
        labelIcon={<Bell size={20} />}
        setAccordionState={setAccordionState}
        component={
          <>
            <p className="text-[14px] font-normal text-heading">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure
              dolor.
            </p>
          </>
        }
      />
    </AccordionWrapper>
  );
};

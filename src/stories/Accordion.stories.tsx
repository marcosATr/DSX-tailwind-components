import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { useState } from "react";
import { Accordion, AccordionWrapper } from "../lib";

export default {
  title: "Accordion",
  component: Accordion,
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
        open={accordionState["1"]}
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
        open={accordionState["2"]}
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
        open={accordionState["3"]}
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
DefaultAccordionPrimary.parameters = {
  docs: {
    description: {
      component:
        'The accordion itself can be wrapped around the helper component "AccordionWrapper", which accepts a complete classname overide for customization.',
    },
  },
};

// export const DefaultAccordionPrimary2: ComponentStory<
//   typeof Accordion
// > = () => (
//   <AccordionWrapper className="w-96">
//     <Accordion
//       label="Exemplo de Accordion"
//       open={true}
//     />
//   </AccordionWrapper>
// );

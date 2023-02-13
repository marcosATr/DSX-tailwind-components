import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { Typography } from "../lib";

export default {
  title: "Typography",
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          "Use the <Accordion /> component to display a single accordion. Optionally use the AccordionWrapper component to style and wrap the accordtion items.\n\nComponent Prop: Pass a component to be displayed when the accordion is open.\n\nState Management and the id prop: for",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

export const DefaultTypography: ComponentStory<
  typeof Typography
> = () => {
  return <Typography>Writing is awesome.</Typography>;
};

export const Display1: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="display1">
      Writing is awesome.
    </Typography>
  );
};

export const Display2: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="display2">
      Writing is awesome.
    </Typography>
  );
};

export const Display3: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="display3">
      Writing is awesome.
    </Typography>
  );
};

export const Display4: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="display4">
      Writing is awesome.
    </Typography>
  );
};

export const H1: ComponentStory<typeof Typography> = () => {
  return (
    <Typography variant="h1">
      Writing is awesome.
    </Typography>
  );
};

export const H2: ComponentStory<typeof Typography> = () => {
  return (
    <Typography variant="h2">
      Writing is awesome.
    </Typography>
  );
};

export const H3: ComponentStory<typeof Typography> = () => {
  return (
    <Typography variant="h3">
      Writing is awesome.
    </Typography>
  );
};
export const H4: ComponentStory<typeof Typography> = () => {
  return (
    <Typography variant="h4">
      Writing is awesome.
    </Typography>
  );
};
export const H5: ComponentStory<typeof Typography> = () => {
  return (
    <Typography variant="h5">
      Writing is awesome.
    </Typography>
  );
};
export const H6: ComponentStory<typeof Typography> = () => {
  return (
    <Typography variant="h6">
      Writing is awesome.
    </Typography>
  );
};
export const Lead: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="lead">
      Writing is awesome.
    </Typography>
  );
};

export const Paragraph: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="paragraph">
      Writing is awesome.
    </Typography>
  );
};

export const Caption: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography variant="caption">
      Writing is awesome.
    </Typography>
  );
};

export const asProp: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography
      variant="h1"
      as="p"
    >
      Writing is awesome.
    </Typography>
  );
};

export const WithCustomClasses: ComponentStory<
  typeof Typography
> = () => {
  return (
    <Typography
      variant="h5"
      className="uppercase font-light text-success"
    >
      Writing is awesome.
    </Typography>
  );
};

// SingleModeWithHighlightedContent.parameters = {
//   docs: {
//     description: {
//       story:
//         "Use the highlight prop to highlight the open accordion. Use the mode prop to customize the behavior. If set to single, only one Accordion Item can be open at a time. If set to multiple, you can open all the accordions at once.",
//     },
//   },
// };

// export const With_icons: ComponentStory<
//   typeof Accordion
// > = () => {
//   return (
//     <AccordionWrapper
//       className="w-8/12"
//       items={items2}
//       highlight
//       mode="single"
//     />
//   );
// };

// With_icons.parameters = {
//   docs: {
//     description: {
//       story:
//         "Use the label icon prop to customize icon displayed at the handle.",
//     },
//   },
// };

// export const Inital_state: ComponentStory<
//   typeof Accordion
// > = () => {
//   return (
//     <AccordionWrapper
//       className="w-8/12"
//       items={items2}
//       highlight
//       mode="single"
//       initialState={{ 2: true }}
//     />
//   );
// };

// Inital_state.parameters = {
//   docs: {
//     description: {
//       story:
//         "Use initial state to define which items start with open set to true. Ex: `initialState={{ 2: true }}`. 2 is the id provided to the second accordtion in the Items array.",
//     },
//   },
// };

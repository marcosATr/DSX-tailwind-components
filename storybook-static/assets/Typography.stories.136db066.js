var i=Object.defineProperty;var n=(t,e)=>i(t,"name",{value:e,configurable:!0});/* empty css              */import{T as r}from"./Tag.99b6a28c.js";import{j as o}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const d={title:"Typography",component:r,parameters:{storySource:{source:`import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { Typography } from "../lib";\r
\r
export default {\r
  title: "Typography",\r
  component: Typography,\r
  parameters: {\r
    docs: {\r
      description: {\r
        component:\r
          "Use the <Accordion /> component to display a single accordion. Optionally use the AccordionWrapper component to style and wrap the accordtion items.\\n\\nComponent Prop: Pass a component to be displayed when the accordion is open.\\n\\nState Management and the id prop: for",\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Typography>;\r
\r
export const DefaultTypography: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return <Typography>Writing is awesome.</Typography>;\r
};\r
\r
export const Display1: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="display1">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const Display2: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="display2">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const Display3: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="display3">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const Display4: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="display4">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const H1: ComponentStory<typeof Typography> = () => {\r
  return (\r
    <Typography variant="h1">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const H2: ComponentStory<typeof Typography> = () => {\r
  return (\r
    <Typography variant="h2">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const H3: ComponentStory<typeof Typography> = () => {\r
  return (\r
    <Typography variant="h3">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
export const H4: ComponentStory<typeof Typography> = () => {\r
  return (\r
    <Typography variant="h4">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
export const H5: ComponentStory<typeof Typography> = () => {\r
  return (\r
    <Typography variant="h5">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
export const H6: ComponentStory<typeof Typography> = () => {\r
  return (\r
    <Typography variant="h6">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
export const Lead: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="lead">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const Paragraph: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="paragraph">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const Caption: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography variant="caption">\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const asProp: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography\r
      variant="h1"\r
      as="p"\r
    >\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
export const WithCustomClasses: ComponentStory<\r
  typeof Typography\r
> = () => {\r
  return (\r
    <Typography\r
      variant="h5"\r
      className="uppercase font-light text-success"\r
    >\r
      Writing is awesome.\r
    </Typography>\r
  );\r
};\r
\r
// SingleModeWithHighlightedContent.parameters = {\r
//   docs: {\r
//     description: {\r
//       story:\r
//         "Use the highlight prop to highlight the open accordion. Use the mode prop to customize the behavior. If set to single, only one Accordion Item can be open at a time. If set to multiple, you can open all the accordions at once.",\r
//     },\r
//   },\r
// };\r
\r
// export const With_icons: ComponentStory<\r
//   typeof Accordion\r
// > = () => {\r
//   return (\r
//     <AccordionWrapper\r
//       className="w-8/12"\r
//       items={items2}\r
//       highlight\r
//       mode="single"\r
//     />\r
//   );\r
// };\r
\r
// With_icons.parameters = {\r
//   docs: {\r
//     description: {\r
//       story:\r
//         "Use the label icon prop to customize icon displayed at the handle.",\r
//     },\r
//   },\r
// };\r
\r
// export const Inital_state: ComponentStory<\r
//   typeof Accordion\r
// > = () => {\r
//   return (\r
//     <AccordionWrapper\r
//       className="w-8/12"\r
//       items={items2}\r
//       highlight\r
//       mode="single"\r
//       initialState={{ 2: true }}\r
//     />\r
//   );\r
// };\r
\r
// Inital_state.parameters = {\r
//   docs: {\r
//     description: {\r
//       story:\r
//         "Use initial state to define which items start with open set to true. Ex: \`initialState={{ 2: true }}\`. 2 is the id provided to the second accordtion in the Items array.",\r
//     },\r
//   },\r
// };\r
`,locationsMap:{"default-typography":{startLoc:{col:4,line:22},endLoc:{col:1,line:24},startBody:{col:4,line:22},endBody:{col:1,line:24}},"display-1":{startLoc:{col:4,line:28},endLoc:{col:1,line:34},startBody:{col:4,line:28},endBody:{col:1,line:34}},"display-2":{startLoc:{col:4,line:38},endLoc:{col:1,line:44},startBody:{col:4,line:38},endBody:{col:1,line:44}},"display-3":{startLoc:{col:4,line:48},endLoc:{col:1,line:54},startBody:{col:4,line:48},endBody:{col:1,line:54}},"display-4":{startLoc:{col:4,line:58},endLoc:{col:1,line:64},startBody:{col:4,line:58},endBody:{col:1,line:64}},"h-1":{startLoc:{col:53,line:66},endLoc:{col:1,line:72},startBody:{col:53,line:66},endBody:{col:1,line:72}},"h-2":{startLoc:{col:53,line:74},endLoc:{col:1,line:80},startBody:{col:53,line:74},endBody:{col:1,line:80}},"h-3":{startLoc:{col:53,line:82},endLoc:{col:1,line:88},startBody:{col:53,line:82},endBody:{col:1,line:88}},"h-4":{startLoc:{col:53,line:89},endLoc:{col:1,line:95},startBody:{col:53,line:89},endBody:{col:1,line:95}},"h-5":{startLoc:{col:53,line:96},endLoc:{col:1,line:102},startBody:{col:53,line:96},endBody:{col:1,line:102}},"h-6":{startLoc:{col:53,line:103},endLoc:{col:1,line:109},startBody:{col:53,line:103},endBody:{col:1,line:109}},lead:{startLoc:{col:4,line:112},endLoc:{col:1,line:118},startBody:{col:4,line:112},endBody:{col:1,line:118}},paragraph:{startLoc:{col:4,line:122},endLoc:{col:1,line:128},startBody:{col:4,line:122},endBody:{col:1,line:128}},caption:{startLoc:{col:4,line:132},endLoc:{col:1,line:138},startBody:{col:4,line:132},endBody:{col:1,line:138}},"as-prop":{startLoc:{col:4,line:142},endLoc:{col:1,line:151},startBody:{col:4,line:142},endBody:{col:1,line:151}},"with-custom-classes":{startLoc:{col:4,line:155},endLoc:{col:1,line:164},startBody:{col:4,line:155},endBody:{col:1,line:164}}}},docs:{description:{component:`Use the <Accordion /> component to display a single accordion. Optionally use the AccordionWrapper component to style and wrap the accordtion items.

Component Prop: Pass a component to be displayed when the accordion is open.

State Management and the id prop: for`}}}},h=n(()=>o(r,{children:"Writing is awesome."}),"DefaultTypography"),g=n(()=>o(r,{variant:"display1",children:"Writing is awesome."}),"Display1"),m=n(()=>o(r,{variant:"display2",children:"Writing is awesome."}),"Display2"),u=n(()=>o(r,{variant:"display3",children:"Writing is awesome."}),"Display3"),T=n(()=>o(r,{variant:"display4",children:"Writing is awesome."}),"Display4"),W=n(()=>o(r,{variant:"h1",children:"Writing is awesome."}),"H1"),w=n(()=>o(r,{variant:"h2",children:"Writing is awesome."}),"H2"),f=n(()=>o(r,{variant:"h3",children:"Writing is awesome."}),"H3"),L=n(()=>o(r,{variant:"h4",children:"Writing is awesome."}),"H4"),C=n(()=>o(r,{variant:"h5",children:"Writing is awesome."}),"H5"),v=n(()=>o(r,{variant:"h6",children:"Writing is awesome."}),"H6"),B=n(()=>o(r,{variant:"lead",children:"Writing is awesome."}),"Lead"),x=n(()=>o(r,{variant:"paragraph",children:"Writing is awesome."}),"Paragraph"),S=n(()=>o(r,{variant:"caption",children:"Writing is awesome."}),"Caption"),H=n(()=>o(r,{variant:"h1",as:"p",children:"Writing is awesome."}),"asProp"),D=n(()=>o(r,{variant:"h5",className:"uppercase font-light text-success",children:"Writing is awesome."}),"WithCustomClasses"),P=["DefaultTypography","Display1","Display2","Display3","Display4","H1","H2","H3","H4","H5","H6","Lead","Paragraph","Caption","asProp","WithCustomClasses"];export{S as Caption,h as DefaultTypography,g as Display1,m as Display2,u as Display3,T as Display4,W as H1,w as H2,f as H3,L as H4,C as H5,v as H6,B as Lead,x as Paragraph,D as WithCustomClasses,P as __namedExportsOrder,H as asProp,d as default};
//# sourceMappingURL=Typography.stories.136db066.js.map

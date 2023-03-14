var l=Object.defineProperty;var n=(t,a)=>l(t,"name",{value:a,configurable:!0});/* empty css              */import{D as i,T as e}from"./Tag.99b6a28c.js";import{b as o,j as r}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const m={title:"Divider",component:i,parameters:{storySource:{source:`import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { Typography, Divider } from "../lib";\r
\r
export default {\r
  title: "Divider",\r
  component: Divider,\r
  parameters: {\r
    docs: {\r
      description: {\r
        component:\r
          "Use the vertical prop to change the <Divider /> orientation.",\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Divider>;\r
\r
export const DefaultDivider: ComponentStory<\r
  typeof Divider\r
> = () => {\r
  return (\r
    <div className="flex flex-col gap-1">\r
      <Typography>first line</Typography>\r
      <Divider />\r
      <Typography>second line</Typography>\r
    </div>\r
  );\r
};\r
\r
export const VerticalDivider: ComponentStory<\r
  typeof Divider\r
> = () => {\r
  return (\r
    <div className="flex h-7 w-full items-center gap-1">\r
      <Typography as="span">first line</Typography>\r
      <Divider vertical />\r
      <Typography as="span">also first line</Typography>\r
    </div>\r
  );\r
};\r
`,locationsMap:{"default-divider":{startLoc:{col:4,line:22},endLoc:{col:1,line:30},startBody:{col:4,line:22},endBody:{col:1,line:30}},"vertical-divider":{startLoc:{col:4,line:34},endLoc:{col:1,line:42},startBody:{col:4,line:34},endBody:{col:1,line:42}}}},docs:{description:{component:"Use the vertical prop to change the <Divider /> orientation."}}}},f=n(()=>o("div",{className:"flex flex-col gap-1",children:[r(e,{children:"first line"}),r(i,{}),r(e,{children:"second line"})]}),"DefaultDivider"),h=n(()=>o("div",{className:"flex h-7 w-full items-center gap-1",children:[r(e,{as:"span",children:"first line"}),r(i,{vertical:!0}),r(e,{as:"span",children:"also first line"})]}),"VerticalDivider"),D=["DefaultDivider","VerticalDivider"];export{f as DefaultDivider,h as VerticalDivider,D as __namedExportsOrder,m as default};
//# sourceMappingURL=Divider.stories.65cfe33d.js.map

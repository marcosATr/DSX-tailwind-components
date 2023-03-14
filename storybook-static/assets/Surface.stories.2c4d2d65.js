var a=Object.defineProperty;var r=(o,t)=>a(o,"name",{value:t,configurable:!0});/* empty css              */import{S as e}from"./Tag.99b6a28c.js";import{j as n}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const p={parameters:{storySource:{source:`import { Surface } from "../lib";\r
import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
\r
export default {\r
  title: "Surface",\r
  component: Surface,\r
} as ComponentMeta<typeof Surface>;\r
\r
export const DefaultSurface: ComponentStory<\r
  typeof Surface\r
> = () => (\r
  <Surface className="p-4">Default surface</Surface>\r
);\r
\r
export const OutlinedSurface: ComponentStory<\r
  typeof Surface\r
> = () => (\r
  <Surface\r
    variant="outlined"\r
    className="p-4"\r
  >\r
    Outlined version\r
  </Surface>\r
);\r
`,locationsMap:{"default-surface":{startLoc:{col:4,line:14},endLoc:{col:1,line:16},startBody:{col:4,line:14},endBody:{col:1,line:16}},"outlined-surface":{startLoc:{col:4,line:20},endLoc:{col:1,line:27},startBody:{col:4,line:20},endBody:{col:1,line:27}}}}},title:"Surface",component:e},m=r(()=>n(e,{className:"p-4",children:"Default surface"}),"DefaultSurface"),S=r(()=>n(e,{variant:"outlined",className:"p-4",children:"Outlined version"}),"OutlinedSurface"),d=["DefaultSurface","OutlinedSurface"];export{m as DefaultSurface,S as OutlinedSurface,d as __namedExportsOrder,p as default};
//# sourceMappingURL=Surface.stories.2c4d2d65.js.map

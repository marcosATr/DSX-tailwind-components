var a=Object.defineProperty;var n=(r,e)=>a(r,"name",{value:e,configurable:!0});/* empty css              */import{h as t}from"./Tag.99b6a28c.js";import{j as o}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const p={parameters:{storySource:{source:`import { Tag } from "../lib";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
\r
export default {\r
  title: "Tag",\r
  component: Tag,\r
} as ComponentMeta<typeof Tag>;\r
\r
export const DefaultTagPrimary: ComponentStory<typeof Tag> = () => (\r
  <Tag\r
    text="Success"\r
  />\r
);\r
\r
export const DangerTag: ComponentStory<typeof Tag> = () => (\r
  <Tag text="Danger" variant="danger" />\r
);\r
\r
export const WarningTagRounded: ComponentStory<typeof Tag> = () => (\r
  <Tag text="Warning" variant="warning" rounded />\r
);\r
\r
export const SuccessTag: ComponentStory<typeof Tag> = () => (\r
  <Tag text="Success" variant="success" />\r
);\r
`,locationsMap:{"default-tag-primary":{startLoc:{col:61,line:9},endLoc:{col:1,line:13},startBody:{col:61,line:9},endBody:{col:1,line:13}},"danger-tag":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}},"warning-tag-rounded":{startLoc:{col:61,line:19},endLoc:{col:1,line:21},startBody:{col:61,line:19},endBody:{col:1,line:21}},"success-tag":{startLoc:{col:54,line:23},endLoc:{col:1,line:25},startBody:{col:54,line:23},endBody:{col:1,line:25}}}}},title:"Tag",component:t},T=n(()=>o(t,{text:"Success"}),"DefaultTagPrimary"),m=n(()=>o(t,{text:"Danger",variant:"danger"}),"DangerTag"),u=n(()=>o(t,{text:"Warning",variant:"warning",rounded:!0}),"WarningTagRounded"),y=n(()=>o(t,{text:"Success",variant:"success"}),"SuccessTag"),x=["DefaultTagPrimary","DangerTag","WarningTagRounded","SuccessTag"];export{m as DangerTag,T as DefaultTagPrimary,y as SuccessTag,u as WarningTagRounded,x as __namedExportsOrder,p as default};
//# sourceMappingURL=Tag.stories.f72a21a4.js.map

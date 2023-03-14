var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});/* empty css              */import{B as e,P as s}from"./Tag.99b6a28c.js";import{j as r}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const y={parameters:{storySource:{source:`// Alert.stories.js|jsx\r
import { Badge } from "../lib";\r
import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { Plus } from "phosphor-react";\r
\r
export default {\r
  title: "Badge",\r
  component: Badge,\r
} as ComponentMeta<typeof Badge>;\r
\r
export const Primary: ComponentStory<typeof Badge> = () => (\r
  <Badge text="Primary" />\r
);\r
\r
export const PrimaryTransparent: ComponentStory<\r
  typeof Badge\r
> = () => (\r
  <Badge\r
    text="Lighter"\r
    version="transparent"\r
  />\r
);\r
\r
export const Success: ComponentStory<typeof Badge> = () => (\r
  <Badge\r
    text="Success"\r
    variant="success"\r
  />\r
);\r
\r
export const Danger: ComponentStory<typeof Badge> = () => (\r
  <Badge\r
    text="Danger variant"\r
    variant="danger"\r
  />\r
);\r
\r
export const Danger_Transparent: ComponentStory<\r
  typeof Badge\r
> = () => (\r
  <Badge\r
    text="Another Danger"\r
    variant="danger"\r
    version="transparent"\r
  />\r
);\r
\r
export const Warning: ComponentStory<typeof Badge> = () => (\r
  <Badge\r
    text="Badge"\r
    variant="warning"\r
  />\r
);\r
\r
export const SingleText: ComponentStory<\r
  typeof Badge\r
> = () => (\r
  <Badge\r
    text="1"\r
    variant="warning"\r
  />\r
);\r
\r
export const ReceivingIconAsProp: ComponentStory<\r
  typeof Badge\r
> = () => (\r
  <Badge\r
    text={\r
      <Plus\r
        size={14}\r
        weight="bold"\r
      />\r
    }\r
    variant="success"\r
  />\r
);\r
`,locationsMap:{primary:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}},"primary-transparent":{startLoc:{col:4,line:20},endLoc:{col:1,line:25},startBody:{col:4,line:20},endBody:{col:1,line:25}},success:{startLoc:{col:53,line:27},endLoc:{col:1,line:32},startBody:{col:53,line:27},endBody:{col:1,line:32}},danger:{startLoc:{col:52,line:34},endLoc:{col:1,line:39},startBody:{col:52,line:34},endBody:{col:1,line:39}},"danger-transparent":{startLoc:{col:4,line:43},endLoc:{col:1,line:49},startBody:{col:4,line:43},endBody:{col:1,line:49}},warning:{startLoc:{col:53,line:51},endLoc:{col:1,line:56},startBody:{col:53,line:51},endBody:{col:1,line:56}},"single-text":{startLoc:{col:4,line:60},endLoc:{col:1,line:65},startBody:{col:4,line:60},endBody:{col:1,line:65}},"receiving-icon-as-prop":{startLoc:{col:4,line:69},endLoc:{col:1,line:79},startBody:{col:4,line:69},endBody:{col:1,line:79}}}}},title:"Badge",component:e},B=n(()=>r(e,{text:"Primary"}),"Primary"),m=n(()=>r(e,{text:"Lighter",version:"transparent"}),"PrimaryTransparent"),x=n(()=>r(e,{text:"Success",variant:"success"}),"Success"),v=n(()=>r(e,{text:"Danger variant",variant:"danger"}),"Danger"),L=n(()=>r(e,{text:"Another Danger",variant:"danger",version:"transparent"}),"Danger_Transparent"),S=n(()=>r(e,{text:"Badge",variant:"warning"}),"Warning"),u=n(()=>r(e,{text:"1",variant:"warning"}),"SingleText"),f=n(()=>r(e,{text:r(s,{size:14,weight:"bold"}),variant:"success"}),"ReceivingIconAsProp"),P=["Primary","PrimaryTransparent","Success","Danger","Danger_Transparent","Warning","SingleText","ReceivingIconAsProp"];export{v as Danger,L as Danger_Transparent,B as Primary,m as PrimaryTransparent,f as ReceivingIconAsProp,u as SingleText,x as Success,S as Warning,P as __namedExportsOrder,y as default};
//# sourceMappingURL=Badge.stories.73020daa.js.map

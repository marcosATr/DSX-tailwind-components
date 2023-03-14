var p=Object.defineProperty;var t=(r,i)=>p(r,"name",{value:i,configurable:!0});/* empty css              */import{I as d,r as h,b as s}from"./Tag.99b6a28c.js";import{b as a,F as o,j as e,r as u}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";var n=new Map;n.set("bold",function(r){return a(o,{children:[e("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),e("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});n.set("duotone",function(r){return a(o,{children:[e("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),e("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});n.set("fill",function(){return e(o,{children:e("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"})})});n.set("light",function(r){return a(o,{children:[e("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),e("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});n.set("thin",function(r){return a(o,{children:[e("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),e("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});n.set("regular",function(r){return a(o,{children:[e("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),e("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:r,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var k=t(function(i,c){return h(i,c,n)},"renderPath"),l=u.exports.forwardRef(function(r,i){return e(d,{...Object.assign({ref:i},r,{renderPath:k})})});l.displayName="CheckCircle";const y=l,A={parameters:{storySource:{source:`// Alert.stories.js|jsx\r
import { Alert } from "../lib";\r
import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { CheckCircle } from "phosphor-react";\r
\r
export default {\r
  title: "Alert",\r
  component: Alert,\r
} as ComponentMeta<typeof Alert>;\r
\r
export const Primary: ComponentStory<typeof Alert> = () => (\r
  <Alert text="This is the primary alert variant" />\r
);\r
\r
export const Success_with_title_prop: ComponentStory<\r
  typeof Alert\r
> = () => (\r
  <Alert\r
    title="This text is supposed to appear on the first line and be a bit bigger."\r
    text="This is the success alert variant"\r
    variant="success"\r
  />\r
);\r
\r
export const Danger: ComponentStory<typeof Alert> = () => (\r
  <Alert\r
    text="This is the danger alert variant"\r
    variant="danger"\r
    icon={<CheckCircle size={20} />}\r
  />\r
);\r
\r
export const Warning: ComponentStory<typeof Alert> = () => (\r
  <Alert\r
    text="This is the warning alert variant"\r
    variant="warning"\r
  />\r
);\r
`,locationsMap:{primary:{startLoc:{col:53,line:14},endLoc:{col:1,line:16},startBody:{col:53,line:14},endBody:{col:1,line:16}},"success-with-title-prop":{startLoc:{col:4,line:20},endLoc:{col:1,line:26},startBody:{col:4,line:20},endBody:{col:1,line:26}},danger:{startLoc:{col:52,line:28},endLoc:{col:1,line:34},startBody:{col:52,line:28},endBody:{col:1,line:34}},warning:{startLoc:{col:53,line:36},endLoc:{col:1,line:41},startBody:{col:53,line:36},endBody:{col:1,line:41}}}}},title:"Alert",component:s},C=t(()=>e(s,{text:"This is the primary alert variant"}),"Primary"),j=t(()=>e(s,{title:"This text is supposed to appear on the first line and be a bit bigger.",text:"This is the success alert variant",variant:"success"}),"Success_with_title_prop"),W=t(()=>e(s,{text:"This is the danger alert variant",variant:"danger",icon:e(y,{size:20})}),"Danger"),b=t(()=>e(s,{text:"This is the warning alert variant",variant:"warning"}),"Warning"),_=["Primary","Success_with_title_prop","Danger","Warning"];export{W as Danger,C as Primary,j as Success_with_title_prop,b as Warning,_ as __namedExportsOrder,A as default};
//# sourceMappingURL=Alert.stories.bdfec1b1.js.map

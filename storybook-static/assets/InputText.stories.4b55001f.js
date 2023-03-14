var p=Object.defineProperty;var t=(o,r)=>p(o,"name",{value:r,configurable:!0});/* empty css              */import{g as e}from"./Tag.99b6a28c.js";import{j as n,r as a}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const T={parameters:{storySource:{source:`import { InputText } from "../lib";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
import { useState } from "react";\r
\r
export default {\r
  title: "InputText",\r
  component: InputText,\r
} as ComponentMeta<typeof InputText>;\r
\r
\r
\r
export const TextInputWithoutPlaceholder: ComponentStory<typeof InputText> = () => (\r
  <InputText />\r
);\r
\r
export const TextInputWithLabel: ComponentStory<typeof InputText> = () => (\r
  <InputText label="Full name"/>\r
);\r
\r
\r
\r
export const TextInputWithPlaceholder: ComponentStory<typeof InputText> = () => {\r
  const [value, setValue] = useState('');\r
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setValue(e.target.value);\r
  };\r
\r
  return <InputText placeholder="Input Text" value={value} onChange={onChange} />;\r
}\r
  ;\r
\r
export const TextInputDisabled: ComponentStory<typeof InputText> = () => (\r
  <InputText placeholder="Input Text" disabled />\r
);\r
`,locationsMap:{"text-input-without-placeholder":{startLoc:{col:77,line:12},endLoc:{col:1,line:14},startBody:{col:77,line:12},endBody:{col:1,line:14}},"text-input-with-label":{startLoc:{col:68,line:16},endLoc:{col:1,line:18},startBody:{col:68,line:16},endBody:{col:1,line:18}},"text-input-with-placeholder":{startLoc:{col:74,line:22},endLoc:{col:1,line:29},startBody:{col:74,line:22},endBody:{col:1,line:29}},"text-input-disabled":{startLoc:{col:67,line:32},endLoc:{col:1,line:34},startBody:{col:67,line:32},endBody:{col:1,line:34}}}}},title:"InputText",component:e},h=t(()=>n(e,{}),"TextInputWithoutPlaceholder"),m=t(()=>n(e,{label:"Full name"}),"TextInputWithLabel"),y=t(()=>{const[o,r]=a.exports.useState("");return n(e,{placeholder:"Input Text",value:o,onChange:t(l=>{r(l.target.value)},"onChange")})},"TextInputWithPlaceholder"),b=t(()=>n(e,{placeholder:"Input Text",disabled:!0}),"TextInputDisabled"),C=["TextInputWithoutPlaceholder","TextInputWithLabel","TextInputWithPlaceholder","TextInputDisabled"];export{b as TextInputDisabled,m as TextInputWithLabel,y as TextInputWithPlaceholder,h as TextInputWithoutPlaceholder,C as __namedExportsOrder,T as default};
//# sourceMappingURL=InputText.stories.4b55001f.js.map

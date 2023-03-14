var a=Object.defineProperty;var n=(o,e)=>a(o,"name",{value:e,configurable:!0});/* empty css              */import{R as r}from"./Tag.99b6a28c.js";import{r as l,j as i}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const s=[{id:"1",label:"first option"},{id:"2",label:"second option"},{id:"3",label:"third option"},{id:"4",label:"fourth option"}],b={parameters:{storySource:{source:`import { RadioSearchCombo } from "../lib";\r
import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { useState } from "react";\r
\r
const options = [\r
  {\r
    id: "1",\r
    label: "first option",\r
  },\r
  {\r
    id: "2",\r
    label: "second option",\r
  },\r
  {\r
    id: "3",\r
    label: "third option",\r
  },\r
  {\r
    id: "4",\r
    label: "fourth option",\r
  },\r
];\r
\r
export default {\r
  title: "RadioSearchCombo",\r
  component: RadioSearchCombo,\r
} as ComponentMeta<typeof RadioSearchCombo>;\r
\r
export const FilterAndSelect: ComponentStory<\r
  typeof RadioSearchCombo\r
> = () => {\r
  const [value, setValue] = useState("");\r
  const onChangeValue = (\r
    e: React.ChangeEvent<HTMLInputElement>\r
  ) => {\r
    setValue(e.target.value);\r
  };\r
  return (\r
    <RadioSearchCombo\r
      options={options}\r
      placeholder="Filter classes"\r
      selected={value}\r
      onChange={onChangeValue}\r
      emptyResultText="No results found"\r
    />\r
  );\r
};\r
`,locationsMap:{"filter-and-select":{startLoc:{col:4,line:34},endLoc:{col:1,line:50},startBody:{col:4,line:34},endBody:{col:1,line:50}}}}},title:"RadioSearchCombo",component:r},S=n(()=>{const[o,e]=l.exports.useState("");return i(r,{options:s,placeholder:"Filter classes",selected:o,onChange:n(t=>{e(t.target.value)},"onChangeValue"),emptyResultText:"No results found"})},"FilterAndSelect"),f=["FilterAndSelect"];export{S as FilterAndSelect,f as __namedExportsOrder,b as default};
//# sourceMappingURL=RadioSearchCombo.stories.1c9f3479.js.map

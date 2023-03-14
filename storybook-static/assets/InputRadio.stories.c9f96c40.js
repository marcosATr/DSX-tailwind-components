var s=Object.defineProperty;var o=(t,n)=>s(t,"name",{value:n,configurable:!0});/* empty css              */import{f as a}from"./Tag.99b6a28c.js";import{r as i,j as r}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const b={parameters:{storySource:{source:`import { InputRadio } from "../lib";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
import { useState } from "react";\r
\r
export default {\r
  title: "InputRadio",\r
  component: InputRadio,\r
} as ComponentMeta<typeof InputRadio>;\r
\r
const options = [\r
  {\r
    id: '1',\r
    label: 'first option',\r
  },\r
  {\r
    id: '2',\r
    label: 'second option',\r
  },\r
  {\r
    id: '3',\r
    label: 'third option',\r
  },\r
  {\r
    id: '4',\r
    label: 'fourth option',\r
  }\r
];\r
\r
\r
export const TextInputWithoutPlaceholder: ComponentStory<typeof InputRadio> = () => {\r
  const [value, setValue] = useState<string>();\r
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setValue(e.target.value);\r
  };\r
  return <InputRadio id="121223123--123123123-123123123" label="first input" onChange={onChange} selected={value} />;\r
};\r
\r
export const DisabledRadioInput: ComponentStory<typeof InputRadio> = () => {\r
  const [value, setValue] = useState<string>();\r
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setValue(e.target.value);\r
  };\r
  return <InputRadio id="232--111-211" label="first input" onChange={onChange} selected={value} disabled />;\r
};\r
\r
export const DisabledCheckedRadioInput: ComponentStory<typeof InputRadio> = () => {\r
  const [value, setValue] = useState<string>("232--111-211");\r
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setValue(e.target.value);\r
  };\r
  return <InputRadio id="232--111-211" label="first input" onChange={onChange} selected={value} disabled />;\r
};\r
\r
\r
export const MultipleRadioInputs: ComponentStory<typeof InputRadio> = () => {\r
  const [value, setValue] = useState<string>();\r
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    setValue(e.target.value);\r
  };\r
\r
  return (\r
    <div className="flex flex-col">\r
      {\r
        options.map(option => {\r
          return (\r
            <InputRadio id={option.id} label={option.label} selected={value} onChange={onChange} key={option.id} />\r
          );\r
        })\r
      }\r
    </div>\r
  );\r
};\r
MultipleRadioInputs.parameters = {\r
  docs: {\r
    description: {\r
      story: "Create and options array and map it into multiple inputs. Customize it to your needs or use RadioGroup component."\r
    }\r
  }\r
};`,locationsMap:{"text-input-without-placeholder":{startLoc:{col:78,line:30},endLoc:{col:1,line:36},startBody:{col:78,line:30},endBody:{col:1,line:36}},"disabled-radio-input":{startLoc:{col:69,line:38},endLoc:{col:1,line:44},startBody:{col:69,line:38},endBody:{col:1,line:44}},"disabled-checked-radio-input":{startLoc:{col:76,line:46},endLoc:{col:1,line:52},startBody:{col:76,line:46},endBody:{col:1,line:52}},"multiple-radio-inputs":{startLoc:{col:70,line:55},endLoc:{col:1,line:72},startBody:{col:70,line:55},endBody:{col:1,line:72}}}}},title:"InputRadio",component:a},d=[{id:"1",label:"first option"},{id:"2",label:"second option"},{id:"3",label:"third option"},{id:"4",label:"fourth option"}],I=o(()=>{const[t,n]=i.exports.useState();return r(a,{id:"121223123--123123123-123123123",label:"first input",onChange:o(e=>{n(e.target.value)},"onChange"),selected:t})},"TextInputWithoutPlaceholder"),R=o(()=>{const[t,n]=i.exports.useState();return r(a,{id:"232--111-211",label:"first input",onChange:o(e=>{n(e.target.value)},"onChange"),selected:t,disabled:!0})},"DisabledRadioInput"),f=o(()=>{const[t,n]=i.exports.useState("232--111-211");return r(a,{id:"232--111-211",label:"first input",onChange:o(e=>{n(e.target.value)},"onChange"),selected:t,disabled:!0})},"DisabledCheckedRadioInput"),u=o(()=>{const[t,n]=i.exports.useState(),l=o(e=>{n(e.target.value)},"onChange");return r("div",{className:"flex flex-col",children:d.map(e=>r(a,{id:e.id,label:e.label,selected:t,onChange:l},e.id))})},"MultipleRadioInputs");u.parameters={docs:{description:{story:"Create and options array and map it into multiple inputs. Customize it to your needs or use RadioGroup component."}}};const v=["TextInputWithoutPlaceholder","DisabledRadioInput","DisabledCheckedRadioInput","MultipleRadioInputs"];export{f as DisabledCheckedRadioInput,R as DisabledRadioInput,u as MultipleRadioInputs,I as TextInputWithoutPlaceholder,v as __namedExportsOrder,b as default};
//# sourceMappingURL=InputRadio.stories.c9f96c40.js.map

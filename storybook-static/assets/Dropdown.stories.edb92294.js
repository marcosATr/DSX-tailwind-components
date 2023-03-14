var i=Object.defineProperty;var t=(r,e)=>i(r,"name",{value:e,configurable:!0});/* empty css              */import{d as o}from"./Tag.99b6a28c.js";import{b as a,F as s,j as n}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const u={parameters:{storySource:{source:`import { Dropdown } from "../lib";\r
import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
\r
export default {\r
  title: "Dropdown",\r
  component: Dropdown,\r
} as ComponentMeta<typeof Dropdown>;\r
\r
export const DefaultDropdown: ComponentStory<\r
  typeof Dropdown\r
> = () => {\r
  const options = [\r
    {\r
      id: 1,\r
      value: "Option 1",\r
      handleClick: () => console.log("1"),\r
    },\r
    {\r
      id: 2,\r
      value: "Option 2",\r
      handleClick: () => console.log("2"),\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Primary"\r
          options={options}\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Danger"\r
          options={options}\r
          variant="danger"\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Success"\r
          options={options}\r
          variant="success"\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Warning"\r
          options={options}\r
          variant="warning"\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Primary"\r
          options={options}\r
          outlined\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Danger"\r
          options={options}\r
          variant="danger"\r
          outlined\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Success"\r
          options={options}\r
          variant="success"\r
          outlined\r
        />\r
      </div>\r
      <div className="mt-4">\r
        <Dropdown\r
          text="Warning"\r
          options={options}\r
          variant="warning"\r
          outlined\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
`,locationsMap:{"default-dropdown":{startLoc:{col:4,line:14},endLoc:{col:1,line:90},startBody:{col:4,line:14},endBody:{col:1,line:90}}}}},title:"Dropdown",component:o},D=t(()=>{const r=[{id:1,value:"Option 1",handleClick:()=>console.log("1")},{id:2,value:"Option 2",handleClick:()=>console.log("2")}];return a(s,{children:[n("div",{className:"mt-4",children:n(o,{text:"Primary",options:r})}),n("div",{className:"mt-4",children:n(o,{text:"Danger",options:r,variant:"danger"})}),n("div",{className:"mt-4",children:n(o,{text:"Success",options:r,variant:"success"})}),n("div",{className:"mt-4",children:n(o,{text:"Warning",options:r,variant:"warning"})}),n("div",{className:"mt-4",children:n(o,{text:"Primary",options:r,outlined:!0})}),n("div",{className:"mt-4",children:n(o,{text:"Danger",options:r,variant:"danger",outlined:!0})}),n("div",{className:"mt-4",children:n(o,{text:"Success",options:r,variant:"success",outlined:!0})}),n("div",{className:"mt-4",children:n(o,{text:"Warning",options:r,variant:"warning",outlined:!0})})]})},"DefaultDropdown"),w=["DefaultDropdown"];export{D as DefaultDropdown,w as __namedExportsOrder,u as default};
//# sourceMappingURL=Dropdown.stories.edb92294.js.map

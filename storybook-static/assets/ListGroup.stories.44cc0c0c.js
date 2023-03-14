var i=Object.defineProperty;var r=(n,e)=>i(n,"name",{value:e,configurable:!0});/* empty css              */import{L as t}from"./Tag.99b6a28c.js";import{j as o,F as l}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const d={parameters:{storySource:{source:`import { ListGroup } from "../lib";\r
import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
\r
export default {\r
  title: "ListGroup",\r
  component: ListGroup,\r
} as ComponentMeta<typeof ListGroup>;\r
\r
export const DefaultListGroup: ComponentStory<\r
  typeof ListGroup\r
> = () => {\r
  const items = [\r
    {\r
      id: 1,\r
      value: "Option 1",\r
      onClick: () => console.log("1"),\r
    },\r
    {\r
      id: 2,\r
      value: "Option 2",\r
      onClick: () => console.log("2"),\r
    },\r
    {\r
      id: 3,\r
      value: "Option 3",\r
      onClick: () => console.log("3"),\r
    },\r
    {\r
      id: 4,\r
      value: "Option 4",\r
      onClick: () => console.log("4"),\r
    },\r
  ];\r
\r
  return (\r
    <>\r
      <div className="mt-4">\r
        <ListGroup\r
          items={items}\r
          active={2}\r
        />\r
      </div>\r
    </>\r
  );\r
};\r
`,locationsMap:{"default-list-group":{startLoc:{col:4,line:14},endLoc:{col:1,line:48},startBody:{col:4,line:14},endBody:{col:1,line:48}}}}},title:"ListGroup",component:t},L=r(()=>o(l,{children:o("div",{className:"mt-4",children:o(t,{items:[{id:1,value:"Option 1",onClick:()=>console.log("1")},{id:2,value:"Option 2",onClick:()=>console.log("2")},{id:3,value:"Option 3",onClick:()=>console.log("3")},{id:4,value:"Option 4",onClick:()=>console.log("4")}],active:2})})}),"DefaultListGroup"),v=["DefaultListGroup"];export{L as DefaultListGroup,v as __namedExportsOrder,d as default};
//# sourceMappingURL=ListGroup.stories.44cc0c0c.js.map

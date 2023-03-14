var l=Object.defineProperty;var t=(r,o)=>l(r,"name",{value:o,configurable:!0});import{r as d,b as e,F as p,j as n}from"./jsx-runtime.497a044c.js";/* empty css              */import{M as i,T as a,c as s}from"./Tag.99b6a28c.js";import"./iframe.8d361d7f.js";import"./index.cf55c83e.js";const M={title:"Modal",component:i,parameters:{storySource:{source:`import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { useState } from "react";\r
import { Button, Modal, Typography } from "../lib";\r
//TODO: Add modal story description\r
export default {\r
  title: "Modal",\r
  component: Modal,\r
  parameters: {\r
    docs: {\r
      description: {\r
        component:\r
          "Add modal behavior description.",\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Modal>;\r
\r
export const DefaultModal: ComponentStory<\r
  typeof Modal\r
> = () => {\r
  const [open, setOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <button onClick={() => setOpen(!open)}>\r
        Open modal\r
      </button>\r
      <Modal\r
        open={open}\r
        handleClose={() => setOpen(false)}\r
      >\r
        <Typography variant="h3">\r
          Writing is awesome.\r
        </Typography>\r
        <Typography className="mt-4">\r
          Writing is awesome.\r
        </Typography>\r
        <div className="mt-8 flex justify-end gap-3">\r
          <Button variant="danger">Discard</Button>\r
          <Button>Save</Button>\r
        </div>\r
      </Modal>\r
    </>\r
  );\r
};\r
`,locationsMap:{"default-modal":{startLoc:{col:4,line:23},endLoc:{col:1,line:48},startBody:{col:4,line:23},endBody:{col:1,line:48}}}},docs:{description:{component:"Add modal behavior description."}}}},g=t(()=>{const[r,o]=d.exports.useState(!1);return e(p,{children:[n("button",{onClick:()=>o(!r),children:"Open modal"}),e(i,{open:r,handleClose:()=>o(!1),children:[n(a,{variant:"h3",children:"Writing is awesome."}),n(a,{className:"mt-4",children:"Writing is awesome."}),e("div",{className:"mt-8 flex justify-end gap-3",children:[n(s,{variant:"danger",children:"Discard"}),n(s,{children:"Save"})]})]})]})},"DefaultModal"),v=["DefaultModal"];export{g as DefaultModal,v as __namedExportsOrder,M as default};
//# sourceMappingURL=Modal.stories.dff1ace2.js.map

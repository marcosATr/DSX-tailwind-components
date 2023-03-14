var i=Object.defineProperty;var e=(n,a)=>i(n,"name",{value:a,configurable:!0});/* empty css              */import{C as o,c as r}from"./Tag.99b6a28c.js";import{j as t}from"./jsx-runtime.497a044c.js";import"./index.cf55c83e.js";import"./iframe.8d361d7f.js";const p={title:"Card",component:o,parameters:{storySource:{source:`import {\r
  ComponentStory,\r
  ComponentMeta,\r
} from "@storybook/react";\r
import { Button, Card } from "../lib";\r
\r
export default {\r
  title: "Card",\r
  component: Card,\r
  parameters: {\r
    docs: {\r
      description: {\r
        component:\r
          "The <Card /> is vertical by default, but you can change this with the direction prop. Use the clamp prop to determine is ellipisis should be added to the text prop.\\n\\nInteraction Prop: Pass a component to be displayed at the bottom of the card, useful when you need to add icons, buttons and links.\\n\\nThe wrapperClasses prop can be used to overide shadow, width, height and other attributes.",\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Card>;\r
\r
export const DefaultCardWithClampProp: ComponentStory<\r
  typeof Card\r
> = () => {\r
  return (\r
    <Card\r
      title="Hello from title"\r
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."\r
      interaction={\r
        <Button className="mt-4">Read more</Button>\r
      }\r
      clamp\r
      image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"\r
    />\r
  );\r
};\r
\r
export const HorizontalCard: ComponentStory<\r
  typeof Card\r
> = () => {\r
  return (\r
    <Card\r
      variant="horizontal"\r
      title="Hello from title"\r
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."\r
      clamp\r
      interaction={\r
        <Button className="mt-4 ml-auto">Read more</Button>\r
      }\r
      image="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"\r
    />\r
  );\r
};\r
\r
export const SmallNoInteraction: ComponentStory<\r
  typeof Card\r
> = () => {\r
  return (\r
    <Card\r
      title="Hello from title"\r
      variant="small"\r
      text="This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."\r
    />\r
  );\r
};\r
`,locationsMap:{"default-card-with-clamp-prop":{startLoc:{col:4,line:22},endLoc:{col:1,line:34},startBody:{col:4,line:22},endBody:{col:1,line:34}},"horizontal-card":{startLoc:{col:4,line:38},endLoc:{col:1,line:51},startBody:{col:4,line:38},endBody:{col:1,line:51}},"small-no-interaction":{startLoc:{col:4,line:55},endLoc:{col:1,line:63},startBody:{col:4,line:55},endBody:{col:1,line:63}}}},docs:{description:{component:`The <Card /> is vertical by default, but you can change this with the direction prop. Use the clamp prop to determine is ellipisis should be added to the text prop.

Interaction Prop: Pass a component to be displayed at the bottom of the card, useful when you need to add icons, buttons and links.

The wrapperClasses prop can be used to overide shadow, width, height and other attributes.`}}}},u=e(()=>t(o,{title:"Hello from title",text:"This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below.",interaction:t(r,{className:"mt-4",children:"Read more"}),clamp:!0,image:"https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}),"DefaultCardWithClampProp"),b=e(()=>t(o,{variant:"horizontal",title:"Hello from title",text:"This is some creative text to grab the readers attention and hopefully get him to click you card interaction below. This is some creative text to grab the readers attention and hopefully get him to click you card interaction below.",clamp:!0,interaction:t(r,{className:"mt-4 ml-auto",children:"Read more"}),image:"https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlldG5hbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}),"HorizontalCard"),f=e(()=>t(o,{title:"Hello from title",variant:"small",text:"This is some creative text to grab the readers attention and hopefully get him to click you card interaction below."}),"SmallNoInteraction"),y=["DefaultCardWithClampProp","HorizontalCard","SmallNoInteraction"];export{u as DefaultCardWithClampProp,b as HorizontalCard,f as SmallNoInteraction,y as __namedExportsOrder,p as default};
//# sourceMappingURL=Card.stories.c3def820.js.map

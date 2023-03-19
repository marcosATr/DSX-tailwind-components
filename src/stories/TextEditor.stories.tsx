import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { useState } from "react";
import { TextEditor } from "../lib";

export default {
  title: "TextEditor",
  component: TextEditor,
  parameters: {
    docs: {
      description: {
        component:
          "Use the TextEditor as a simples rich text editor",
      },
    },
  },
} as ComponentMeta<typeof TextEditor>;

export const DefaultTextEditor: ComponentStory<
  typeof TextEditor
> = () => {
  const [text, setText] = useState("");
  return (
    <TextEditor
      text={text}
      setText={setText}
    />
  );
};

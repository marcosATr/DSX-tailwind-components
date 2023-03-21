import { FileDrop } from "../lib";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { useState } from "react";

export default {
  title: "FileDrop",
  component: FileDrop,
  parameters: {
    docs: {
      description: {
        component:
          "A file upload card that supports drag and drop. Use the multiple prop to control whether multiple files can be set at once.",
      },
    },
  },
} as ComponentMeta<typeof FileDrop>;

export const DefaultFileDrop: ComponentStory<
  typeof FileDrop
> = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <div className="mt-4 w-4/5">
      <FileDrop
        files={files}
        setFiles={setFiles}
        multiple
      />
    </div>
  );
};

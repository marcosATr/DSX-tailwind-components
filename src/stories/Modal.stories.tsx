import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";
import { useState } from "react";
import { Button, Modal, Typography } from "../lib";
//TODO: Add modal story description
export default {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "Add modal behavior description.",
      },
    },
  },
} as ComponentMeta<typeof Modal>;

export const DefaultModal: ComponentStory<
  typeof Modal
> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        Open modal
      </button>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
      >
        <Typography variant="h3">
          Writing is awesome.
        </Typography>
        <Typography className="mt-4">
          Writing is awesome.
        </Typography>
        <div className="mt-8 flex justify-end gap-3">
          <Button variant="danger">Discard</Button>
          <Button>Save</Button>
        </div>
      </Modal>
    </>
  );
};

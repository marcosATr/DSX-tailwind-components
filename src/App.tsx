import { useState } from "react";
import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Typography, Dropdown, Button, Modal } from "./lib";

const options = [
  {
    id: 1,
    value: "Option 1",
    handleClick: () => console.log("1"),
  },
  {
    id: 2,
    value: "Option 2",
    handleClick: () => console.log("2"),
  },
];

function OutsideClick() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>modal</button>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        closeOnClickOutside={!open2}
        className="max-w-[800px]"
      >
        <Typography variant="h4">
          Important title
        </Typography>
        <Typography className="mt-4">
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum
        </Typography>
        <div className="mt-8 ml-auto flex gap-2">
          <button onClick={() => setOpen2(true)}>
            second
          </button>
          <Button variant="danger">Discard</Button>
          <Button>Save</Button>
        </div>
        <Modal
          open={open2}
          className="mt-2 w-[300px]"
          closeOnClickOutside
          handleClose={() => setOpen2(false)}
        >
          second modal
        </Modal>
      </Modal>
      <Typography variant="h4">Important title</Typography>
      <Typography>
        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum
      </Typography>

      <Typography variant="h4">Important title</Typography>
      <Typography>
        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum
      </Typography>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="m-8 h-full w-full">
        <OutsideClick />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

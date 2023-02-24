import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Typography, Dropdown, Button } from "./lib";

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
  return (
    <>
      <Dropdown text="Dropdown" options={options}/>

      <Dropdown
        text="Dropdown"
        className="mt-4"
        variant="success"
        options={options}
      />

      <Dropdown
        text="Dropdown"
        className="mt-4"
        variant="primary"
        outlined
        options={options}
      />
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

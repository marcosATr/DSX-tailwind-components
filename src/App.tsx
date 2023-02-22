import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Typography } from "./lib";
import Dropdown from "./lib/Dropdown";

function OutsideClick() {
  return (
    <>
      <Dropdown text='Dropdown' />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <OutsideClick />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Typography } from "./lib";

function OutsideClick() {
  return <Typography>test</Typography>;
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

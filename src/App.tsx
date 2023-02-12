import { Breadcrumb } from "./lib";
import {
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const Bci = <Link to="home">home</Link>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Breadcrumb
        items={[
          { linkComponent: Bci },
          { linkComponent: Bci },
          { linkComponent: Bci },
        ]}
      />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

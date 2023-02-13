import { Breadcrumb, Typography } from "./lib";
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
      <>
        <Breadcrumb
          items={[
            { linkComponent: Bci },
            { linkComponent: Bci },
            { linkComponent: Bci },
          ]}
        />
        <Typography>Writing is awesome.</Typography>
        <Typography variant="display1">
          Writing is awesome.
        </Typography>
        <Typography variant="display2">
          Writing is awesome.
        </Typography>
        <Typography variant="display3">
          Writing is awesome.
        </Typography>
        <Typography variant="display4">
          Writing is awesome.
        </Typography>
        <Typography variant="h1">
          Writing is awesome.
        </Typography>
        <Typography variant="h2">
          Writing is awesome.
        </Typography>
        <Typography variant="h3">
          Writing is awesome.
        </Typography>
        <Typography variant="h4">
          Writing is awesome.
        </Typography>
        <Typography variant="h5">
          Writing is awesome.
        </Typography>
        <Typography variant="h6">
          Writing is awesome.
        </Typography>
        <Typography variant="lead">
          Writing is awesome.
        </Typography>
        <Typography variant="paragraph">
          Writing is awesome.
        </Typography>
        <Typography variant="caption">
          Writing is awesome.
        </Typography>
        <Typography
          variant="h1"
          as="p"
        >
          Writing is awesome.
        </Typography>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

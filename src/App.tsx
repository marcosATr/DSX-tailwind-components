import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="m-8 h-full w-full">
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

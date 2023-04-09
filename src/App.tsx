import { ChangeEvent, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { FileDrop } from "./lib";

const Test = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <div className="h-full w-full p-8">
      <FileDrop
        files={files}
        setFiles={setFiles}
        multiple
        variant="small"
      />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

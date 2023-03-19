import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { TextEditor } from "./lib";

const Test = () => {
  const [text, setText] = useState();
  return (
    <div className="h-full w-full p-8">
      <TextEditor
        text={text}
        setText={setText}
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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./page/main/main";
import Todo from "./page/todo/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

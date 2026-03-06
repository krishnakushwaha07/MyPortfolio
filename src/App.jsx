import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Project from "./components/Project";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/project",
          element: <Project />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

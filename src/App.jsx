import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";


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

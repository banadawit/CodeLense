import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "projects", element: <Projects /> },
      { path: "teams", element: <Teams /> },
      { path: "settings", element: <Settings /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

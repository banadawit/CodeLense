import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Settings from "./pages/Settings";
import Developers from "./pages/Developers";
import ProjectDetails from "./pages/ProjectDetails";
import TasksPage from "./pages/TasksPage";
import KanbanPage from "./pages/KanbanPage";
import Metrics from "./components/Metrics";
import Trends from "./pages/Trends";
import Complexity from "./pages/Complexity";
import SecurityScan from "./pages/SecurityScan";
import Backlog from "./pages/Backlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "metrics", element: <Metrics /> },
      { path: "trends", element: <Trends /> },
      { path: "projects", element: <Projects /> },
      { path: "teams", element: <Teams /> },
      { path: "settings", element: <Settings /> },
      { path: "developers", element: <Developers /> },
      { path: "complexity", element: <Complexity /> },
      { path: "security", element: <SecurityScan /> },
      { path: "backlog", element: <Backlog /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "tasks", element: <TasksPage /> },
      { path: "kanban", element: <KanbanPage /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

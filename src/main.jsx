import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/Home.jsx";
import Schedule from "./pages/Schedule.jsx";
import "./index.css";
import Settings from "./pages/Settings.jsx";
import { UserProvider } from "./components/UserProvider.jsx";
import Courses from "./pages/Courses.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/login", element: <Login />, errorElement: <ErrorPage /> },
  { path: "/schedule", element: <Schedule /> },
  { path: "/settings", element: <Settings /> },
  { path: `/user/:id/courses/:id`, element: <Courses /> },
  // { path: `/courses/:name`, element: <CoursePage/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

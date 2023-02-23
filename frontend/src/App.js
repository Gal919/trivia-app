import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/Global";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <Main />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;

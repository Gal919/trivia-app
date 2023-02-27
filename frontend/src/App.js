import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/Global";
import Login from "./pages/Login";
import Main from "./pages/Main";
import store from "./redux/store";

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
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Provider>
  );
}

export default App;

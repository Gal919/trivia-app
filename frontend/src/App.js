import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyles } from "./styles/Global";
import Main from "./pages/Main";
import Trivia from "./pages/Trivia";
import store from "./redux/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/trivia",
      element: <Trivia />,
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

import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
//import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const AppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Header />,
//   },
// ]);

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;

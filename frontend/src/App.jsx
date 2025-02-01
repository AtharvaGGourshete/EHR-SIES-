import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landingpage from "./pages/landingpage";

import LastMonthExpenses from "./pages/Fetch";
import Submit from "./pages/Submit";
import Fetch from "./pages/Fetch";
import Login from "./pages/Login";
import Patientdata from "./pages/Patientdata";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav />
          <Landingpage />
          <Footer />
        </>
      ),
    },
    
    {
      path: "/fetch",
      element: (
        <>
          <Nav />
          <Fetch />
          <Footer />
        </>
      )
    },
    
    {
      path: "/login",
      element: (
        <>
          <Nav />
          <Login />
          <Footer />
        </>
      )
    },
    {
      path: "/patientdata",
      element: (
        <>
          <Nav />
          <Patientdata />
          <Footer />
        </>
      )
    },
    {
      path: "/submit",
      element: (
        <>
          <Nav />
          <Submit />
          <Footer />
        </>
      )
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

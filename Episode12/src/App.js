import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "/index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
import ReactGA from "react-ga"; // Importing React GA

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  useEffect(() => {
    ReactGA.initialize("G-6E5190C680");
    console.log("Google Analytics initialized");

    // Track pageview on route change
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname]); // Dependency on route changes

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "sampath" }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

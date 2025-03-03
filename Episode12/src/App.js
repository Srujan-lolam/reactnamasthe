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
import { useLocation } from "react-router-dom";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const location = useLocation(); // Use useLocation hook to get current location

  useEffect(() => {
    console.log("Initializing Google Analytics...");
    ReactGA.initialize("G-S2WS6EWKHZ"); // Make sure to replace with your actual tracking ID
    ReactGA.pageview(location.pathname + location.search); // Use location object for tracking

    console.log("Tracking pageview:", location.pathname);
  }, [location]); // Dependency on route changes

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

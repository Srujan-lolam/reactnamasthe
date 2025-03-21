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
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://572354ec3be11d4b208d47b2d2263f2d@o4508991536758784.ingest.us.sentry.io/4509015415521280",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0, // Adjust based on your needs
  profilesSampleRate: 1.0, // Enables profiling, can be adjusted
});
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const location = useLocation(); // Use useLocation hook to get current location

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

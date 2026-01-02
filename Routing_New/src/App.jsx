import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import S1 from "./components/S1";
import S2 from "./components/S2";

import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails"
import Help from "./components/Help";
function App() {
 console.log(window.history);
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          // This loader is used to fetch data before rendering the component and it
         // will be available in the component using useLoaderData hook. Also there is no need to use useEffect for fetching data.
         // Also it will automatically removes the promise delay and converting the data into json format.
          loader: () => {
          return    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
          }
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
          children: [
            {
              path:"s1",
              element:<S1 />,
            },
            {
              path:"s2",
              element:<S2 />,
            }
          ]            
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contact/:id",
          element: <ContactDetails />,
        },
        {
          path: "/help",
          element: <Navigate to="/" replace/>,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="text-amber-400 bg-gray-600 text-center p-2 font-bold">
        Latest Routing 
      </div>
      <RouterProvider router={router} />
    </>
     
  );
}

export default App;

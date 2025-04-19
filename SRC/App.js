import React,{lazy,Suspense, useEffect,useState,useContext} from "react";
import ReactDOM from "react-dom/client";;
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserInfo from "./utils/UserInfo";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery =lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState("Dummy User");
  useEffect (()=>{
    const data={
      name:"Bwin Panda",
    }
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <div className="app">
      <UserInfo.Provider value={{loggedInUser:userName, setUserName}}>
        <Header />
        <Outlet />
      </UserInfo.Provider>
    </div>
  </Provider>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
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
          path: "/grocery",
            element: <Suspense fallback="{<h1>Loading...<h1/>}"><Grocery /></Suspense>
        },
        {
          path: "city/hyderabad/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        }
        ],
        errorElement: <Error />
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

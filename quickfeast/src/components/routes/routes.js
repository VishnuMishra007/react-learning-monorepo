
import { lazy, Suspense } from "react";
import AppLayout from "../AppLayout";
// import About from "../body/About";
import { BodyContainer } from "../body/BodyContainer";
import Contacts from "../body/Contacts";
import RestaurantMenu from "../body/RestaurantMenu";
// import { Header } from "../header/Header";
import RouteError from "./RouteError";
import Cart from "../cart/Cart";

const AboutLazy = lazy(()=> { return import('../body/About')});

export const routes = [
    {
        // path: '/', element: <Header/>,
        path: '/', element: <AppLayout/>,
        errorElement: <RouteError/>, //<div><h1>OOps , Something went wrong!!</h1></div>,     //we can use simple jsx element also
        children: [
            {
                index: true, element: <BodyContainer/>
            },
            {
                path: '/about', element: <Suspense fallback={<p>Loading...</p>}><AboutLazy/></Suspense>
            },
            {
                path: '/contact', element: <Contacts/>
            },
            {
                path: '/restaurant/:resId', element: <RestaurantMenu/>
            },
            {
                path: '/cart', element: <Cart/>
            }
        ]
    }
];

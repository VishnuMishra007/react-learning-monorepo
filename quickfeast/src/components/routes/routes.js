
// import { lazy, Suspense } from "react";
// import AppLayout from "../AppLayout";
// // import About from "../body/About";
// import { BodyContainer } from "../body/BodyContainer";
// import Contacts from "../body/Contacts";
// import RestaurantMenu from "../body/RestaurantMenu";
// // import { Header } from "../header/Header";
// import RouteError from "./RouteError";
// import Cart from "../cart/Cart";

// const AboutLazy = lazy(()=> { return import('../body/About')});

// export const routes = [
//     {
//         path: '/', element: <AppLayout/>,
//         errorElement: <RouteError/>,  //we can use simple jsx element also
//         children: [
//            {
//                 path: '', element: <BodyContainer/>
//             },
//             {
//                 path: '/about', element: <Suspense fallback={<p>Loading...</p>}><AboutLazy/></Suspense>
//             },
//             {
//                 path: '/contact', element: <Contacts/>
//             },
//             {
//                 path: '/restaurant/:resId', element: <RestaurantMenu/>
//             },
//             {
//                 path: '/cart', element: <Cart/>
//             }
//         ]
//     }
// ];

import { lazy, Suspense } from "react";
import AppLayout from "../AppLayout";
import { BodyContainer } from "../body/BodyContainer";
import Contacts from "../body/Contacts";
import RestaurantMenu from "../body/RestaurantMenu";
import RouteError from "./RouteError";
import Cart from "../cart/Cart";

// ✅ Lazy-loaded About page
const AboutLazy = lazy(() => import("../body/About"));

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouteError />,

    // 👇 Child routes rendered inside <Outlet /> in AppLayout
    children: [
      {
        path: "",
        element: <h1 className="font-bold text-5xl mt-10 p-3">Body Container</h1>,
      }
    ],
  },
];
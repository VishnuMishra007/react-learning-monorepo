// import { BodyContainer } from './components/body/BodyContainer';
// import { Header } from './components/header/Header';
// import './index.css';

// const App = () => {
//     return(
//         <div className="app-container">
//             <Header/>
//             <br></br>
//             <hr/>
//             <BodyContainer/>
//         </div>
//     );
// };

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './components/routes/routes';

const router = createBrowserRouter(routes, {
    basename: "/quickfeast",
  }
);

const App = () => {
  return <RouterProvider fallbackElement={<div>Loading...</div>} router={router} />;
};

export default App;
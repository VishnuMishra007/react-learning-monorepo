import { Provider } from "react-redux";
import App from "./App";
import reduxstore from "./store/reduxstore";
const { createRoot } = require("react-dom/client");

const rootElement = createRoot(document.getElementById('root'));
rootElement.render(<Provider store={reduxstore}><App/></Provider>);

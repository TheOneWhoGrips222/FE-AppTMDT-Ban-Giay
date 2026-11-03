
import './App.css'
import ListProduct from "./compoments/ListProduct";
import Home from "./pages/Home";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router";

function App() {


  return <RouterProvider router={router}/>
}

export default App

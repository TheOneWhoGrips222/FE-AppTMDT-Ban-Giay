
import './App.css'
import ListProduct from "./compoments/ListProduct";
import Home from "./pages/Home";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {brandsList} from "./data/brands"
import {loadBrand} from "./store/slice/BrandsSlice";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBrand(brandsList))
    })

  return <RouterProvider router={router}/>
}

export default App

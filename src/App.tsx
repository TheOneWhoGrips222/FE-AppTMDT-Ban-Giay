
import './App.css'
import ListProduct from "./compoments/ListProduct";
import Home from "./pages/Home";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {brandsList} from "./data/brands"
import {bannerList} from "./data/banners"
import {loadBrand} from "./store/slice/BrandsSlice";
import {loadBanner} from "./store/slice/BannerSlice";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBrand(brandsList))
        dispatch(loadBanner(bannerList))
    },[dispatch]);

  return <RouterProvider router={router}/>
}
export default App

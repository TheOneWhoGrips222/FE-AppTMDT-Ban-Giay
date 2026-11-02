

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {load} from "../store/slice/ProductSlice";
import {dataProduct} from "../data/products";

export default function ListProduct(){
    const products = useSelector((state : any) => state.products);
    const dispatch = useDispatch();
    useEffect(()=> {
        const listProduct = [
            {
                id: 1,
                name: "Giày Nike Air Force 1 Low White",
                price: "1.250.000 đ",
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60"
            },
            {
                id: 2,
                name: "Giày Adidas Ultraboost Light",
                price: "2.400.000 đ",
                image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&auto=format&fit=crop&q=60"
            },
            {
                id: 3,
                name: "Giày Converse Chuck 70 High",
                price: "1.450.000 đ",
                image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&auto=format&fit=crop&q=60"
            }
        ];
        dispatch(load(dataProduct));
    }, []);

    return (<>

    </>);
}
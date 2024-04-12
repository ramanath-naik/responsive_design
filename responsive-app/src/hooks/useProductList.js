import { useEffect, useState } from "react";

export const useProductList = () =>{
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const productList = await fetch("https://fakestoreapi.com/products");
        const productListJason = await productList.json();
        console.log(productListJason);
        setProducts(productListJason);
    }
    useEffect(()=>{
        getProducts();
    },[])

    return products;
}
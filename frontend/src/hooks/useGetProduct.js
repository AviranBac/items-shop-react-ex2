import { useEffect, useState } from "react";

export const useGetProducts = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then(data => data.json())
            .then(setProducts)
            .catch(console.error);
    }, []);

    return products;
};
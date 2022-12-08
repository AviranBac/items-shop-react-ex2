import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ShopNavbar from "./components/ShopNavbar/ShopNavbar";
import { useEffect, useState } from "react";
import { getProducts } from "./services/ProductService";
import Catalogue from "./components/Catalogue/Catalogue";

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState({});

    const cartUpdateHandler = (product, quantity) => {
        let updatedCartProducts;

        if (quantity > 0) {
            updatedCartProducts = { ...cartProducts, [product._id]: { ...product, quantity } };
        } else {
            const { [product._id]: previousQuantity, ...cartProductsExcludingRemoved } = cartProducts;
            updatedCartProducts = cartProductsExcludingRemoved;
        }

        setCartProducts(updatedCartProducts);
    };

    useEffect(() => {
        getProducts()
            .then(response => {
                response = response
                    .map(product => ({ ...product, quantity: 0 }));
                setAllProducts(response);
            });
    }, []);

    return (
        <BrowserRouter>
            <ShopNavbar />
            <Routes>
                <Route path="/" element={<Catalogue products={allProducts} cartProducts={cartProducts} onCartUpdate={cartUpdateHandler} />} />
                <Route path="/cart" element={<></>} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

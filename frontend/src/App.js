import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ShopNavbar from "./components/ShopNavbar/ShopNavbar";
import { useState } from "react";
import Catalogue from "./components/Catalogue/Catalogue";
import Cart from "./components/Cart/Cart";
import { useGetProducts } from "./hooks/useGetProduct";

function App() {
    const allProducts = useGetProducts()
        .map(product => ({ ...product, quantity: 0 }));
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

    const resetCartHandler = () => setCartProducts({});

    return (
        <BrowserRouter>
            <ShopNavbar />
            <Routes>
                <Route path="/" element={<Catalogue products={allProducts} cartProducts={cartProducts} onCartUpdate={cartUpdateHandler} />} />
                <Route path="/cart" element={<Cart cartProducts={cartProducts} onCartPurchase={resetCartHandler} />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

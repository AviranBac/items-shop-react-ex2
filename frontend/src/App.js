import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ShopNavbar from "./components/ShopNavbar/ShopNavbar";

function App() {
  return (
      <BrowserRouter>
          <ShopNavbar />
          <Routes>
              <Route path="/" element={<></>} />
              <Route path="/cart" element={<></>} />
              <Route path="*" element={<Navigate to='/' />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

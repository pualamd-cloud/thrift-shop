import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";



function App() {
    return (
      <BrowserRouter>
      <Header />
      {/* Ganti anchor <a> di Header menjadi Link agar SPA (lihat catatan di bawah) */}
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </main>
      <Footer />
      </BrowserRouter>
  );
}


export default App;

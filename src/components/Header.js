import { Link } from "react-router-dom";
import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="brand">🛒 Thrift-Shop</div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </header>
    );
}

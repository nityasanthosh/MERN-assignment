import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: "$40", image: "https://via.placeholder.com/150" },
];

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 text-white text-center">My Store</nav>

      {/* Hero Section */}
      <header className="text-center py-10 bg-blue-200">
        <h1 className="text-3xl font-bold">Welcome to My Store</h1>
        <p className="mt-2 text-gray-700">Find the best products here!</p>
      </header>

      {/* Product Section */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 My Store | Follow us: 
          <a href="#" className="text-blue-400 ml-2">Twitter</a>
        </p>
      </footer>
    </div>
  );
}

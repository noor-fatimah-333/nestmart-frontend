"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const backendUrl = process.env.REDIRECT_URL;

      try {
        const res = await fetch(`${backendUrl}/products`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-2xl shadow hover:shadow-lg transition bg-white"
        >
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="mt-3">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">
              {product.brand} • {product.category}
            </p>
            <p className="text-gray-600 mt-1 text-sm">{product.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold text-green-600">
                ${product.price}
              </span>
              <span className="text-sm text-yellow-600">
                ⭐ {product.rating}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              In stock: {product.stock}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-sm text-red-500 mt-1">
                {product.discountPercentage}% OFF
              </p>
            )}
            <button className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

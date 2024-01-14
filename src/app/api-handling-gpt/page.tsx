// pages/ProductList.js
"use client";
import { ProductType } from '../../../types/commonTypes';
import { useState, useEffect } from 'react'; // Import useEffect
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => { // Use useEffect to fetch data when the component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Call the fetchProducts function
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div className="bg-white container px-2 py-4">
      <h1 className="text-3xl font-bold mb-4 text-black text-[70px]">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {products.map((product: ProductType) => (
          <div key={product.id} className="border-2 rounded-sm text-xl p-2 text-black border-b-slate-100 border-grey">
            <img src={product.image} alt={product.title} className="h-40 w-full object-cover mb-2" />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

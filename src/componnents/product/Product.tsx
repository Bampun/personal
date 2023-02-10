import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Product() {
  // const dispatch = useDispatch();
  const [cart, setCaart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetctproducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    fetctproducts();
  }, []);

  return (
    <div className="container product-wrapper py-20">
      <h2 className="text-4xl font-medium mb-10">Products</h2>
      <div className="work grid grid-cols-12 gap-6 gap-y-6">
        {products.map((products: any) => (
          <div key={products.id} className="product-body md:col-span-12 lg:col-span-6 col-span-3 box-shadow rounded-xl p-4 group">
            <img src={products.image} alt="" className="h-40 m-auto" />
            <h2>{products.title}</h2>
            <h4>${products.price}</h4>
            <button className="w-fit block bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-full">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

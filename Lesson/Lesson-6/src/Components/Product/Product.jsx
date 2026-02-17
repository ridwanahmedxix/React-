import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2500,
      brand: "Sony",
      color: "Black",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 3200,
      brand: "Samsung",
      color: "Silver",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1800,
      brand: "Logitech",
      color: "RGB",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 2200,
      brand: "JBL",
      color: "Blue",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <h1 className="bg-cyan-500 text-white text-4xl font-bold p-4 rounded-lg text-center">
        Welcome To The Home Page
      </h1>

      <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
        Explore our latest tech products collection.
      </p>

      {/* Products Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h2>

            <p className="text-gray-500 mt-1">Brand: {product.brand}</p>
            <p className="text-gray-500">Color: {product.color}</p>

            <p className="text-cyan-600 font-bold text-lg mt-3">
              ৳ {product.price}
            </p>

            <button className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

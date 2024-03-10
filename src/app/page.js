"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ShimmerUi from "./components/SimmerUi";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return products?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Product Listing</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-testid="product-card"
      >
        {products?.map((product) => (
          <Link key={product?.id} href={`/product/${product?.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-gray-200 p-4 rounded-lg"
            >
              <div className="h-40 relative">
                <Image
                  src={product?.image}
                  alt={product?.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-xl font-semibold mt-2">{product?.title}</h2>
              <p>{product?.category}</p>
              <div className="flex justify-between">
                <p className="text-gray-600">${product.price}</p>
                <div className="font-semibold text-base">
                  {product?.rating?.rate}⭐
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductDetailsSimmerUI from "@/app/components/ProductDetailsSimmerUI";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <ProductDetailsSimmerUI />;
  }

  return (
    <div className="container mx-auto px-6" data-testid="product-card">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-full md:w-1/2 h-64 mt-7"
        >
          <Image
            src={product?.image}
            alt={product?.title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product?.title}</h1>
          <p>{product?.category}</p>
          <p className="text-gray-600">${product?.price}</p>
          <p className="font-semibold text-base">{product?.rating?.rate}⭐</p>
          <p className="my-4" data-testid="product-description">
            {product?.description}
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

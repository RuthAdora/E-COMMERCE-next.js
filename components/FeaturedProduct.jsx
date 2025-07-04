import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import First from "@/assets/id1.jpg";
import Second from "@/assets/id2.jpg";
import Third from "@/assets/id3.jpg";

const products = [
  {
    id: 1,
    image: First,
    title: "Kente Wrap Dress",
    description: "Bold wrap dress with classic African patterns.",
  },
  {
    id: 2,
    image: Second,
    title: "Tribal Print Bomber",
    description: "Modern bomber jacket with tribal-inspired accents.",
  },
  {
    id: 3,
    image: Third,
    title: "Afro Chic Hoodie",
    description: "Soft cotton hoodie with Afridrape logo detail.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-pink-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            {/* Image container with fixed height */}
            <div className="w-full h-72 relative">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:brightness-75 transition duration-300"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-8 left-8 text-white space-y-2 z-10 group-hover:-translate-y-4 transition duration-300">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-pink-600 px-4 py-2 rounded">
                Buy now{" "}
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                  width={12}
                  height={12}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

import { useState } from "react";
import ProductDetails from "./ProductDetails";

interface productProps {
  title: string;
  image: string;
  price: string;
}

export default function Product({
  title,
  image,
  price,
}: productProps) {
  // product details 
  const [showProductDetails, setShowProductDetails] = useState<boolean>(false);
  const updateShow = () => {
    setShowProductDetails(!showProductDetails);
  };

  if (showProductDetails) {
    return <ProductDetails title={title} image={image} price={price}/>
  }
  
  return (
    <div
      className="flex flex-col items-center scale-95 md:scale-100 h-80 p-2 rounded-xl md:mb-16  
      bg-gray-100 dark:bg-gray-950 md:ml-10 border border-gray-200 dark:border-gray-800 hover:shadow-md hover:dark:shadow-gray-800"
      onClick={() => {
        updateShow();
      }}
    >
      <img src={image} alt="" className="w-44 rounded-lg"/>
      <p className="text-2xl font-semibold text-gray-950 dark:text-white mt-5">
        {title}
      </p>
      <p className="flex flex-row mt-3 text-gray-950 dark:text-white">
        {price}
      </p>
    </div>
  );
}

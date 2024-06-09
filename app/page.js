"use client"
import { useState } from "react";
import Product from "./Components/product/page";
import SliderComponent from "./Home/SliderComponent";
import Catagory from "./Home/Catagory";

const page = () => {

  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading more data with setTimeout
    setTimeout(() => {
      // After loading, you can update your data or UI state here
      setIsLoading(false);
    }, 1000);
  };


  return (
    <div>
      <div className="m-4 flex items-center flex-col">

        <div className="m-2 mt-6">
          <SliderComponent />
        </div> <Catagory />

        <div className="w-full h-1 relative">
          <div className="h-full w-1/3 absolute top-0 left-0 bg-red-500"></div>
          <div className="h-full w-1/3 absolute top-0 left-1/3 bg-blue-500"></div>
          <div className="h-full w-1/3 absolute top-0 left-2/3 bg-green-500"></div>
        </div>
      </div>
      <Product />
      <div className="flex items-center justify-center m-5">
        <button
          onClick={handleLoadMore}
          className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default page;
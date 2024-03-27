"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import NotFound from './NotFound';

const page = () => {

    const { id } = useParams("")

    const [data, setData] = useState([""]);
    const array = [data]


    async function getData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const result = await response.json()
            if (!response.ok) {
                console.log(result.error);
            }
            if (response.ok) {
                setData(result);
                console.log(response.ok);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    console.log("Data ===", array);

    if (id == "undefined") {
        return (
            <div>
                <NotFound />
            </div>
        );
    }
    else {
        return (
            <div>
                {
                    array.map((product, index) => (
                        <div className="py-16">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row -mx-4">
                                    <div className="md:flex-1 px-4">
                                        <figure className="md:h-[460px] h-64 rounded-lg mb-4 flex justify-center">
                                            <img className=" justify-center items-center" src={product.image} alt="Product Image" />
                                        </figure>
                                    </div>
                                    <div className="md:flex-1 px-4">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Name</h2>

                                        <div className="flex mb-4">
                                            <div className="mr-4">
                                                <span className="font-bold text-gray-700">Price:</span>
                                                <span className="text-gray-600">{product.price}</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-gray-700">Availability:</span>
                                                <span className="text-gray-600">In Stock</span>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <span className="font-bold text-gray-700">Select Color:</span>
                                            <div className="flex items-center mt-2">
                                                <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                                                <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                                                <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                                                <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <span className="font-bold text-gray-700">Select Size:</span>
                                            <div className="flex items-center mt-2">
                                                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">S</button>
                                                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">M</button>
                                                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">L</button>
                                                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XL</button>
                                                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XXL</button>
                                            </div>
                                        </div>
                                        <div className=' mb-8'>
                                            <span className="font-bold text-gray-700">Product Description:</span>
                                            <p className="text-gray-600 text-sm mt-2">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex gap-2 mb-4 items-end justify-start">
                                            <button className="w-1/2 btn btn-outline btn-primary">Add to Cart</button>
                                            <button className="w-1/2 btn btn-outline btn-accent">Checkout</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

};

export default page;
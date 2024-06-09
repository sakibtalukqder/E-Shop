"use client"
import { useParams, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import NotFound from './NotFound';
import CartContext from '@/Context/CartContex';
import Link from 'next/link';


const BaseUrl = 'http://localhost:3000/api'

const page = () => {
    
    const user = localStorage.getItem('userId')

    const { id } = useParams("")

    async function getData() {
        try {
            const response = await fetch(`${BaseUrl}/allProduct/${id}`)
            const result = await response.json()
            if (!response.ok) {
                console.log(result.error);
            }
            if (response.ok) {
                setData(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const [data, setData] = useState({});
    const product = data.Product ? data.Product : '';

    // console.log(data.Product);

    const { addItemToCart } = useContext(CartContext)

    const AddToCart = () => {
        addItemToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            stock: product.stock,
            sellerId: product.sellerId,
        })
    }

    const route = useRouter()

    const redirect = () => {
        route.push("/Components/login")
        // window.location.href = `${window.location.origin}/Components/login`
    }


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
                <div className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row-reverse -mx-4 justify-center items-center">
                            <div className="md:flex-1 px-4">
                                <figure className="md:h-[460px] h-64 rounded-lg mb-4 flex justify-center">
                                    <img className=" justify-center items-center" src={product.image} alt="Product Image" />
                                </figure>
                            </div>
                            <div className="md:flex-1 px-4 items-center justify-center">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>

                                <div className="flex mb-4">
                                    <div className="mr-4">
                                        <span className="font-bold text-gray-700">Price:</span>
                                        <span className="text-gray-600">{product.price}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-700">Availability:</span>
                                        <span className="text-gray-600"> ({product.stock}) items in Stock</span>
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

                                <div className=' mb-8'>
                                    <span className="font-bold text-gray-700">Product Description:</span>
                                    <p className="text-gray-600 text-sm mt-2">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="flex gap-2 mb-4 items-end justify-start">
                                    <button onClick={!user ? redirect : AddToCart} className="w-1/2 btn btn-outline btn-primary">Add to Cart</button>
                                    <Link href={'/Outlate/User/checkout'} className="w-1/2 btn btn-outline btn-accent">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default page;
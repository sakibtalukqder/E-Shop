'use client'
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Banner from "./Banner";
import CartContext from "@/Context/CartContex";
import Loader from "./Loader";
import OrderConfirmation from "./OrderConfirmation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BaseUrl = 'http://localhost:3000/api'

const Shipping = () => {

    const [data, setData] = useState()
    const user = data?.user
    // console.log(user);

    const id = localStorage.getItem('userId')

    const getData = async () => {
        try {
            const response = await fetch(`${BaseUrl}/User/${id}`);
            const result = await response.json();
            if (!response.ok) {
                console.log(result.Error);
            }
            if (response.ok) {
                setData(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== 'undefined') {
            getData();
        }
    }, [])

    const { cart,clearCart } = useContext(CartContext);
    const Data = cart?.cartItems ? cart?.cartItems : ''
    const Price = cart?.cartItems?.reduce((prv, item) => (
        prv + item.quantity * item.price
    ), 0)


    const deleveryCharge = 150
    const totalPrice = Price + deleveryCharge;

    const [loaging, setLoading] = useState(false)
    const [popup, setPopup] = useState(false)

    const ConfirmOrder = async () => {
        setLoading(true);

        const Order = {
            userId: parseInt(id),
            totalPrice: totalPrice,
            products: Data
        }

        try {
            const response = await fetch(`${BaseUrl}/Order`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Order)
            });
            const result = await response.json();
            if (!response.ok) {
                console.log(response.Error);
                setLoading(false);
                toast.error("Order is not placed successfully")
            }
            if (response.ok) {
                console.log(result);
                setLoading(false);
                setPopup(true);
                clearCart();
            }
        } catch (error) {
            console.log(error);
        }

    }

    if (loaging) {
        return <Loader />
    }

    return (
        <div>
            {
                popup ? <OrderConfirmation /> : ''
            }
            <ToastContainer />
            <Banner />
            <section className="py-10 bg-gray-50">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
                        <main className="md:w-2/3">
                            <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                                <h2 className="text-xl font-semibold mb-5">Shipping information</h2>

                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <label className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                                        <p className="ml-2">
                                            <span>{user?.presentAddress}</span>
                                            <small className="block text-sm text-gray-400">
                                                {user?.mobileNumber}
                                            </small>
                                        </p>
                                    </label>
                                </div>


                                <Link
                                    href="/Outlate/User/profile/Adress"
                                    className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                                >
                                    <i className="mr-1 fa fa-plus"></i> Edit Your Adress
                                </Link>

                                <div className="my-3">
                                    <label className="flex p-1 border border-gray-200 rounded-md bg-red-50">
                                        <small className="block text-xs text-gray-400">
                                            mantion <span className=" font-bold">Divission,District,Thana,Union,Area,Street</span> clearly
                                        </small>
                                    </label>
                                </div>

                                <div className="flex justify-end space-x-2 mt-10">
                                    <Link
                                        href="/Outlate/User/checkout"
                                        className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                                    >
                                        Back
                                    </Link>
                                    <button onClick={() => ConfirmOrder()} className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                                        Checkout
                                    </button>
                                </div>
                            </article>
                        </main>
                        <aside className="md:w-1/3">
                            <article className="text-gray-600" style={{ maxWidth: "350px" }}>
                                <h2 className="text-lg font-semibold mb-3">Summary</h2>
                                <ul>
                                    <li className="flex justify-between mb-1">
                                        <span>Amount:</span>
                                        <span>${Price}</span>
                                    </li>
                                    <li className="flex justify-between mb-1">
                                        <span>Delevary Charge:</span>
                                        <span>${deleveryCharge}</span>
                                    </li>
                                    <li className="border-t flex justify-between mt-3 pt-3">
                                        <span>total Amount:</span>
                                        <span className="text-gray-900 font-bold">${totalPrice}</span>
                                    </li>
                                </ul>

                                <hr className="my-4" />

                                <h2 className="text-lg font-semibold mb-3">Items in cart</h2>

                                {
                                    Array.isArray(Data) ?
                                        Data?.map((product, index) => (
                                            <figure key={index} className="flex items-center mb-4 leading-5">
                                                <div>
                                                    <div className="block relative w-20 h-20 rounded p-1 border border-gray-200">
                                                        <img
                                                            width="50"
                                                            height="50"
                                                            src={product.image}
                                                            alt="Title"
                                                        />
                                                        <span className="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
                                                            {product.quantity}
                                                        </span>
                                                    </div>
                                                </div>
                                                <figcaption className="ml-3">
                                                    <p> {product.title}</p>
                                                    <p className="mt-1 text-gray-400">Total: ${product.price}</p>
                                                </figcaption>
                                            </figure>
                                        )) : ''
                                }


                            </article>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shipping;
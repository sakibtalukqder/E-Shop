'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SideBar from '../../Sidebar';
import { useParams } from 'next/navigation';

const BaseUrl = 'http://localhost:3000/api'

const page = () => {

    const [data, setData] = useState({});

    console.log(data);

    const { id } = useParams("")

    async function getData() {
        try {
            const response = await fetch(`${BaseUrl}/Order/${id}`)
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


    return (
        <SideBar>
            <section className="bg-blue-100 mt-3">
                <div className="container max-w-screen-xl mx-auto">
                    <h2 className="text-3xl font-semibold p-4">Order details</h2>
                </div>
            </section>

            <section className="py-4">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="flex flex-col items-start w-full justify-center gap-4">

                        <aside className="w-full">
                            <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 lg:p-5">

                                <h2 className="text-lg font-semibold my-3">Shipping Adress</h2>
                                <label className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                                    
                                    <ul className="py-1 w-full">
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Name : </span>
                                            <span>{data?.user?.name}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Mailling Adress : </span>
                                            <span>{data?.user?.presentAddress}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Email : </span>
                                            <span>{data?.user?.email}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Mobile no : </span>
                                            <span>{data?.user?.mobileNumber}</span>
                                        </li>
                                    </ul>

                                </label>

                                <h2 className="text-lg font-semibold my-3">Payment Info : </h2>
                                <label className="mt-3 flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                                    <ul className="py-1 w-full">
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>Price Without delevery Charge:</span>
                                            <span>${data?.totalPrice - 150}</span>
                                        </li>
                                        <li className="flex justify-between text-gray-600  mb-1">
                                            <span>delevery Charge:</span>
                                            <span>${150}</span>
                                        </li>
                                        <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                                            <span>Total price:</span>
                                            <span>${data?.totalPrice}</span>
                                        </li>
                                    </ul>
                                </label>

                            </article>
                        </aside>

                        <section className=" bg-blue-100 w-full mt-3">
                            <div className="container w-full mx-auto">
                                <h2 className="text-3xl font-semibold p-4">{data?.orderEdProducts?.length || 0} Item(s) in Order</h2>
                            </div>
                        </section>

                        <main className="w-full">
                            <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                {
                                    Array.isArray(data?.orderEdProducts) ? data?.orderEdProducts?.map((product, index) => (
                                        <div key={"index"}>
                                            <div className="flex flex-wrap lg:flex-row gap-5  mb-4">
                                                <div className="w-full lg:w-2/5 xl:w-2/4">
                                                    <figure className="flex leading-5">
                                                        <div>
                                                            <figure className="flex items-center justify-center w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                                                <img src={product.image} alt="Title" />
                                                            </figure>
                                                        </div>
                                                        <figcaption className="ml-3">
                                                            <p>
                                                                <Link href={`/Components/product/${"product.id"}`} className="hover:text-blue-600">
                                                                    {product.name}
                                                                </Link>
                                                            </p>
                                                            <p className="mt-1 text-gray-400"> Seller: {product.sellerId}</p>
                                                            <div className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-900  outline-none custom-input-number"
                                                            >quantity : {product.quantity}</div>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                                <div>
                                                    <div className="leading-5">
                                                        <p className="font-semibold not-italic"> ${product.price * product.quantity.toFixed(2)}</p>
                                                        <small className="text-gray-400">
                                                            {" "}
                                                            ${product.price} / per item{" "}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-4" />
                                        </div>
                                    )) : <></>
                                }
                            </article>
                        </main>
                    </div>
                </div>
            </section>
        </SideBar>
    );
};

export default page;
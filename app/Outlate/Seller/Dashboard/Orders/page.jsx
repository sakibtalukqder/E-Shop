'use client'
import React, { useEffect, useState } from 'react';
import SellerDashboard from '../SellerDashboard';
import Link from 'next/link';

const BaseUrl = 'http://localhost:3000/api'

const page = () => {

    
    const id = localStorage.getItem('userId')
    const [data, setData] = useState()
    console.log(data);

    const getData = async () => {
        try {
            const response = await fetch(`${BaseUrl}/Seller/Order/${id}`);
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


    return (
        <SellerDashboard>
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6 mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <div className="flex-auto block py-4 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 text-dark border-neutral-200 text-center">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th className="pb-3 text-start">Product</th>
                                                <th className="pb-3 text-center">Quantity</th>
                                                <th className="pb-3 text-center">Price</th>
                                                <th className="pb-3 text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                data !== '' ?
                                                    data?.map((product, index) => (
                                                        <tr key={index} className="border-b border-dashed last:border-b-0">
                                                            <td className="p-3 pl-0">
                                                                <div className="flex items-center">
                                                                    <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                        <img
                                                                            src={product.image}
                                                                            className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className="flex flex-col justify-start">
                                                                        <Link href="#">
                                                                            <div className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                                                                                {product.name}
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            
                                                            <td className="p-3 pr-0 text-center">
                                                                <span className="font-semibold text-md/normal">{product.quantity}</span>
                                                            </td>
                                                            <td className="p-3 pr-0 text-center">
                                                                <span className="font-semibold text-md/normal">{product.price}</span>
                                                            </td>
                                                            <td className="p-3 pr-0 ">
                                                                <Link href={`Orders/${product.id}`} className="btn btn-sm">
                                                                    <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                        View Order{' '}
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            strokeWidth="1.5"
                                                                            stroke="currentColor"
                                                                            className="w-4 h-4"
                                                                        >
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                                        </svg>
                                                                    </span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )) : <> You Have no order </>
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SellerDashboard>
    );
};

export default page;
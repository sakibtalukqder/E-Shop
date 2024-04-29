'use client'
import React, { useEffect, useState } from 'react';
import SideBar from '../Sidebar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BaseUrl = 'http://localhost:3000/api'

const page = () => {

    const id = localStorage.getItem('userId')

    const [data, setData] = useState()

    console.log(data);

    async function getData() {
        try {
            const response = await fetch(`${BaseUrl}/Order/User/${id}`);
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
        getData();
    }, [])

    const router = useRouter();

    // Function to handle row click
    const handleRowClick = (orderId) => {
        router.push(`Order/${orderId}`);
    };

    return (
        <SideBar>

            <section className=" bg-blue-100 mt-2">
                <div className="container max-w-screen-xl mx-auto p-4">
                    <h2 className="text-3xl font-semibold px-3">{data?.length || 0} Order</h2>
                </div>
            </section>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                createdAt
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Paiyable Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((order, index) => (
                                <tr key={index} onClick={() => handleRowClick(`${order.id}`)} className='cursor-pointer hover:bg-gray-100'>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        {order?.createdAt}
                                    </th>
                                    <td className="px-6 py-4">
                                        {order?.totalPrice}
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </SideBar>
    );
};

export default page;
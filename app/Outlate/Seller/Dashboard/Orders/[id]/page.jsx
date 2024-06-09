'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
const BaseUrl = 'http://localhost:3000/api'
const logo = '/logo.jpeg'

const page = () => {

    const { id } = useParams("")

    console.log(id);

    const [data, setData] = useState('')

    console.log(data);

    const getData = async () => {
        try {
            const response = await fetch(`${BaseUrl}/Seller/OrderDetails/${id}`);
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

    const totalPrice = parseInt(data?.price * data?.quantity)

    const printComponents = useRef()
    const PrintDetails = useReactToPrint({
        content: () => printComponents.current
    })


    return (
        <>

            <div ref={printComponents} className="">
                <div className="max-w-3xl mx-auto p-6">
                    {/* <!-- Header with Logo and Contact Info --> */}
                    <div className="flex justify-between items-center mb-6">
                        <img src={logo} alt="Harmoni Kreatif Group Logo" className="h-24" />
                        <div>
                            <p className="text-gray-800 font-bold text-4xl">E-shop Limited</p>
                            <p className='text-end'>e-shop.netlify.app</p>
                        </div>
                    </div>

                    {/* <!-- Personal Information Section --> */}
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">

                        <h2 className="text-lg font-semibold mb-4">Castomer's Details</h2>
                        <div className="grid grid-cols-3 w-full">
                            <div>Name </div> <div className='col-span-2'> {data?.user?.name}</div>
                            <div>Email </div> <div className='col-span-2'> {data?.user?.email}</div>
                            <div>Mobile </div> <div className='col-span-2'> {data?.user?.mobileNumber}</div>
                            <div>Mailling Adress</div> <div className='col-span-2'> {data?.user?.presentAddress}</div>
                        </div>
                    </div>


                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <div className="flex items-center justify-between">
                            <div className='3/4'>
                                <h2 className="text-lg font-semibold mb-4">Order Details #{data?.id}</h2>
                                <div className="grid grid-cols-2 w-full">
                                    <div>placed at </div> <div className="text-"> {data?.order?.createdAt} </div>
                                    <div>Product Name </div> <div> {data?.name}</div>
                                    <div>Price </div> <div> {data?.price}</div>
                                    <div>Quantity </div> <div> x{data?.quantity}</div>
                                    <div>Total Amount </div> <div> {totalPrice}</div>
                                </div>

                            </div>
                            <div className="w-[30%]">
                                <div className=" h-52 w-52 overflow-hidden flex items-center justify-center">
                                    <img src={data?.image} alt={data?.name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end mb-4 md:mx-[24%]'><button className='px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none' onClick={PrintDetails}>Print Details</button></div>

        </>
    );
};

export default page;

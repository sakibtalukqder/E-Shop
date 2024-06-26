'use client'
import React, { useEffect, useState } from 'react';
import SideBar from '../Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseUrl = 'http://localhost:3000/api'


const page = () => {

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
                setName(result?.user?.name)
                setEmail(result?.user?.email)
                setPresentAdress(result?.user?.presentAddress)
                setMobileNumber(result?.user?.mobileNumber)
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

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [presentAddress, setPresentAdress] = useState()
    const [mobileNumber, setMobileNumber] = useState()

    const putData = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch(`${BaseUrl}/User/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, email, presentAddress, mobileNumber
                })
            });
            const result = await response.json();
            if (!response.ok) {
                toast.error("Update Unsuccesfull .... !!")
                console.log(result.Error);
            }
            if (response.ok) {
                setData(result);
                toast.success('Successfully Updated Data .... !!')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SideBar>
            <ToastContainer />
            <div className="p-2 md:p-4">
                <form onSubmit={putData} className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                    <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>
                    <div className="grid max-w-2xl mx-auto mt-8">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:flex-row sm:space-y-0">
                            <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                src="https://res.cloudinary.com/daoltrjyw/image/upload/v1698531037/auj0spicgnv0sy2evqzw.jpg"
                                alt="Bordered avatar" />

                            <div className="flex flex-col space-y-5 sm:ml-8">
                                <button type="button"
                                    className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                    Change picture
                                </button>
                                <button type="button"
                                    className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                    Delete picture
                                </button>
                            </div>
                        </div>

                        <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                            <div
                                className="flex flex-col items-center w-full space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 ">
                                <div className="w-full">
                                    <label htmlFor="first_name"
                                        className="block text-sm font-medium text-indigo-900">
                                        Full Name
                                    </label>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text" id="first_name"
                                        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                        placeholder="Your first name" defaultValue={user?.name} />
                                </div>

                            </div>

                            <div className="">
                                <label htmlFor="email"
                                    className="block text-sm font-medium text-indigo-900 mt-4">
                                    Email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" id="email"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    defaultValue={user?.email} required />
                            </div>
                            {
                                user?.role === 'ADMIN' ? <>
                                    <div className="">
                                        <label htmlFor="profession"
                                            className="block text-sm font-medium text-indigo-900 mt-4">
                                            Role
                                        </label>
                                        <input
                                            // onChange={(e) => setDesignation(e.target.value)}
                                            type="text" id="profession"
                                            className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                            defaultValue={user?.role} required />
                                    </div>
                                </> : ''
                            }
                        </div>
                        <div className="flex justify-end my-4">
                            <button type="submit"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </SideBar>
    );
};

export default page;
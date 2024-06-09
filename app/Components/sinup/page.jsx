"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseUrl = "http://localhost:3000/api"

const imgUrl = "https://cdni.iconscout.com/illustration/premium/thumb/sign-up-3391266-2937870.png"

const page = () => {

    const route = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPass, setConPass] = useState('');

    const SinupUser = async (e) => {
        e.preventDefault();
        if (name != '' && email != '' && password != '' && conPass != '') {
            if (conPass === password) {

                const data = { name, email, password, presentAddress: "", mobileNumber: "" }

                const response = await fetch(`${BaseUrl}/User`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

                const notify = await response.json()

                if (!response.ok) {
                    toast.error(notify.message)
                    console.log(notify.message);
                }

                if (response.ok) {
                    toast.success(notify.message);
                    console.log(notify.message);
                    route.push('login')
                }

            } else {
                toast.error("Password Not match")
            }
        } else {
            toast.error("Fill all the fields")
        }
    }

    return (
        <div className=" text-gray-900 flex justify-center">
            <ToastContainer />
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-8 rounded-sm">
                    <div className="my-1 flex flex-col items-center">
                        <div className="w-full flex-1 mt-4">
                            <div className="flex flex-col items-center">
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-sm py-2 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Sign Up with Google
                                    </span>
                                </button>

                            </div>

                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or Sign Up with Cartesian E-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <input onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-2 rounded-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="text" placeholder="Full Name" />
                                <input onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 rounded-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                                    type="email" placeholder="Email" />
                                <input onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 rounded-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                                    type="password" placeholder="Password" />
                                <input onChange={(e) => setConPass(e.target.value)}
                                    className="w-full px-4 py-2 rounded-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                                    type="password" placeholder="Confirm Password" />
                                <button onClick={SinupUser}
                                    className="mt-5 tracking-wide font-semibold btn-success btn text-white-500 w-full py-2 rounded-sm hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg className="w-6 h-5 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ms-2">
                                        Sign Up
                                    </span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by Cartesian Kinetics
                                    <a href="#" className="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a> <br />
                                    Already have an account ? 
                                    <Link href="login" className="border-b border-gray-500 text-blue-600 border-dotted">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 justify-center bg-white border-gray-800 border-spacing-2 rounded-sm text-center hidden lg:flex">
                    <div className="ms-1 w-1/2 bg-cover bg-center bg-no-repeat me-6"
                        style={{ backgroundImage: `url(${imgUrl})` }} >
                    </div>
                </div>
            </div>
        </div >
    );
};

export default page;
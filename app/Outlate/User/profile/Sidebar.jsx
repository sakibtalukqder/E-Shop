"use client"

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SideBar = ({ children }) => {

    

    const putData = () => {

    }


    return (
        <div className="bg-white w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
            <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">

                    <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>

                    <Link href="Account" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border">
                        Your Profile
                    </Link>

                    <Link href="Adress" className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border">
                        Your Adress
                    </Link>

                    <Link href="Order"
                        className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border ">
                        Your Orders
                    </Link>

                </div>
            </aside>
            <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">

                {children}

            </main>
        </div>
    );
};

export default SideBar;


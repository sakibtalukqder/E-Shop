import Head from 'next/head';
import Link from 'next/link';
import { Fragment } from 'react';

export default function SellerDashboard({children}) {
  return (
    <Fragment>
      <Head>
        <title>Seller Dashboard</title>
      </Head>
      <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-64 bg-white shadow-md lg:min-h-screen">
          <div className="py-4 px-6 border-b border-gray-200">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-gray-500 text-sm mt-2">Welcome, Seller!</p>
          </div>
          <nav className="mt-6">
            <Link href={'/Outlate/Seller/Dashboard/Orders'} className="flex items-center py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
              <span>Orders</span>
            </Link>
            <Link href={'/Outlate/Seller/Dashboard/Products'} className="flex items-center py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
              <span>Products</span>
            </Link>
            <Link href={"/Outlate/Seller/PostProduct"} className="flex items-center py-2 px-6 text-gray-600 hover:bg-gray-100 hover:text-gray-700">
              <span>Upload Product</span>
            </Link>
            {/* Add more sidebar links as needed */}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 overflow-scroll">
          
          {/* Add your main content here */}
          {children}
        </div>
      </div>
    </Fragment>
  );
}

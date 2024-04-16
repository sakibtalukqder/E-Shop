import Link from 'next/link';
import React from 'react';

export const Cart = ({ id, name, discription, price, Image }) => {
    return (
        <div className='w-72'>

            <div className="bg-white p-4 shadow-md rounded-md">
                <figure className='h-44 w-68 flex overflow-hidden justify-center'>
                    <img src={Image} alt={name} className="items-center justify-center" />
                </figure>
                <h2 className="text-lg font-semibold mt-2 h-8 overflow-hidden">{name}</h2>
                <p className="text-gray-600 text-sm h-6 overflow-hidden">{discription}</p>
                <div className="mt-2 flex justify-between items-center">
                    <span className="text-md text-orange-500 font-semibold">${price}</span>
                    <Link href={`/Components/product/${id}`} className="bg-blue-500 text-white px-4 py-1 rounded-md">See More</Link>
                </div>
            </div>

        </div>
    );
};

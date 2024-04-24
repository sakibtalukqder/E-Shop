'use client'
import CartContext from '@/Context/CartContex';
import Link from 'next/link';
import { useContext } from 'react';
import Logout from './Logout';

const UserIcon = () => {

    const { cart } = useContext(CartContext)
    const Length = cart?.cartItems?.length

    return (

        <div className="dropdown dropdown-end items-center mx-2 md:mx-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold  border-2 border-green-500 bg-blue-700 text-white rounded-full -top-2 -end-2">
                    <div>{Length}</div>
                </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li className='btn w-full btn-sm'><Link href={'/Outlate/User/profile'}>Profile</Link></li>
                <li>
                    <Link className='btn w-full btn-sm' href={'/Outlate/User/checkout'}>Checkout
                        <span className="badge badge-primary badge-sm">{Length}</span></Link>
                </li>
                <><Logout /></>
            </ul>
        </div>
    );
};

export default UserIcon;
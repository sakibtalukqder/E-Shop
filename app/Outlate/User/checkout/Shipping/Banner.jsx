import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="py-5 sm:py-7 bg-blue-100">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
                        <li className="inline-flex items-center">
                            <Link href="/" className="text-gray-600 hover:text-blue-600">
                                Shipping
                            </Link>
                            <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default Banner;
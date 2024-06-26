import React from 'react';

const Loader = () => {
    return (
        <div className="max-w-xl h-screen flex items-center justify-center mx-auto">
            <div className="p-4 bg-white border border-primary rounded-md">
                <div className="flex">
                    <div className="mr-4 bg-gray-200 border border-gray-200 h-16 w-16 rounded animate-pulse"></div>
                    <div className="space-y-1 flex flex-col w-full">
                        <div className="flex w-full items-center">
                            <div className="bg-gray-200 border border-gray-200 w-60 h-5 animate-pulse"></div>
                            <div className="ml-4 bg-ternary w-12 h-5 animate-pulse"></div>
                        </div>
                        <div className="bg-gray-200 border border-gray-200 w-36 h-5 animate-pulse"></div>
                        <div className="bg-gray-200 border border-gray-200 w-full h-44 animate-pulse">
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
                        <span className="bg-tertiary h-1 w-1 rounded animate-pulse"></span>
                        <div className="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
                    </div>
                    <div className="bg-gray-200 border border-gray-200 w-16 h-5 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
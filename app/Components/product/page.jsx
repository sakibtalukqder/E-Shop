"use client"
import { useEffect, useState } from 'react';
import { Cart } from './Cart';

const BaseUrl = 'http://localhost:3000/api'


const Product = () => {

    const [data, setData] = useState([""])

    async function getData() {
        try {
            const response = await fetch(`${BaseUrl}/allProduct`);
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

    useEffect(()=>{
        getData();
    },[])

    return (
        <div className='m-4'>
            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    data?.map((product,index) => (
                        <div key={index}>
                            <Cart id={product.id} name={product.name} Image={product.image} discription={product.description} price={product.price} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Product;
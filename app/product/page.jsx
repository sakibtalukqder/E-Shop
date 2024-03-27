"use client"
import { useEffect, useState } from 'react';
import { Cart } from './Cart';

const productApi = [
    {
        id: 1,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        id: 2,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        id: 3,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        id: 4,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        id: 5,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        id: 6,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        id: 6,
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "00Taka",
    },
    {
        name: "Product Name",
        Image: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        Discription: "Discription",
        Price: "1999TK",
    },
]

const Product = () => {

    const [data, setData] = useState([""])

    async function getData() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            if (!response.ok) {
                console.log(result.Error);
            }
            if (response.ok) {
                console.log(response.ok);
                setData(result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    console.log(data);


    return (
        <div className='m-4'>
            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    data.map((product,index) => (
                        <div key={index}>
                            <Cart id={product.id} name={product.title} Image={product.image} discription={product.description} price={product.price} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Product;
"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const imgUrl = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"

const BaseUrl = "http://localhost:3000/api"

const page = () => {

    const Session = useSession()
    const Seller = Session?.data?.user
    console.log(Seller);

    const rout = useRouter()
    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState()

    function Upload(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576 * 4) {
            return toast("Max Upload Size 4MB");
        } else {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    async function UploadImage() {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "sjxeivct");
        try {
            let res = await fetch("https://api.cloudinary.com/v1_1/daoltrjyw/image/upload", {
                method: "POST",
                body: data,
            });
            const urlData = await res.json();
            return urlData.url;
        } catch (error) {
            console.log(error);
        }
    }

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)
    const [Catagory, setCatagory] = useState('')

    const postProduct = async (e) => {
        e.preventDefault();
        const url = await UploadImage(image);

        const data = { image: url, name, description, price: parseInt(price), stock: parseInt(stock), Catagory, sellerId: Seller.id }
        console.log(data);
        const responce = await fetch(`${BaseUrl}/allProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })

        const notify = await responce.json()

        if (!responce.ok) {
            console.log(notify.messege);
            toast.success(notify.messege);
        }
        if (responce.ok) {
            console.log(notify.messege);
            toast.success(notify.messege);
            rout.push('/')
        }
    }


    return (
        <form onSubmit={postProduct} className='flex-col md:flex-row flex gap-4 items-center justify-center py-4 md:m-4'>
            <ToastContainer />
            <div className='w-1/3'>
                <label className="form-control w-full max-w-xs">
                    <figure className="w-52 h-52 lg:w-80 lg:h-80 rounded overflow-hidden flex justify-center items-center" >
                        <img
                            src={preview || image || imgUrl}
                            alt="Insert Image"
                        />
                    </figure>

                    <input accept="image/png, image/jpg, image/jpeg, image/webp" placeholder='Select an Image' onChange={Upload} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </label>
            </div>
            <div className='w-1/2'>
                <label className="form-control w-full gap-3">
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Product name" className="input input-bordered w-full" />
                    <input onChange={(e) => setCatagory(e.target.value)} type="text" placeholder="Product Catagory" className="input input-bordered w-full" />
                    <input onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Product Price" className="input input-bordered w-full" />
                    <input onChange={(e) => setStock(e.target.value)} type="number" placeholder="Product Stock" className="input input-bordered w-full" />
                    <textarea onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Product Discription" className="input input-bordered w-full" />
                    <button type='submit' className='btn w-1/2 btn-primary'>Submit</button>
                </label>
            </div>
        </form>
    );
};

export default page;
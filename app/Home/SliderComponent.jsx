
"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import Catagory from "./Catagory";

const url = [
    "/Carosel/cImage-1.jpg",
    "/Carosel/cImage-2.jpg",
    "/Carosel/cImage-3.jpg",
    "/Carosel/cImage-4.jpg",
    "/Carosel/cImage-5.jpg",
    "/Carosel/cImage-6.jpg",
    "/Carosel/cImage-7.jpg",
    "/Carosel/cImage-8.jpg",
]

const api = "/Carosel/img10.jpg"

export const SliderComponent = () => {
    return (
        <div className="flex flex-wrap gap-3 items-start justify-center">

            <div className="w-2/3">
                <Carousel width={600} height={700} slideInterval={5000} showControls={true} indicators={true}>
                    {
                        url.map((url, index) => (
                            <Image key={index} src={url} width={600} height={600} alt={`slider-${index}`} />
                        ))
                    }
                </Carousel>

                <Catagory />

            </div>

            <div className="w-1/4">
                <Image src={api} width={700} height={700} alt="slider" />
            </div>

        </div>
    )
}

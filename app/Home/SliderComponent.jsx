
"use client";
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

export const SliderComponent = () => {
    return (
        <div className="flex-col items-center justify-center w-[80%] rounded-md">
            <div className="carousel justify-center w-full">
                {
                    url.map((url, index) => (
                        <div key={index} id={`item${index}`} className="carousel-item w-full shadow-lg">
                            <img src={url} className="w-full" alt={`slider-${index}`} />
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-center w-full py-2 gap-2">
                {
                    url.map((url, index) => (
                        <a key={index} href={`#item${index + 1}`} className="btn btn-xs">{index + 1}</a>
                    ))
                }
            </div>
            <Catagory />
        </div>
    )
}

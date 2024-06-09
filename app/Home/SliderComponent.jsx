'use client'

import classNames from 'embla-carousel-class-names'
import { Carousel } from 'keep-react'

const SliderComponent = () => {

    const url = [
        "/Carosel/cImage-1.jpg",
        "/Carosel/cImage-2.jpg",
        "/Carosel/cImage-3.jpg",
        "/Carosel/cImage-4.jpg",
        "/Carosel/cImage-5.jpg",
        "/Carosel/cImage-6.jpg",
        "/Carosel/cImage-7.jpg",
        "/Carosel/cImage-8.jpg",
    ];

    return (
        <Carousel options={{ loop: true }} plugins={[classNames()]}>
            <Carousel.Slides>
                {url.map((_, index) => (
                    <Carousel.Item key={index} className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
                        <img className="rounded-xl" src={_} alt="Carousel Item" />
                    </Carousel.Item>
                ))}
            </Carousel.Slides>
            <Carousel.Control>
                <Carousel.Buttons>
                    <Carousel.PrevButton />
                    <Carousel.NextButton />
                </Carousel.Buttons>
                <Carousel.Indicators />
            </Carousel.Control>
        </Carousel>
    )
};

export default SliderComponent;
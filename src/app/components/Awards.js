"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// images
import award1 from "../../../public/a1.png";
import award2 from "../../../public/a2.png";
import award3 from "../../../public/a3.png";
import award4 from "../../../public/a4.png";
import award5 from "../../../public/a5.png";
import award6 from "../../../public/a6.png";
import award7 from "../../../public/a7.png";
import award8 from "../../../public/a8.png";
import award9 from "../../../public/a9.png";
import award10 from "../../../public/a10.png";
import award11 from "../../../public/a11.png";
import award12 from "../../../public/a12.png";

const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const slides = [
    {
        image: award1,
        title: "Broker of the year (asset Finance) 2023",
        description: "WeMoney",
    },
    {
        image: award2,
        title: "best medium-size brokerage (asset Finance) 2023",
        description: "WeMoney",
    },
    {
        image: award3,
        title: "best digital first broker (car loans) 2023",
        description: "WeMoney",
    },
    {
        image: award4,
        title: "best for innovation 2023 finalist",
        description: "WeMoney",
    },
    {
        image: award5,
        title: "fintech awards 2023 finalist",
        description: "FINNIES",
    },
    {
        image: award6,
        title: "Better Business Awards 2023",
        description: "The Advisor",
    },
    {
        image: award7,
        title: "Emerging Broker of The Year 2022",
        description: "CAFBA",
    },
    {
        image: award8,
        title: "young ENTREPRENEUR of the year 2022",
        description: "Business News Australia",
    },
    {
        image: award9,
        title: "Rising Star 2022",
        description: "NFC Aggregation",
    },
    {
        image: award10,
        title: "MVP 2021",
        description: "NFC Aggregation",
    },
    {
        image: award11,
        title: "Best Emerging Broker 2021",
        description: "NFC Aggregation",
    },
    {
        image: award12,
        title: "Rising Star 2020",
        description: "Connective",
    },
];

export default function Navbar() {
    return (
        <section className="bg-white py-10 lg:pt-20 xl:pt-28 overflow-hidden">
            <div className="container">
                <h2 className="text-5xl lg:text-8xl font-extrabold text-dark leading-none text-center xl:text-start mb-8 lg:mb-16">More Awards.</h2>
                <Slider className="!inline-flex -mx-3" {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-x-5 w-[360px] px-3">
                                <div className="flex-none">
                                    <Image src={slide.image} alt={slide.title} width={120} height={120} />
                                </div>
                                <div className="flex-grow">
                                    <p className="uppercase text-gray-900 font-bold leading-none mb-2">
                                        {slide.title}
                                    </p>
                                    <p className="text-gray-400 font-extrabold leading-none mb-0">
                                        {slide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

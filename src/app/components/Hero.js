"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// images
import logo from "../../../public/whitelogo.svg";
import awardimg from "../../../public/award.svg";
import star from "../../../public/star.svg";
import news from "../../../public/7news.png";
import robot3 from "../../../public/robot_3_0.png";
import lo3 from "../../../public/lo_3_0.png";
import car from "../../../public/car.png";
import equipment from "../../../public/w2.png";
import personal from "../../../public/w3.png";
import business from "../../../public/w4.png";

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 1000,
    cssEase: "linear",
};

function HeroContent({ quote, setQuote, step, setStep, nextStep, prevStep, updateQuote, handleSubmit }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        // Get the full search string and split it by the '?' character
        const searchString = window.location.search.toLowerCase().slice(1).split('?').join('&');
        const params = new URLSearchParams(searchString);

        // Extract the necessary parameters
        const partnerId = params.get('partnerid');
        const gclid = params.get('gclid');
        const fbclid = params.get('fbclid');

        // Update the quote state with the extracted parameters
        setQuote((prevQuote) => ({
            ...prevQuote,
            externalPartnerId: partnerId || prevQuote.externalPartnerId,
            gclid: gclid || prevQuote.gclid,
            fbclid: fbclid || prevQuote.fbclid,
        }));
    }, [searchParams, setQuote]);

    return (
        <div className="flex flex-col">
            <div className="h-[500px] md:h-[590px] w-full lg:w-[500px] 3xl:w-[610px] p-6 pt-10 bg-white text-primary rounded-2xl loanwidget relative" id="loanwidgetwrap">
                {/* <div className="absolute top-0 end-0 -mt-6 me-6">
                    {lo3 && (
                        <Image src={lo3} alt="lo3" className="" width={148} height={54} loading="eager" />
                    )}
                </div> */}
                {step === 1 && (
                    <>
                        <p className="text-2xl md:text-4xl font-bold text-center mb-1">Discover your perfect loan</p>
                        <p class="text-lg md:text-2xl text-center mb-8">with no impact to your credit score!</p>
                        <div className="flex flex-wrap -m-2">
                            <div className="w-1/2 md:w-1/3 p-2">
                                <button
                                    onClick={() => {
                                        updateQuote("type", "CAR_LOAN");
                                        nextStep();
                                    }}
                                    className="w-full group text-center pt-3 md:pt-5 rounded-xl bg-opacity-25 hover:bg-opacity-100 hover:scale-105 transition-all duration-500 bg-lightpurple text-primary"
                                >
                                    {car && (
                                        <Image
                                            src={car}
                                            alt="car"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500 inline-block"
                                            width={144}
                                            height={85}
                                            loading="eager"
                                        />
                                    )}
                                    <p className="font-bold mt-6">Car</p>
                                </button>
                            </div>
                            <div className="w-1/2 md:w-1/3 p-2">
                                <button
                                    onClick={() => {
                                        updateQuote("type", "EQUIPMENT_LOAN");
                                        updateQuote("usage", "COMMERCIAL_FULL_DOC");
                                        setStep(3);
                                    }}
                                    className="w-full group text-center pt-3 md:pt-5 rounded-xl bg-opacity-25 hover:bg-opacity-100 hover:scale-105 transition-all duration-500 bg-lightpurple text-primary"
                                >
                                    {equipment && (
                                        <Image
                                            src={equipment}
                                            alt="equipment"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500 inline-block"
                                            width={144}
                                            height={85}
                                            loading="eager"
                                        />
                                    )}
                                    <p className="font-bold mt-6">Equipment</p>
                                </button>
                            </div>
                            <div className="w-1/2 md:w-1/3 p-2">
                                <button
                                    onClick={() => {
                                        updateQuote("type", "PERSONAL_LOAN");
                                        setStep(3);
                                    }}
                                    className="w-full group text-center pt-3 md:pt-5 rounded-xl bg-opacity-25 hover:bg-opacity-100 hover:scale-105 transition-all duration-500 bg-lightpurple text-primary"
                                >
                                    {personal && (
                                        <Image
                                            src={personal}
                                            alt="personal"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500 inline-block"
                                            width={144}
                                            height={85}
                                            loading="eager"
                                        />
                                    )}
                                    <p className="font-bold mt-6">Personal</p>
                                </button>
                            </div>
                            <div className="w-1/2 md:w-1/3 p-2">
                                <button
                                    onClick={() => {
                                        updateQuote("type", "BUSINESS_LOAN");
                                        updateQuote("usage", "COMMERCIAL_FULL_DOC");
                                        setStep(3);
                                    }}
                                    className="w-full group text-center pt-3 md:pt-5 rounded-xl bg-opacity-25 hover:bg-opacity-100 hover:scale-105 transition-all duration-500 bg-lightpurple text-primary"
                                >
                                    {business && (
                                        <Image
                                            src={business}
                                            alt="business"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500 inline-block"
                                            width={144}
                                            height={85}
                                            loading="eager"
                                        />
                                    )}
                                    <p className="font-bold mt-6">Business</p>
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {step === 2 && quote.type === "CAR_LOAN" && (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-2xl md:text-4xl font-bold !leading-none mb-0">Is it for consumer or commercial use?</p>
                            <button
                                onClick={() => {
                                    updateQuote("usage", "CONSUMER");
                                    prevStep();
                                }}
                                className="bg-primary/10 hover:bg-primary/30 py-2 px-3 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap -m-2">
                            <div className="w-1/2 md:w-1/3 p-2">
                                <button
                                    onClick={() => {
                                        updateQuote("usage", "CONSUMER");
                                        nextStep();
                                    }}
                                    className="w-full group text-center pt-3 md:pt-5 rounded-xl bg-opacity-25 hover:bg-opacity-100 hover:scale-105 transition-all duration-500 bg-lightpurple text-primary"
                                >
                                    {personal && (
                                        <Image
                                            src={personal}
                                            alt="personal"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500 inline-block"
                                            width={144}
                                            height={85}
                                            loading="eager"
                                        />
                                    )}
                                    <p className="font-bold mt-6">Consumer</p>
                                </button>
                            </div>
                            <div className="w-1/2 md:w-1/3 p-2">
                                <button
                                    onClick={() => {
                                        updateQuote("usage", "COMMERCIAL_FULL_DOC");
                                        nextStep();
                                    }}
                                    className="w-full group text-center pt-3 md:pt-5 rounded-xl bg-opacity-25 hover:bg-opacity-100 hover:scale-105 transition-all duration-500 bg-lightpurple text-primary"
                                >
                                    {business && (
                                        <Image
                                            src={business}
                                            alt="business"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-500 inline-block"
                                            width={144}
                                            height={85}
                                            loading="eager"
                                        />
                                    )}
                                    <p className="font-bold mt-6">Commercial</p>
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {step === 3 && (
                    <>
                        <div className="flex flex-col justify-between items-end h-full">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-2xl md:text-4xl font-bold !leading-none mb-0">How much do you want to borrow?</p>
                                    <button
                                        onClick={() => {
                                            if (quote.type === "CAR_LOAN") {
                                                setStep(2);
                                            } else {
                                                setStep(1);
                                            }
                                        }}
                                        className="bg-primary/10 hover:bg-primary/30 py-2 px-3 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between my-8 gap-x-5">
                                    <p className="text-4xl md:text-6xl text-gray-300 font-bold text-center mb-0">
                                        ${quote.amount.toLocaleString()}
                                    </p>
                                </div>
                                <input
                                    type="range"
                                    min="5000"
                                    max="500000"
                                    step="1000"
                                    value={quote.amount}
                                    onChange={(e) =>
                                        updateQuote("amount", Number(e.target.value))
                                    }
                                    className="w-full mb-6"
                                    style={{
                                        background: `linear-gradient(to right, #5614bb ${((quote.amount - 5000) / 495000) * 100
                                            }%, #D3D3D3 ${((quote.amount - 5000) / 495000) * 100
                                            }%)`,
                                        appearance: "none",
                                        height: "25px",
                                        borderRadius: "50rem",
                                    }}
                                />
                            </div>
                            <button
                                onClick={nextStep}
                                className="bg-secondary text-white hover:bg-primary transition-all p-4 w-[150px] rounded-full text-sm font-bold">
                                Next
                            </button>
                        </div>
                    </>
                )}
                {step === 4 && (
                    <>
                        <div className="flex flex-col justify-between items-end h-full">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-2xl md:text-4xl font-bold !leading-none mb-0">What&apos;s your preferred loan term?</p>
                                    <button
                                        onClick={prevStep}
                                        className="bg-primary/10 hover:bg-primary/30 py-2 px-3 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex justify-between items-center my-8 gap-x-5">
                                    <p className="text-4xl md:text-6xl text-gray-300 font-bold text-center mb-0">
                                        {quote.term} years
                                    </p>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="7"
                                    step="1"
                                    value={quote.term}
                                    onChange={(e) =>
                                        updateQuote("term", Number(e.target.value))
                                    }
                                    className="w-full mb-6"
                                    style={{
                                        background: `linear-gradient(to right, #5614bb ${((quote.term - 1) / 6) * 100
                                            }%, #D3D3D3 ${((quote.term - 1) / 6) * 100}%)`,
                                        appearance: "none",
                                        height: "25px",
                                        borderRadius: "50rem",
                                    }}
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="bg-secondary text-white hover:bg-primary transition-all p-4 w-[150px] rounded-full text-sm font-bold">
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default function Hero() {
    // State management for the multi-step form
    const [step, setStep] = useState(1);

    const [quote, setQuote] = useState({
        type: "CAR_LOAN",
        usage: "CONSUMER",
        amount: 50000,
        term: 5,
        countryCode: "NZ",
        source: "GothamTechNz",
        sourceUrl: "https://www.loanoptions.co.nz",
        targetSystem: "SKYNET",
        externalPartnerId: "2722",
        gclid: "",
        fbclid: "",
    });

    useEffect(() => {
        localStorage.setItem("quote", JSON.stringify(quote));
    }, [quote]);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const updateQuote = (key, val) => {
        setQuote((prevQuote) => ({
            ...prevQuote,
            [key]: val,
        }));
    };

    const handleSubmit = () => {
        localStorage.setItem("quote", JSON.stringify(quote));
        if (typeof window !== "undefined") {
            window.location.href = "/application";
        }
    };

    return (
        <section className="bg-gradient-to-b from-primary to-[#5614BB] text-white pt-8 lg:py-24 overflow-hidden relative z-10">
            <div className="px-4 xl:pl-0 xl:pe-6 2xl:pe-24">
                <div className="w-full xl:w-9/12 3xl:w-10/12 xl:ml-auto">
                    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-12">
                        <div className="w-full lg:w-1/2 xl:w-fit order-2 lg:order-1">
                            <Suspense fallback={<div>Loading...</div>}>
                                <HeroContent
                                    quote={quote}
                                    setQuote={setQuote}
                                    step={step}
                                    setStep={setStep}
                                    nextStep={nextStep}
                                    prevStep={prevStep}
                                    updateQuote={updateQuote}
                                    handleSubmit={handleSubmit}
                                />
                            </Suspense>
                        </div>
                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                            <h1 className="font-extrabold text-5xl md:text-7xl 3xl:text-8xl leading-none mb-6 text-center lg:text-left">More Options. More You.</h1>
                            <p className="font-extrabold text-3xl xl:text-4xl 3xl:text-5xl text-center lg:text-left">Compare Loans Online <span class="font-caveat uppercase font-normal text-lightpurple">Even faster</span></p>
                            <p className="text-lightpurple 3xl:text-lg font-extrabold mb-12 text-center lg:text-left">Compare realistic loan options with powerful data & AI matching technology</p>
                            <Slider className="mb-12 !hidden lg:!inline-flex" {...settings}>
                                {Array.from({ length: 26 }, (_, index) => (
                                    <div key={index}>
                                        <div className="-ml-3">
                                            <Image
                                                src={`/award${index + 1}.png`} // Pull images based on their dynamic names
                                                alt={`Award ${index + 1}`}
                                                width={80}    // Provide default width
                                                height={81}   // Provide default height
                                                layout="responsive"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="flex flex-wrap 3xl:flex-nowrap items-center justify-center lg:justify-start gap-6">
                                <div className="w-fit">
                                    <Link
                                        href="./"
                                    >
                                        {logo && (
                                            <Image
                                                src={logo}
                                                alt="logo"
                                                className=""
                                                width={191}
                                                height={26}
                                                loading="eager"
                                            />
                                        )}
                                    </Link>
                                </div>
                                <div className="w-fit">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 font-semibold text-xs md:text-base"
                                    >
                                        <div className="relative">
                                            {awardimg && (
                                                <Image
                                                    src={awardimg}
                                                    alt="award"
                                                    className=""
                                                    width={16}
                                                    height={16}
                                                    loading="eager"
                                                />
                                            )}
                                            <span className="h-[4px] w-[4px] bg-red-600 inline absolute top-0 end-0 rounded-full"></span>
                                        </div>
                                        <span>Award-Winning Business</span>
                                    </Link>
                                </div>
                                <div className="w-fit">
                                    <Link
                                        href="#"
                                        target="_blank"
                                        className="flex items-center gap-3 font-semibold text-xs md:text-base"
                                    >
                                        <div className="relative">
                                            {star && (
                                                <Image
                                                    src={star}
                                                    alt="star"
                                                    className=""
                                                    width={16}
                                                    height={16}
                                                    loading="eager"
                                                />
                                            )}
                                            <span className="h-[4px] w-[4px] bg-red-600 inline absolute top-0 end-0 rounded-full"></span>
                                        </div>
                                        <span>862 Google Reviews</span>
                                    </Link>
                                </div>
                                <div className="w-fit block lg:hidden">
                                    <Link
                                        href="#"
                                        target="_blank"
                                        className="flex items-center gap-3 font-semibold text-xs md:text-base"
                                    >
                                        <span className="text-gray-300">As seen on</span>
                                        <div className="relative">
                                            {news && (
                                                <Image
                                                    src={news}
                                                    alt="news"
                                                    className=""
                                                    width={94}
                                                    height={24}
                                                    loading="eager"
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className="relative">
                            <p className="font-caveat text-xl absolute uppercase text-center text-lightpurple font-bold italic max-w-[150px] top-[260px] tracking-wide -start-20 -rotate-12">
                                <span className="animate-bounce absolute w-[140px]">
                                    Kia ora! im ailo, the smartest robot ever
                                </span>
                            </p>
                            {robot3 && (
                                <Image
                                    src={robot3}
                                    alt="robot3"
                                    className=""
                                    width="534"
                                    height="745"
                                    loading="eager"
                                />
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
            <Slider className="mt-10 -mb-6 !inline-flex lg:!hidden" {...settings}>
                {Array.from({ length: 26 }, (_, index) => (
                    <div key={index}>
                        <div className="-ml-3">
                            <Image
                                src={`/award${index + 1}.png`} // Pull images based on their dynamic names
                                alt={`Award ${index + 1}`}
                                width={120}    // Provide default width
                                height={81}   // Provide default height
                                layout="responsive"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="relative lg:absolute left-0 bottom-0 lg:-z-10 -ms-4 -me-28 lg:mx-0">
                <Image
                    src="/home-new-banner.png" // Pull images based on their dynamic names
                    alt="home new banner"
                    width={832}    // Provide default width
                    height={748}   // Provide default height
                />
            </div>
        </section >
    )
}

"use client";
import Link from "next/link";
import Image from "next/image";

//images
import logo from "../../../public/whitelogo.svg";
import news from "../../../public/7news.png";
import phone from "../../../public/phone.svg";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 bg-primary text-white py-3 xl:py-4 px-4 md:px-5">
            <div className="flex flex-wrap xl:flex-nowrap justify-center lg:justify-end items-center gap-y-4">
                <div className="flex items-center">
                    <Link
                        href="#"
                        target="_blank"
                        className="hidden md:flex items-center gap-3 font-semibold py-2 px-2 md:px-4 xl:px-7"
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
                    <Link
                        href="tel:0800 467 006"
                        className="group flex flex-none items-center gap-3 font-semibold py-2 px-2 md:px-4 xl:px-7"
                    >
                        <div className="relative">
                            {phone && (
                                <Image
                                    src={phone}
                                    alt="phone"
                                    className=""
                                    width={16}
                                    height={17}
                                    loading="eager"
                                />
                            )}
                            <span className="animate-ping absolute -top-[1px] -end-[1px] inline-flex h-[6px] w-[6px] rounded-full bg-red-800"></span>
                            <span className="h-[4px] w-[4px] bg-red-600 inline absolute top-0 end-0 rounded-full"></span>
                        </div>
                        <span className="w-[124px] group-hover:hidden transition-all duration-500">
                            Talk to a Human
                        </span>
                        <span className="w-[124px] hidden group-hover:inline transition-all duration-500">
                            0800 467 006
                        </span>
                    </Link>
                    <Link
                        href="https://loanoptions.ai/affiliate"
                        className="ms-2 md:ms-4 xl:ms-7 text-lg px-2 md:px-4 xl:px-6 py-2 rounded-full bg-secondary text-white hover:bg-white hover:text-secondary transition-all font-bold"
                    >
                        Become a Partner
                    </Link>
                </div>
            </div>
        </header>
    );
}
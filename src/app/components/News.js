
import Image from "next/image";

import news from "../../../public/7news.png";

export default function News() {
    return (
        <section className="bg-white py-10 lg:py-20 2xl:py-28 overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-10 md:gap-20 3xl:gap-28">
                    <div className="w-full lg:w-1/2">
                        <iframe width="100%" height="410" className="rounded-2xl overflow-hidden" src="https://www.youtube.com/embed/wJ5pzbNUyko?si=WPSuyyh7vryGf7nE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center justify-center lg:justify-start gap-3 font-semibold mb-5"
                        >
                            <span>As seen on</span>
                            <div className="relative">
                                {news && (
                                    <Image
                                        src={news}
                                        alt="7news"
                                        width={153}
                                        height={47}
                                    />
                                )}
                            </div>
                        </div>
                        <h2 className="text-5xl lg:text-[64px] leading-none font-extrabold mb-5 text-center lg:text-left">Lunchtime Loans</h2>
                        <div className="text-center lg:text-left"><p>On Channel 7, we featured our exclusive segment on various loan options designed to meet your financial needs. Catch the replay to learn more about how we can help you achieve your financial goals.</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
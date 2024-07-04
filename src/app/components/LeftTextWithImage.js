import Image from "next/image";

//images
import globe from "../../../public/globe.png";

export default function LeftTextWithImage() {
    return (
        <section className="bg-[#161529] relative z-1 overflow-hidden pt-10 lg:pt-20 xl:py-32">
            <div className="container">
                <div className="row">
                    <div className="xl:w-1/2">
                        <article className="text-white relative">
                            <h2 className="text-5xl md:text-8xl font-extrabold leading-none mb-5 md:mb-12">
                                Kia Ora! We&apos;re Coming To NZ
                                <span className="text-secondary">.</span>
                            </h2>
                            <article className="pt-5 xl:pt-7">
                                <p className="text-2xl md:text-4xl font-extrabold mb-8">We&apos;re bringing our <span className="text-lightpurple">AI</span> to <span className="text-lightpurple">NZ</span>.</p>
                                <div className="text-lg md:text-xl font-bold">
                                    <p>
                                        We&apos;re thrilled to announce our arrival in New Zealand, and we&apos;re excited to introduce our cutting-edge AI technology to the Kiwi community. Stay tuned for innovative solutions and personalized AI experiences as we embark on this exciting journey to New Zealand.
                                    </p>
                                </div>
                            </article>
                        </article>
                    </div>
                </div>
            </div>
            <Image
                src={globe}
                alt="globe"
                className="block xl:absolute bottom-0 end-0 h-full w-full xl:w-auto"
                width={600}
                height={528}
            />
        </section>
    );
}

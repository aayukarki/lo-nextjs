import Image from "next/image";

//images
import dave from "../../../public/dave.png";

export default function CenterTextWithImage() {
    return (
        <section className="bg-[#5614BB] relative z-1 overflow-hidden pt-10 md:pt-20 xl:py-32">
            <div className="container">
                <div className="row">
                    <div className="xl:w-1/2">
                        <article className="text-white relative text-center">
                            <h2 className="text-5xl md:text-8xl font-extrabold leading-none mb-5 md:mb-10">
                                & We&apos;re Recruiting
                                <span className="text-secondary">.</span>
                            </h2>
                            <div className="text-xl font-bold mb-10">
                                <p>Want to be a part of our new LoanOptions.ai New Zealand team?</p>
                                <p>We&apos;re on the lookout for passionate individuals who are ready to shape the future of AI in New Zealand. Come be a part of our journey and make a significant impact in the world of artificial intelligence. Explore exciting career opportunities with us today!</p>

                            </div>
                            <a href="https://loanoptions.ai/careers/" className="block xl:inline-block bg-secondary text-white hover:bg-white hover:text-secondary transition-all text-lg font-bold rounded-full px-12 py-4">Apply Now</a>
                        </article>
                    </div>
                </div>
            </div >
            <Image
                src={dave}
                alt="dave"
                className="block xl:absolute bottom-0 end-0 h-full w-full xl:w-auto"
                width={600}
                height={528}
            />
        </section >
    );
}

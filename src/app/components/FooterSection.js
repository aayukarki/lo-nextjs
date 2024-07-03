
import Image from "next/image";

//images
import footerimg from "../../../public/footerimg.png";
import f1 from "../../../public/f1.svg";
import f2 from "../../../public/f2.svg";
import f3 from "../../../public/f3.svg";
import f4 from "../../../public/f4.svg";
import f5 from "../../../public/f5.svg";

const socialsData = [
    { link: "https://www.facebook.com/loanoptionsai/", image: f1 },
    { link: "https://twitter.com/loanoptions_ai", image: f2 },
    { link: "https://www.instagram.com/loanoptions.ai/", image: f3 },
    { link: "https://www.linkedin.com/company/loanoptions-ai/", image: f4 },
    { link: "https://www.youtube.com/channel/UC8s1I-7bqp1rKKsrJV5KQuA/", image: f5 },
];

export default function FooterSection() {
    return (
        <section className="bg-[#161529] text-white py-12 md:py-24 overflow-hidden">
            <div className="container">
                <div className="flex flex-wrap xl:flex-nowrap items-center justify-between bg-primary rounded-lg p-8 md:p-12 mb-12">
                    <div className="xl:w-7/12">
                        <p className="text-6xl font-extrabold">
                            More Options, More You
                            <span className="text-secondary rounded-full">.</span>
                        </p>
                        <p className="text-xl font-bold">New Zealand’s first artificial intelligence loan marketplace for all types of loans</p>
                    </div>
                    <div className="w-fit xl:w-auto mt-4 xl:mt-0">
                        <a
                            href="/application"
                            className="block md:inline-block text-center bg-secondary text-white hover:bg-white hover:text-secondary transition-all text-md md:text-lg font-bold rounded-full px-4 md:px-12 py-4"
                        >
                            Try our FREE Loan Matching Technology
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-5 mb-12">
                    <div className="w-fit order-2 md:order-1">
                        <Image src={footerimg} alt="footerimg" />
                    </div>
                    <div className="w-fit order-1 md:order-2">
                        <div className="flex gap-x-3">
                            {socialsData.map((social) => (
                                <div>
                                    <a href={social.link} target="_blank" className="flex items-center justify-center w-10 h-10 border border-gray-800 hover:bg-secondary transition-all rounded-full">
                                        <Image src={social.image} alt="socialimg" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center -mx-4">
                    <div className="md:w-2/3 px-4">
                        <div className="text-xs leading-loose font-bold">
                            <p>"All applications are subject to the credit providers credit assessment and loan eligibility criteria. Terms, conditions, fees and charges apply. Information provided is factual information only, and is not intended to imply any recommendation about any financial product(s) or constitute tax advice. If you require financial or tax advice you should consult a licensed financial or tax adviser.</p>
                            <p>*Your interest rate may be different and is based on a number of factors, including your credit history, the information you provide and our assessment of your application. We'll confirm your interest rate upon submission of your application. Rates, repayments and fees are estimates and are subject to change at any time.Turnaround Time is based on average approval time for personal and car loans between 1 August 2023 - 1 September 2023.</p>
                            <p>*The comparison rate is based on a $30,000 secured loan over 5 years. WARNING: This comparison rate applies only to the example or examples given. Different amounts and terms will result in different comparison rates. Costs such as redraw fees or early repayment fees, and cost savings such as fee waivers, are not included in the comparison rate but may influence the cost of the loan. Eligibility criteria, terms and conditions apply."</p>
                        </div>
                    </div>
                    <div className="md:w-1/3 px-4">
                        <div className="font-bold">
                            <p className="mb-0">Entity name - Gotham Tech Limited T/as NZ LoanOptions.ai</p>
                            <p className="mb-0">NZBN: 9429050975334</p>
                            <p className="mb-0">Financial Service Provider Number: FSP1005864</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
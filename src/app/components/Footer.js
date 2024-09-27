import Image from "next/image";

//images
import aiims from "../../../public/aiims_003.svg";

export default function Footer() {
    return (
        <footer className="py-5 bg-[#0f0e1e] text-white">
            <div className="container">
                <div className="grid justify-center items-center lg:justify-between">
                    <div className="flex flex-col md:flex-row justify-center items-center font-bold text-xs md:text-sm gap-y-3">
                        <div className="flex flex-wrap md:flex-nowrap text-center justify-center items-center gap-3 md:gap-4 md:mr-4">
                            Copyright {new Date().getFullYear()} <span>|</span> LoanOptions.ai{" "}
                            <span>|</span> All Rights Reserved{" "}
                            <span className="hidden md:inline-block">|</span>
                            <a href="https://loanoptions.ai/scope-of-service.pdf" target="_blank" className="hover:text-secondary">Scope of Service</a>
                            <span className="hidden md:inline-block">|</span>
                            <a href="https://loanoptions.ai/nz-privacy.pdf" target="_blank" className="hover:text-secondary">NZ 3.0 Privacy</a>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a href="https://www.aiims.com.au/like-our-work/" target="_blank" rel="home">
                            <Image src={aiims} alt="footerimg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
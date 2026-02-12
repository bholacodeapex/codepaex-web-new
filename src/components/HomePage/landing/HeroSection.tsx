import React from "react";
import Image from "next/image";
import "./HeroSection.css";
import Link from "next/link";
function HeroSection() {
    return (
        <section className="lg:container mx-auto flex justify-center items-between mb-28" id="hero-section">
            <div className="text-center sm:w-2/3 mt-16">
                <h1 className="leading-tight my-6 text-4xl sm:text-5xl font-[600]">
                    Your Excellent team of Web & Mobile Experts
                </h1>
                <p className="text-xl my-10">
                    Experience the Pinnacle of Innovation, discover what's possible with CodeApex
                </p>
                <div className="my-10">
                    <Link
                        href="//api.whatsapp.com/send?phone=+918802888885&text=Hey CodeApex!\n"
                        className={`p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border border-[#3B3486] transition duration-500 ease-out contact-button`}
                    >
                        Let's Build
                    </Link>
                </div>
                <div className="mt-12 w-[100%]">
                    <Image
                        src={"/Images/Hero3.png"}
                        className="w-full"
                        style={{ margin: '0 auto' }}
                        alt=""
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
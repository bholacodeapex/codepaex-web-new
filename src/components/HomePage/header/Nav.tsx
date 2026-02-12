
import React from "react";
import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import MobileSheet from "../other/sheet/Sheet";

function Navbar() {
    return (
        <div>
            <div className="header-2">
                <nav className="py-2 md:py-2">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <a href="/">
                                <Image
                                    src={process.env.PUBLIC_URL + "/Images/logos/CodeApex Logo Horizontal.png"}
                                    className="w-[150px] max-w-[150px]"
                                    width={150}
                                    height={150}
                                    alt="codeapex-horizontal-logo"
                                />
                            </a>
                            <button className="md:hidden" id="navbar-toggle">
                                <MobileSheet />

                            </button>
                        </div>
                        <div
                            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                            id="navbar-collapse"
                        >
                            <Link
                                href="#about"
                                className="p-2 lg:px-4 md:mx-2 group transition duration-300"
                            >
                                About us
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                            </Link>
                            <Link
                                href="#testimonials"
                                className="p-2 lg:px-4 md:mx-2 group transition duration-300"
                            >
                                Testimonials
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                            </Link>
                            <Link
                                href="#portfolio"
                                className="p-2 lg:px-4 md:mx-2 group transition duration-300"
                            >
                                Projects
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                            </Link>
                            <Link
                                href="//api.whatsapp.com/send?phone=+918802888885&text=Hey CodeApex!\n"
                                className={`p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border border-[#3B3486] transition duration-500 ease-out contact-button`}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;

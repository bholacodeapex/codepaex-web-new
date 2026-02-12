
import React from "react";
import Image from "next/image";

function Footer() {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-[hsl(var(--background))] border-t-[1px] border-solid border-[#eaeaea]">
            <div className="mx-auto max-w-screen-xl text-center">
                <a
                    href="/"
                    className="flex justify-center items-center"
                >
                    <Image
                        src={"/Images/logos/CodeApex Logo Symbol.png"}
                        className="max-w-[150px]"
                        width={150}
                        height={150}
                        alt="codeapex-symbol-logo"
                    />
                </a>
                <p className="mb-6 text-gray-500">
                    Empowering Digital Excellence: Secure, Robust Web and Mobile Solutions.
                </p>
                <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-black">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Blog
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                            Contact
                        </a>
                    </li>
                </ul>
                <span className="text-sm text-gray-500 sm:text-center dark:text-black">
                    © 2023-2024{" "}
                    <a href="#" className="hover:underline">
                        CodeApex™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;

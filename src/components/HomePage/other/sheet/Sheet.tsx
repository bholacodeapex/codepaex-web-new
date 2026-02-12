
/* eslint-disable react/no-unescaped-entities */

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "../../../../components/HomePage/ui/sheet";
import Link from "next/link";
import { BiMenu, } from "react-icons/bi";
export default function MobileSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <BiMenu size={28} className="" />
            </SheetTrigger>
            {/* bg-[#4F42B3]  */}
            <SheetContent className="min-w-[100vw] bg-opacity-100 text-white font-[900] z-[1001] border-none glass-bg">
                <div
                    className="mt-3 w-full h-full flex flex-col justify-center items-center text-[2rem] space-y-6"
                    id="navbar-collapse"
                >
                    <Link href="#about" className="group transition duration-300">
                        <SheetClose>About us</SheetClose>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                    </Link>
                    <Link href="#testimonials" className="group transition duration-300">
                        <SheetClose>Testimonials</SheetClose>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                    </Link>
                    <Link href="#portfolio" className="group transition duration-300">
                        <SheetClose>Projects</SheetClose>
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                    </Link>
                    <Link
                        href="//api.whatsapp.com/send?phone=+918802888885&text=Hey CodeApex!\n"
                        className="group transition duration-300">
                        Contact us
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#3B3486]"></span>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}


import { Breadcrumbs } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { slug = "home" } }) {
    const breadcrumbItems = [
        { title: "Dashboard", link: "/dashboard" },
        { title: "Legacie", link: "/legacie-switzerland" },
    ];

    const aboutLegacie = [
        {
            title: "Client",
            desc: "Legacie",
        },
        {
            title: "Industry",
            desc: "Elderly Care, Memory Preservation, Publishing",
        },
        {
            title: "Services",
            desc: "Web Development, Admin Dashboard, Book Publishing Integration",
        },
        {
            title: "Technologies",
            desc: "React.js, Supabase, Google APIs",
        },
    ];

    const keyFeatures = [
        {
            title: "Establishment Management",
            desc: "Super admins can create and manage multiple establishments, each with its own unique profile, staff members, and resident roster.",
        },
        {
            title: "Resident Profiles",
            desc: "Comprehensive resident profiles storing personal information, medical details, family connections, and their life story journey.",
        },
        {
            title: "52 Life Questions",
            desc: "A carefully curated set of 52 questions that residents answer to document their life stories, memories, and wisdom for future generations.",
        },
        {
            title: "Staff Management",
            desc: "Add and manage staff members for each establishment with role-based permissions to ensure proper care and story collection.",
        },
        {
            title: "Book Generation",
            desc: "Automatically compile resident answers and memories into beautifully formatted books that families can cherish forever.",
        },
        {
            title: "Family Connection",
            desc: "Family members can follow their loved one's journey, add memories, and eventually receive the completed life story book.",
        },
    ];

    const themeColors = {
        primary: "#b98352", // Main brand color
        secondary: "#e6d5b8", // Light complementary color
        light: "#faf7f0", // Whitish background
        gradientFrom: "#b98352",
        gradientTo: "#8b5e34", // Darker brown for gradients
    };

    return (
        <div className="h-full flex flex-col py-12 sm:py-16 md:py-20">
            <div className="text-white w-full min-h-[32rem] sm:min-h-[36rem] md:h-[40rem] lg:h-[44rem] xl:h-[48rem] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b98352] via-[#a67344] to-[#8b5e34] animate-gradient-xy"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#e6d5b8_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

                <div className="container mx-auto flex flex-col h-full relative z-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                        <Breadcrumbs
                            items={breadcrumbItems}
                            childClass="text-white/90"
                            className="justify-center"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold max-w-6xl mx-auto drop-shadow-2xl">
                            Légacie - Vos histoires, pour toujours
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-white/90 drop-shadow-lg">
                            A platform where elderly residents share their life stories, creating beautiful keepsake books for their families.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-white/80 text-sm sm:text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white font-medium shadow-lg">
                                System Design
                            </div>
                            <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-white/80 text-sm sm:text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white font-medium shadow-lg">
                                Backend Development
                            </div>
                            <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-white/80 text-sm sm:text-base bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white font-medium shadow-lg">
                                API Integration
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="h-full z-12 mx-auto container flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-8xl">
                {/* Hero Image - Replace with actual Legacie image */}
                <Image
                    src={"/Images/projects/legacie/establishment-dashboard.png"}
                    alt="Legacie - Elderly Care and Memory Preservation"
                    width={1600}
                    height={900}
                    priority
                    className="w-full h-auto rounded-xl sm:rounded-2xl sm:-mt-24 md:-mt-32 border shadow-lg"
                />

                {/* About Grid - With warm gradient hover */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
                    {aboutLegacie.map((ele, index) => (
                        <div
                            key={index}
                            className="group relative border rounded-xl sm:rounded-2xl transition-all duration-500 bg-white hover:border-transparent overflow-hidden shadow-sm hover:shadow-xl"
                        >
                            {/* Warm gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#b98352] to-[#e6d5b8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Content */}
                            <div className="relative z-10 flex flex-col p-5 sm:p-6 md:p-7 lg:p-8 gap-3 sm:gap-4 group-hover:text-gray-900 transition-colors duration-500">
                                <div className="text-gray-500 group-hover:text-gray-700 font-semibold text-xs sm:text-sm lg:text-base uppercase tracking-wider transition-colors duration-500">
                                    {ele.title}
                                </div>
                                <div className="font-medium text-xl sm:text-2xl md:text-3xl leading-tight text-gray-900 group-hover:text-gray-900 transition-colors duration-500">
                                    {ele.desc}
                                </div>
                            </div>
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#b98352] to-[#8b5e34] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* About Project Section */}
                <div className="flex flex-col lg:flex-row mt-8 sm:mt-12 lg:mt-16 gap-8 sm:gap-10 lg:gap-4">
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-8 xl:gap-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                            About Legacie
                        </h2>
                        <div className="flex gap-2 sm:gap-3 flex-wrap">
                            <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#faf7f0] font-medium text-xs sm:text-sm lg:text-base hover:bg-gradient-to-r hover:from-[#b98352] hover:to-[#e6d5b8] hover:text-gray-900 transition-all duration-300">
                                Establishment Management
                            </div>
                            <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#faf7f0] font-medium text-xs sm:text-sm lg:text-base hover:bg-gradient-to-r hover:from-[#b98352] hover:to-[#e6d5b8] hover:text-gray-900 transition-all duration-300">
                                Resident Care
                            </div>
                            <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#faf7f0] font-medium text-xs sm:text-sm lg:text-base hover:bg-gradient-to-r hover:from-[#b98352] hover:to-[#e6d5b8] hover:text-gray-900 transition-all duration-300">
                                Life Stories
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-8 xl:gap-12">
                        <div className="flex justify-between items-center">
                            <div className="font-medium text-gray-500 text-sm sm:text-base">1 Months</div>
                            <div className="font-medium text-gray-500 text-sm sm:text-base">Duration</div>
                        </div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
                            A compassionate platform connecting generations through stories, creating lasting legacies for families to cherish forever.
                        </p>
                        <div>
                            <Link
                                href="#"
                                className="group/btn relative inline-block p-[2px] rounded-[0.7rem] overflow-hidden transition-all duration-500 hover:shadow-xl"
                            >
                                {/* Gradient border animation */}
                                <span className="absolute inset-[-1000%] bg-gradient-to-r from-[#b98352] via-[#e6d5b8] to-[#b98352] animate-spin-slow group-hover/btn:from-[#8b5e34] group-hover/btn:via-[#b98352] group-hover/btn:to-[#8b5e34]"></span>
                                {/* Button content */}
                                <span className="inline-flex h-full w-full items-center justify-center rounded-[0.7rem] bg-white px-6 py-2.5 text-sm font-medium text-[#b98352] backdrop-blur-3xl transition-all duration-500 group-hover/btn:bg-gradient-to-r group-hover/btn:from-[#b98352] group-hover/btn:to-[#8b5e34] group-hover/btn:text-white">
                                    Visit Website
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Feature Highlight - 52 Questions Card */}
                <div className="mt-8 sm:mt-12 lg:mt-16">
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#b98352] to-[#8b5e34] p-1">
                        <div className="rounded-2xl sm:rounded-3xl bg-white p-8 sm:p-10 md:p-12">
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                <div className="lg:w-1/3">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#b98352] to-[#e6d5b8] flex items-center justify-center shadow-lg">
                                        <span className="text-4xl font-bold text-white">52</span>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 text-center lg:text-left">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                        The 52 Life Questions
                                    </h3>
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                        Every resident answers 52 carefully crafted questions about their life journey - from childhood memories to life lessons, from love stories to words of wisdom. These answers are beautifully compiled into a keepsake book that families will treasure for generations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Establishment Dashboard Image */}
                <div className="mt-8 sm:mt-12 lg:mt-16">
                    <Image
                        src={"/Images/projects/legacie/52_questions.png"}
                        alt="Legacie Establishment Management Dashboard"
                        width={1600}
                        height={900}
                        className="w-full h-auto rounded-xl sm:rounded-2xl border shadow-md"
                    />
                </div>

                {/* Problem & Solution Section */}
                <div className="flex flex-col w-full mt-8 sm:mt-12 lg:mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 sm:gap-8 lg:gap-10">
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 h-full">
                            <h3 className="text-center md:text-left text-2xl sm:text-3xl font-semibold">
                                Problem
                            </h3>
                            <div className="group relative border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 bg-[#faf7f0] text-black h-full hover:shadow-xl transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#b98352]/20 to-[#e6d5b8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <p className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                    Elderly residents in care facilities often have rich life stories that go untold and unrecorded. Families struggle to capture and preserve these precious memories before they're lost forever. Traditional methods of journaling or recording are often too cumbersome for elderly residents.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            <h3 className="text-center md:text-left text-2xl sm:text-3xl font-semibold">
                                Solution
                            </h3>
                            <div className="group relative border rounded-2xl sm:rounded-3xl bg-[#b98352] text-white p-5 sm:p-6 md:p-7 lg:p-8 h-full hover:shadow-xl transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <p className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                    We created Legacie - a platform where super admins manage establishments, staff members care for residents, and a structured 52-question journey captures life stories. The system automatically compiles answers into beautiful printed books that families can treasure forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 mt-8 sm:mt-12 lg:mt-16">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                                Our Process
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                We began by understanding the unique needs of elderly care facilities in Switzerland. Working closely with care providers and families, we designed a system that's intuitive for staff, accessible for residents, and meaningful for families. The 52 questions were carefully curated by geriatric care specialists and storytellers.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Multi-Tenant Architecture
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                            We built a robust multi-tenant system where super admins can create and manage multiple establishments. Each establishment operates independently with its own staff, residents, and story collections, while sharing the same powerful platform.
                        </p>
                    </div>

                    {/* Book Generation Image */}
                    <Image
                        src={"/Images/projects/legacie/book-generation.png"}
                        alt="Legacie Book Generation"
                        width={1600}
                        height={900}
                        className="w-full h-auto rounded-xl sm:rounded-2xl border shadow-md"
                    />

                    <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Book Generation System
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                            Once residents complete their 52-question journey, our system automatically compiles their answers, photos, and family contributions into a professionally formatted book. Families can preview the book online and order printed copies to cherish forever.
                        </p>
                    </div>
                </div>

                {/* Key Features Section - With interactive cards */}
                <div className="flex flex-col xl:flex-row mt-16 sm:mt-20 lg:mt-24 gap-12 sm:gap-16 xl:gap-24">
                    {/* Section Header */}
                    <div className="xl:w-1/3 text-center xl:text-left">
                        <div className="inline-flex justify-center xl:justify-start mb-4">
                            <span className="px-4 py-2 bg-gradient-to-r from-[#b98352]/20 to-[#e6d5b8]/20 text-[#b98352] rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                                Platform Features
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Key Features
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed border-l-4 border-[#b98352] pl-4 sm:pl-6 max-w-2xl xl:max-w-none mx-auto xl:mx-0">
                            A comprehensive platform designed to capture, preserve, and celebrate the life stories of elderly residents.
                        </p>
                        <div className="hidden xl:block mt-6">
                            <div className="w-20 h-1 bg-gradient-to-r from-[#b98352] to-[#8b5e34] rounded-full"></div>
                        </div>
                    </div>

                    {/* Features Grid - Interactive cards with warm theme */}
                    <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                        {keyFeatures.map((ele, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 hover:bg-gradient-to-br hover:from-[#b98352] hover:via-[#a67344] hover:to-[#8b5e34] transition-all duration-500 ease-out shadow-lg hover:shadow-2xl border border-gray-200/50 hover:border-transparent overflow-hidden"
                            >
                                {/* Animated Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                                {/* Feature Number */}
                                <div className="absolute top-4 sm:top-5 lg:top-6 right-4 sm:right-5 lg:right-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-100 group-hover:text-white/20 transition-colors duration-500">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Icon Container */}
                                <div className="relative mb-4 sm:mb-5 lg:mb-6">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#b98352] to-[#8b5e34] group-hover:from-white group-hover:to-white/90 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#b98352] transition-colors duration-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />}
                                            {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                                            {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                            {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                                            {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                                            {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                                        </svg>
                                    </div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#b98352]/50 to-[#e6d5b8]/50 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-white transition-all duration-300">
                                        {ele.title}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed transition-all duration-300">
                                        {ele.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legacy Section */}
                <div className="mt-20 mb-10 text-center">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#b98352] to-[#e6d5b8]">
                        <div className="bg-white rounded-full px-8 py-3">
                            <p className="text-[#b98352] font-medium">
                                Every story deserves to be told. Every life deserves to be remembered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
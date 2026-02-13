import { Breadcrumbs } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { slug = "home" } }) {
    const breadcrumbItems = [
        { title: "Dashboard", link: "/dashboard" },
        { title: "Surge Party", link: "/surge-party-social-media" },
    ];

    const aboutSurge = [
        {
            title: "Client",
            desc: "Surge Party",
        },
        {
            title: "Industry",
            desc: "Social Media, Event Management",
        },
        {
            title: "Services",
            desc: "IOS, Full-Stack Development",
        },
        {
            title: "Technologies",
            desc: "Next.js, Swift UI, Postgres, Payload CMS",
        },
    ];

    const keyFeatures = [
        {
            title: "User Profiles",
            desc: "Users can create and customise their profiles, adding personal information, photos, and interests.",
        },
        {
            title: "Crew",
            desc: "Groups where people can join and can get invited instantly to the events.",
        },
        {
            title: "Events",
            desc: "Users can create, manage, and RSVP to events, with detailed event pages and reminders.",
        },
        {
            title: "Messaging",
            desc: "Direct messaging and group chats to facilitate private conversations and community discussions.",
        },
        {
            title: "Notifications",
            desc: "Real-time notifications to keep users updated on interactions and event reminders.",
        },
        {
            title: "Search and Discover",
            desc: "Advanced search functionality to find friends, groups, and events, along with personalised recommendations.",
        },
    ];

    // Surge Party gradient colors
    const gradientColors = {
        from: "#231f20",
        via: "#000000",
        to: "#231f20",
        accent: "#FCFF7D",
        light: "#feffdb"
    };

    return (
        <div className="h-full flex flex-col py-12 sm:py-16 md:py-20">
            {/* Hero Section - Fixed gradient for Tailwind v4 */}
            <div className="text-white w-full min-h-[32rem] sm:min-h-[36rem] md:h-[40rem] lg:h-[44rem] xl:h-[48rem] bg-linear-to-r from-[#231f20] from-10% via-[#000000] via-45% to-[#231f20] to-90% px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto flex flex-col h-full">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                        <Breadcrumbs
                            items={breadcrumbItems}
                            className="justify-center"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-medium max-w-6xl mx-auto">
                            Surge Party: Social Media Platform for People Who Love Parties
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-white/80 text-sm sm:text-base bg-white/5 hover:bg-white/10 transition-colors">
                                Full-stack Development
                            </div>
                            <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-white/80 text-sm sm:text-base bg-white/5 hover:bg-white/10 transition-colors">
                                IOS Development
                            </div>
                            <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-white/80 text-sm sm:text-base bg-white/5 hover:bg-white/10 transition-colors">
                                Web Development
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="h-full mx-auto container flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-8xl">
                {/* Hero Image */}
                <Image
                    src={"/Images/projects/surge/surge-slide-1.jpg"}
                    alt="Surge Party Social Media Platform"
                    width={1600}
                    height={900}
                    priority
                    className="w-full h-auto rounded-xl sm:rounded-2xl -mt-16 sm:-mt-24 md:-mt-32 border shadow-lg"
                />

                {/* About Grid - Responsive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
                    {aboutSurge.map((ele, index) => (
                        <div key={index} className="border rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 bg-white hover:border-[#FCFF7D]/50">
                            <div className="flex flex-col p-5 sm:p-6 md:p-7 lg:p-8 gap-3 sm:gap-4">
                                <div className="text-gray-500 font-semibold text-xs sm:text-sm lg:text-base uppercase tracking-wider">
                                    {ele.title}
                                </div>
                                <div className="font-medium text-xl sm:text-2xl md:text-3xl leading-tight">
                                    {ele.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* About Project Section */}
                <div className="flex flex-col lg:flex-row mt-8 sm:mt-12 lg:mt-16 gap-8 sm:gap-10 lg:gap-4">
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-8 xl:gap-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                            About Project
                        </h2>
                        <div className="flex gap-2 sm:gap-3 flex-wrap">
                            <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#FCFF7D] font-medium text-xs sm:text-sm lg:text-base hover:bg-[#FCFF7D]/80 transition-colors">
                                Full-stack Development
                            </div>
                            <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#FCFF7D] font-medium text-xs sm:text-sm lg:text-base hover:bg-[#FCFF7D]/80 transition-colors">
                                IOS Development
                            </div>
                            <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#FCFF7D] font-medium text-xs sm:text-sm lg:text-base hover:bg-[#FCFF7D]/80 transition-colors">
                                Web Development
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-8 xl:gap-12">
                        <div className="flex justify-between items-center">
                            <div className="font-medium text-gray-500 text-sm sm:text-base">5 Months</div>
                            <div className="font-medium text-gray-500 text-sm sm:text-base">Duration</div>
                        </div>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
                            Surge Party is a vibrant social media platform designed to enhance social interactions and bring party lovers together.
                        </p>
                        <div>
                            <Link
                                href="#"
                                className="p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border-2 border-[#3B3486] font-medium transition duration-500 ease-out contact-button inline-block"
                            >
                                Visit App Store
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Second Image */}
                <div className="mt-8 sm:mt-12 lg:mt-16">
                    <Image
                        src={"/Images/projects/surge/surge-slide-2.jpg"}
                        alt="Surge Party Event Interface"
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
                            <div className="border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 bg-[#feffdb] text-black h-full hover:shadow-lg transition-shadow">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                    Our client approached us with an ambitious vision: A platform where people who love to party come together and share memories. The challenge was implementing this concept while keeping music integration seamless, because great music makes unforgettable parties!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            <h3 className="text-center md:text-left text-2xl sm:text-3xl font-semibold">
                                Solution
                            </h3>
                            <div className="border rounded-2xl sm:rounded-3xl bg-[#FCFF7D] text-black p-5 sm:p-6 md:p-7 lg:p-8 h-full hover:shadow-lg transition-shadow">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                    To tackle this project, we integrated Apple Music and Spotify APIs. We used SwiftUI for the mobile app since it has better support for both APIs. Built a robust backend with Express and Postgres, deployed on AWS for smooth performance and scalability.
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
                                Process
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                                Our process began with in-depth discussions with the Designer and our Client. We created detailed documentation and emphasized good architecture. The backend was optimized for fast and cost-effective API calls, with middleware developed using TypeScript, Drizzle, and Express.js. On the iOS side, we built an intuitive interface using Swift and SwiftUI.
                            </p>
                        </div>
                    </div>

                    <Image
                        src={"/Images/projects/surge/surge-process-2.jpg"}
                        alt="Surge Party Process Diagram"
                        width={1600}
                        height={900}
                        className="w-full h-auto rounded-xl"
                    />

                    <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            Backend and Database Architecture
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                            By referring to the user-flow diagram and requirements document, we created an ER Diagram and developed a robust PostgreSQL database. Our architecture focuses on efficient API calls and cost-effective scaling. The middleware was built with TypeScript, Drizzle ORM, and Express.js, with S3 integration for image storage.
                        </p>
                    </div>

                    <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                            iOS Application
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                            On the iOS front, we developed the application using Swift and SwiftUI, focusing on delivering a seamless and intuitive user experience. By optimizing the interaction between the frontend and backend, we ensured reliable performance and created an engaging platform for party enthusiasts.
                        </p>
                    </div>
                </div>

                {/* Key Features Section - With Verify Button Animation */}
                <div className="flex flex-col xl:flex-row mt-16 sm:mt-20 lg:mt-24 gap-12 sm:gap-16 xl:gap-24">
                    {/* Section Header */}
                    <div className="xl:w-1/3 text-center xl:text-left">
                        <div className="inline-flex justify-center xl:justify-start mb-4">
                            <span className="px-4 py-2 bg-gradient-to-r from-[#231f20]/10 to-[#000000]/10 text-[#231f20] rounded-full text-xs sm:text-sm font-semibold tracking-wide">
                                Platform Features
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Key Features
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed border-l-4 border-[#FCFF7D] pl-4 sm:pl-6 max-w-2xl xl:max-w-none mx-auto xl:mx-0">
                            Powerful social features designed to connect party lovers and create unforgettable experiences.
                        </p>
                        <div className="hidden xl:block mt-6">
                            <div className="w-20 h-1 bg-gradient-to-r from-[#231f20] to-[#000000] rounded-full"></div>
                        </div>
                    </div>

                    {/* Features Grid - With Surge Party Gradient Hover */}
                    <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                        {keyFeatures.map((ele, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 hover:bg-gradient-to-br hover:from-[#231f20] hover:via-[#000000] hover:to-[#231f20] transition-all duration-500 ease-out shadow-lg hover:shadow-2xl border border-gray-200/50 hover:border-transparent overflow-hidden"
                            >
                                {/* Animated Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                                {/* Feature Number */}
                                <div className="absolute top-4 sm:top-5 lg:top-6 right-4 sm:right-5 lg:right-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-100 group-hover:text-white/20 transition-colors duration-500">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Icon Container */}
                                <div className="relative mb-4 sm:mb-5 lg:mb-6">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#231f20] to-[#000000] group-hover:from-white group-hover:to-white/90 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1">
                                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#231f20] transition-colors duration-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                                            {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                                            {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                                            {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />}
                                            {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />}
                                            {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                                        </svg>
                                    </div>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#231f20]/20 to-[#000000]/20 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
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

                                {/* Accent border with Surge Party yellow */}
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FCFF7D] group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
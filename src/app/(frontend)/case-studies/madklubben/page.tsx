import { Breadcrumbs } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { slug = "home" } }) {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Testbest", link: "/surge-party-social-media" },
  ];

  const aboutSurge = [
    {
      title: "Client",
      desc: "Madklubben & Polly",
    },
    {
      title: "Industry",
      desc: "E-commerce, Menu Management Systems",
    },
    {
      title: "Services",
      desc: "Frontend Development, Search Engine Optimization",
    },
    {
      title: "Technologies",
      desc: "Next.js, Tailwind",
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

  return (
    <div className="h-full flex flex-col py-12 sm:py-16 md:py-20">
      {/* Hero Section - Centered Content */}
      <div className="text-black w-full min-h-[32rem] sm:min-h-[36rem] md:h-[40rem] lg:h-[44rem] xl:h-[48rem] bg-linear-to-r from-[#f9d58d] via-[#ffebb5] to-[#f9d58d] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col h-full">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto sm:mt-16 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            <Breadcrumbs
              items={breadcrumbItems}
              className="text-black justify-center"
              childClass="text-black"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-medium max-w-6xl mx-auto">
              Madklubben & Polly: Menu Management and Dining Solution
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-black/80 text-sm sm:text-base bg-black/5 hover:bg-black/10 transition-colors">
                Frontend Development
              </div>
              <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-black/80 text-sm sm:text-base bg-black/5 hover:bg-black/10 transition-colors">
                Search Engine Optimization
              </div>
              <div className="py-1.5 sm:py-2 px-4 sm:px-6 rounded-full border border-black/80 text-sm sm:text-base bg-black/5 hover:bg-black/10 transition-colors">
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
          src={"/Images/projects/madklubben/heroSection.png"}
          alt="Madklubben & Polly Hero Section"
          width={1600}
          height={900}
          priority
          className="w-full h-auto rounded-xl sm:rounded-2xl -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 xl:-mt-48 border shadow-lg"
        />

        {/* About Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
          {aboutSurge.map((ele, index) => (
            <div key={index} className="border rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 bg-white">
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
              <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#ffe49e] font-medium text-xs sm:text-sm lg:text-base hover:bg-[#ffd580] transition-colors">
                Frontend Development
              </div>
              <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#ffe49e] font-medium text-xs sm:text-sm lg:text-base hover:bg-[#ffd580] transition-colors">
                Search Engine Optimization
              </div>
              <div className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-[#ffe49e] font-medium text-xs sm:text-sm lg:text-base hover:bg-[#ffd580] transition-colors">
                Web Development
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-8 xl:gap-12">
            <div className="flex justify-between items-center">
              <div className="font-medium text-gray-500 text-sm sm:text-base">3 Months</div>
              <div className="font-medium text-gray-500 text-sm sm:text-base">Duration</div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
              A comprehensive menu management and dining solution that streamlines restaurant operations and enhances customer experience.
            </p>
            <div>
              <Link
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border-2 border-[#3B3486] font-medium transition duration-500 ease-out contact-button"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>

        {/* Polly Image */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <Image
            src={"/Images/projects/polly/heroSection.png"}
            alt="Polly Hero Section"
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
              <div className="border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 bg-[#ffebb59c] text-black h-full hover:shadow-lg transition-shadow">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                  Our client approached us with an ambitious vision: A platform where restaurants can efficiently manage their menus, seating, and reservations. The challenge was to create an intuitive system that works seamlessly across devices while maintaining brand consistency.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <h3 className="text-center md:text-left text-2xl sm:text-3xl font-semibold">
                Solution
              </h3>
              <div className="border rounded-2xl sm:rounded-3xl bg-[#ffd580] text-black p-5 sm:p-6 md:p-7 lg:p-8 h-full hover:shadow-lg transition-shadow">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                  We developed a responsive Next.js application with real-time menu updates and dynamic seating arrangements. The platform integrates with existing POS systems and provides restaurant owners with powerful analytics and customization options.
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
                Our process began with in-depth discussions with the Designer and our Client. We discussed everything there is and made a detailed document. Emphasizing good architecture, we designed the frontend to be fast, accessible, and SEO-friendly. The development was done using Next.js and Tailwind CSS, ensuring a smooth and responsive user interface.
              </p>
            </div>
          </div>

          <Image
            src={"/Images/projects/polly/foodMenu.png"}
            alt="Polly Food Menu Interface"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl sm:rounded-2xl shadow-md"
          />

          <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              Frontend Architecture
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              We built a component-based architecture using Next.js 14 with App Router, ensuring optimal performance and SEO. Tailwind CSS was used for styling, creating a consistent design system. The application features dynamic menu rendering, real-time availability updates, and seamless navigation.
            </p>
          </div>

          <Image
            src={"/Images/projects/polly/seatBooking.png"}
            alt="Polly Seat Booking Interface"
            width={1600}
            height={900}
            className="w-full h-auto rounded-xl sm:rounded-2xl border shadow-md"
          />

          <div className="flex flex-col w-full gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
              User Experience
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              We focused on creating an intuitive user experience with clear visual hierarchies and smooth interactions. The interface adapts seamlessly from desktop to mobile, ensuring restaurant staff can manage operations efficiently on any device.
            </p>
          </div>
        </div>

        {/* Key Features Section - Redesigned */}
        <div className="flex flex-col xl:flex-row mt-20 gap-16 xl:gap-24">
          <div className="xl:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-[#3B3486] pl-6">
              Every feature is crafted with precision to deliver an exceptional user experience.
            </p>
          </div>

          <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((ele, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 ease-out shadow-lg hover:shadow-xl border border-gray-200/50 hover:border-[#3B3486]/30"
              >
                {/* Feature Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-[#3B3486]/10 transition-colors duration-500">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B3486] to-[#6d5ac9] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                      {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                      {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                      {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />}
                      {index === 4 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />}
                      {index === 5 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                    </svg>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#3B3486] transition-colors duration-300">
                  {ele.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {ele.desc}
                </p>

                {/* Learn More Link */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center text-[#3B3486] font-semibold text-sm">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
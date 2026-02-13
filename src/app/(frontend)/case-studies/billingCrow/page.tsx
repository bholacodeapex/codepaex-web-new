import { Breadcrumbs } from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params: { slug = "home" } }) {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Billing Crow", link: "/surge-party-social-media" },
  ];

  const aboutSurge = [
    {
      title: "Client",
      desc: "Billing Crow",
    },
    {
      title: "Industry",
      desc: "FinTech, Financial Consulting, SaaS",
    },
    {
      title: "Services",
      desc: "Web Development, Full-Stack Development",
    },
    {
      title: "Technologies",
      desc: "Next.js, Tailwind, Cassandra",
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
    <div className="h-full flex flex-col py-20">
      <div className="text-white w-full h-[40rem] md:h-[48rem] bg-radial-[ellipse_at_top] from-[#72a572] to-[#2a5b2a] px-4">
        <div className="container mx-auto flex flex-col gap-24 items-center">
          <div className="flex flex-col items-start mt-12 sm:mt-20 gap-12 h-full w-full">
            <Breadcrumbs items={breadcrumbItems} />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight font-medium w-full">
              Billing Crow: Simplify Your Billing Process
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 mx-auto">
              <div className="py-1 px-4 rounded-3xl border border-white">
                Full-stack Development
              </div>
              <div className="py-1 px-4 rounded-3xl border border-white">
                Search Engine Optimization
              </div>
              <div className="py-1 px-4 rounded-3xl border border-white">
                Web Development
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full mx-auto container flex flex-col gap-8 px-4">
        <Image
          src={"/Images/projects/billingCrow/billingCrow-create-party.png"}
          alt=""
          width={1600}
          height={900}
          className="max-w-8xl rounded-2xl -mt-32 sm:-mt-52 md:-mt-64 border"
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {aboutSurge.map((ele, index) => (
            <div key={index} className="border rounded-xl">
              <div className="flex flex-col my-8 mx-8 gap-8">
                <div className="text-gray-500 font-semibold">{ele.title}</div>
                <div className="font-medium text-2xl md:text-3xl">
                  {ele.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row mt-20 gap-10 lg:gap-4">
          <div className="flex-1 flex flex-col gap-5 lg:gap-12">
            <h2 className="text-5xl font-semibold">About Project</h2>
            <div className="flex gap-2 flex-wrap">
              <div className="py-2 px-4 rounded-3xl bg-[#dbe6c9] font-medium">
                Full-stack Development
              </div>
              <div className="py-2 px-4 rounded-3xl bg-[#dbe6c9] font-medium">
                Search Engine Optimization
              </div>
              <div className="py-2 px-4 rounded-3xl bg-[#dbe6c9] font-medium">
                Web Development
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-5 lg:gap-12 w-50">
            <div className="flex justify-between">
              <div className="font-medium text-gray-500">3 Months</div>
              <div className="font-medium text-gray-500">Duration</div>
            </div>
            <p className="text-4xl font-medium leading-tight">
              Surge Party is a vibrant social media platform designed to enhance
              social interactions.
            </p>
            <div>
              <Link
                href="#"
                className="p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border-2 border-[#3B3486] font-medium transition duration-500 ease-out contact-button"
              >
                Visit App Store
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Image
            src={"/Images/projects/billingCrow/billingCrow-create-invoice.png"}
            alt=""
            width={1600}
            height={900}
            className="max-w-8xl rounded-2xl border"
          />
        </div>
        <div className="flex flex-col w-full mt-20">
          <div className="grid md:grid-cols-2 w-full gap-10 md:gap-2">
            <div className="flex flex-col gap-5 md:gap-12 h-full">
              <h3 className="text-center text-3xl font-semibold">Problem</h3>
              <div className="border border-1 rounded-2xl p-8 bg-[#fffded] text-black">
                <p className="text-xl sm:text-2xl md:text-3xl leading-snug">
                  Our client approached us with an ambitious vision: A platform
                  where people who loves to party come together and share
                  memories. The challenge was to implementing this concept while
                  keeping music in mind cause great music makes unforgettable
                  parties!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-12">
              <h3 className="text-center text-3xl font-semibold">Solution</h3>
              <div className="border border-1 rounded-2xl bg-[#dbe6c9] text-black p-8 h-full">
                <p className="text-xl sm:text-2xl md:text-3xl leading-snug">
                  To Tackle this project, we used apple music and spotify apis.
                  We used Swift UI for Mobile App since it has better support
                  for both of the previous APIs. Used Express and Postgres to
                  make Robust Backend with AWS for smooth performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-20 mt-20">
          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Process
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl leading-snug">
                Our process began with in-depth discussions with the Designer
                and our Client. We discussed everything there is and made a
                detailed document. Emphasizing good architecture, we designed
                the backend to optimize for fast and cost-effective API calls.
                The middleware was developed using TypeScript, Drizzle, and
                Express.js, which facilitated smooth data handling and
                communication between the frontend and backend. On the iOS side,
                we utilized Swift and SwiftUI to build an intuitive and
                responsive user interface.
              </p>
            </div>
          </div>
          <Image
            src={"/Images/projects/billingCrow/Slide1-3.jpg"}
            alt=""
            width={1600}
            height={900}
            className="max-w-8xl rounded-2xl"
          />
          <div className="flex flex-col w-full gap-5 md:gap-8 lg:gap-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Backend and Database Architecture
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl leading-snug">
              By referring the user-flow diagram and requirement document, we
              made the ER Diagram using which we developed a robust Database in
              PostgreSQL. Good Architecture means, efficient backend which makes
              the API calls faster and cost effective. The middleware was
              developed in Typescript, Drizzle and Express.js. We also
              integrated S3 Bucket for storing Images.
            </p>
          </div>
          <div className="flex flex-col w-full gap-5 md:gap-8 lg:gap-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              iOS Application
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl leading-snug">
              On the iOS front, we developed the application using Swift and
              SwiftUI, focusing on delivering a seamless and intuitive user
              experience. By optimizing the interaction between the frontend and
              backend, we ensured that the app performs reliably and
              efficiently, providing users with a responsive and engaging
              platform.
            </p>
          </div>
        </div>

        {/* key features */}
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
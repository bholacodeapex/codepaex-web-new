import { Breadcrumbs } from '@/components/Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page({ params: { slug = 'home' } }) {
    const breadcrumbItems = [
        { title: 'Dashboard', link: '/dashboard' },
        { title: 'Surge Party', link: '/surge-party-social-media' },
    ];

    return (
        <div className='h-full flex flex-col'>
            <div className='text-white w-full h-[48rem] bg-gradient-to-r from-[#231f20] from-10% via-[#000000] via-45% to-[#231f20] to-90% '>
                <div className='container flex flex-col gap-24 items-center'>
                    <div className='flex flex-col justify-start mt-20 gap-12 h-full'>
                        <Breadcrumbs items={breadcrumbItems} />
                        <h1 className='text-7xl leading-tight font-[500]'>Surge Party: Social Media platorm for people who love Parties</h1>
                        <div className='flex gap-2'>
                            <div className='py-1 px-4 rounded-3xl border border-white'>Full-stack Development</div>
                            <div className='py-1 px-4 rounded-3xl border border-white'>IOS Development</div>
                            <div className='py-1 px-4 rounded-3xl border border-white'>Web Development</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full container flex flex-col gap-8'>
                <Image src={"/Images/projects/surge/surge-slide-1.jpg"} alt='' width={1600} height={900} className='max-w-8xl rounded-2xl mt-[-16rem]' />
                <div className='flex gap-4'>
                    <div className='flex-1 border h-[15rem] rounded-xl'>
                        <div className='flex flex-col my-8 mx-8 gap-8'>
                            <div className='text-gray-500 font-[600]'>Client</div>
                            <div className='font-[500] text-3xl'>Surge Party</div>
                        </div>
                    </div>
                    <div className='flex-1 border h-[15rem] rounded-xl'>
                        <div className='flex flex-col my-8 mx-8 gap-8'>
                            <div className='text-gray-500 font-[600]'>Industry</div>
                            <div className='font-[500] text-3xl'>Social Media, Event Management</div>
                        </div>
                    </div>
                    <div className='flex-1 border h-[15rem] rounded-xl'>
                        <div className='flex flex-col my-8 mx-8 gap-8'>
                            <div className='text-gray-500 font-[600]'>Services</div>
                            <div className='font-[500] text-3xl'>IOS, Full-Stack Development</div>
                        </div>
                    </div>
                    <div className='flex-1 border h-[15rem] rounded-xl'>
                        <div className='flex flex-col my-8 mx-8 gap-8'>
                            <div className='text-gray-500 font-[600]'>Technologies</div>
                            <div className='font-[500] text-3xl'>Next.js, Swift UI, Postgres, Payload CMS</div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-20 gap-4'>
                    <div className='flex-1 flex flex-col gap-12'>
                        <h2 className='text-5xl font-[600]'>About Project</h2>
                        <div className='flex gap-2 flex-wrap'>
                            <div className='py-2 px-4 rounded-3xl bg-[#FCFF7D] font-[500]'>Full-stack Development</div>
                            <div className='py-2 px-4 rounded-3xl bg-[#FCFF7D] font-[500]'>IOS Development</div>
                            <div className='py-2 px-4 rounded-3xl bg-[#FCFF7D] font-[500]'>Web Development</div>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-12 w-50'>
                        <div className='flex justify-between'>
                            <div className='font-[500] text-gray-500'>5 Months</div>
                            <div className='font-[500] text-gray-500'>Duration</div>
                        </div>
                        <p className='text-4xl font-[500] leading-tight'>Surge Party is a vibrant social media platform designed to enhance social interactions.</p>
                        <div>
                            <Link
                                href="#"
                                className={`p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border-2 border-[#3B3486] font-[500] transition duration-500 ease-out contact-button`}
                            >
                                Visit App Store
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <Image src={"/Images/projects/surge/surge-slide-2.jpg"} alt='' width={1600} height={900} className='max-w-8xl rounded-2xl' />
                </div>
                <div className='flex flex-col w-full mt-20'>
                    <div className='flex w-full gap-2'>
                        <div className='flex-1 flex flex-col gap-12'>
                            <h3 className='text-center text-3xl font-semibold'>Problem</h3>
                            <div className='border border-1 rounded-2xl p-8 h-[25rem] bg-[#feffdb]'>
                                <p className='text-3xl leading-snug'>Our client approached us with an ambitious vision: A platform where people who loves to party come together and share memories. The challenge was to implementing this concept while keeping music in mind cause great music makes unforgettable parties!</p>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-12'>
                            <h3 className='text-center text-3xl font-semibold'>Solution</h3>
                            <div className='border border-1 rounded-2xl bg-[#FCFF7D] p-8 h-[25rem]'>
                                <p className='text-3xl leading-snug'>To Tackle this project, we used apple music and spotify apis. We used Swift UI for Mobile App since it has better support for both of the previous APIs. Used Express and Postgres to make Robust Backend with AWS for smooth performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full mt-20 gap-12'>
                    <h2 className='text-5xl font-[600]'>Process</h2>
                    <p className='text-3xl leading-snug'>Our process began with in-depth discussions with the Designer and our Client. We discussed everything there is and made a detailed document. Emphasizing good architecture, we designed the backend to optimize for fast and cost-effective API calls. The middleware was developed using TypeScript, Drizzle, and Express.js, which facilitated smooth data handling and communication between the frontend and backend. On the iOS side, we utilized Swift and SwiftUI to build an intuitive and responsive user interface.</p>
                    <Image src={"/Images/projects/surge/surge-process-2.jpg"} alt='' width={1600} height={900} className='max-w-8xl rounded-2xl' />
                </div>
                <div className='flex flex-col w-full mt-20 gap-12'>
                    <h2 className='text-5xl font-[600]'>Backend and Database Architecture</h2>
                    <p className='text-3xl leading-snug'>By referring the user-flow diagram and requirement document, we made the ER Diagram using which we developed a robust Database in PostgreSQL. Good Architecture means, efficient backend which makes the API calls faster and cost effective. The middleware was developed in Typescript, Drizzle and Express.js. We also integrated S3 Bucket for storing Images.</p>
                </div>
                <div className='flex flex-col w-full mt-20 gap-12'>
                    <h2 className='text-5xl font-[600]'>iOS Application</h2>
                    <p className='text-3xl leading-snug'>On the iOS front, we developed the application using Swift and SwiftUI, focusing on delivering a seamless and intuitive user experience. By optimizing the interaction between the frontend and backend, we ensured that the app performs reliably and efficiently, providing users with a responsive and engaging platform.</p>
                </div>
                <div className='flex mt-20 gap-48'>
                    <div className='flex-2 flex flex-col gap-12'>
                        <h2 className='text-5xl font-[600]'>Key Features</h2>
                    </div>
                    <div className='flex-1 grid grid-cols-2 gap-2'>
                        <div className='flex-1 border border-1 border-[#3B3486] rounded-3xl px-8 py-16'>
                            <h3 className='text-3xl font-semibold'>User Profiles</h3>
                            <p className='font-semibold mt-4'>Users can create and customise their profiles, adding personal information, photos, and interests.</p>
                        </div>
                        <div className='flex-1 border border-1 border-[#3B3486] rounded-3xl px-8 py-16'>
                            <h3 className='text-3xl font-semibold'>Crew</h3>
                            <p className='font-semibold mt-4'>Groups where people can join and can get invited instantly to the events.</p>
                        </div>
                        <div className='flex-1 border border-1 border-[#3B3486] rounded-3xl px-8 py-16'>
                            <h3 className='text-3xl font-semibold'>Events</h3>
                            <p className='font-semibold mt-4'>Users can create, manage, and RSVP to events, with detailed event pages and reminders.</p>
                        </div>
                        <div className='flex-1 border border-1 border-[#3B3486] rounded-3xl px-8 py-16'>
                            <h3 className='text-3xl font-semibold'>Messaging</h3>
                            <p className='font-semibold mt-4'>Direct messaging and group chats to facilitate private conversations and community discussions.</p>
                        </div>
                        <div className='flex-1 border border-1 border-[#3B3486] rounded-3xl px-8 py-16'>
                            <h3 className='text-3xl font-semibold'>Notifications</h3>
                            <p className='font-semibold mt-4'>Real-time notifications to keep users updated on interactions and event reminders.</p>
                        </div>
                        <div className='flex-1 border border-1 border-[#3B3486] rounded-3xl px-8 py-16'>
                            <h3 className='text-3xl font-semibold'>Search and Discover</h3>
                            <p className='font-semibold mt-4'>Advanced search functionality to find friends, groups, and events, along with personalised recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


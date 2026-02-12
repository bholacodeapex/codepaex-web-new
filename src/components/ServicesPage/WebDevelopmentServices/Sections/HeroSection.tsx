
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsHddStackFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";


function HeroSection() {
    return (
        <section id="about">
            <div className="bg-[#3B3486]">
                <div className="lg:container mx-auto pb-[7rem] flex justify-center">
                    <div className="text-center px-2 sm:px-0 sm:w-2/3 py-[7rem]">
                        <h2 className="text-[#eaeaea] text-[2.2rem] sm:text-[3rem] font-[600]">Our Services</h2>
                        <p className="text-[#eaeaea] my-10">
                            At Codeapex LLP, we transform your ideas into powerful web solutions that drive business growth.
                            Our team of experienced developers and designers is dedicated to building websites that are not only visually stunning but also highly functional and user-friendly.
                            Codeapex LLP is a premier web development agency committed to delivering excellence.
                            With a passion for technology and innovation, we have helped numerous businesses establish a strong online presence and achieve their digital goals.

                        </p>
                    </div>
                </div>
            </div>
            <div className="md:max-w-[1024px] xl:max-w-[1280px] mx-auto flex md:flex-row flex-col justify-center mt-[-10.5rem] border rounded-[2rem] bg-[#fff]">
                <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] ">
                    <div className=" p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                        <BsHddStackFill size={"2.5rem"} />
                    </div>
                    <h3 className="py-4">Backend</h3>
                    <p className="px-4">We excel in system design and backend development, ensuring your digital infrastructure is robust, efficient, and seamlessly performs using technologies like Java, Python, JavaScript, and TypeScript.</p>
                    <p className="py-4 text-[#3B3486]">Languages</p>
                    <p>Java, Python, JavaScript, TypeScript</p>
                    <p className="py-4 text-[#3B3486]">Frameworks</p>
                    <ul>
                        <li>Python - Flask, Fast API and Django</li>
                        <li>Java - Spring Framework, Hibernate</li>
                        <li>JavaScript - Node.js, Express.js</li>
                    </ul>
                    <p className="py-4 text-[#3B3486]">Databases</p>
                    <ul>
                        <li>Postgres</li>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                        <li>Firebase Firestore</li>
                        <li>Firebase Realtime Database</li>
                        <li>Microsoft SQL Server</li>
                    </ul>
                </div>
                <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] border border-b-0">
                    <div className="p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                        <BsCodeSlash size={"2.5rem"} />
                    </div>
                    <h3 className="py-4">Frontend</h3>
                    <p className="px-4">We build frontends that engage users and enhance their digital experience. By focusing on intuitive navigation and appealing interfaces, we ensure your digital presence leaves a lasting impression.</p>
                    <p className="py-4 text-[#3B3486]">Languages</p>
                    <p>HTML5, CSS3, Tailwind, JavaScript, TypeScript, JQuery</p>
                    <p className="py-4 text-[#3B3486]">Web Frameworks</p>
                    <ul>
                        <li>NextJS</li>
                        <li>Nuxt</li>
                        <li>ReactJS</li>
                        <li>VueJS</li>
                    </ul>
                    <p className="py-4 text-[#3B3486]">UI Frameworks</p>
                    <ul>
                        <li>ShadCN</li>
                        <li>Chakra UI</li>
                        <li>Flowbite</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] ">
                    <div className="p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                        <AiOutlineAntDesign size={"2.5rem"} />
                    </div>
                    <h3 className="py-4">Design</h3>
                    <p className="px-4">By focusing on clear content structures and clean design patterns, we create interactions that go beyond basic functionality, providing users with an engaging and enjoyable experience.</p>
                    <p className="py-4 text-[#3B3486]">Things we design</p>
                    <p>UI, UX, Websites, Apps, Logos, Branding</p>
                    <p className="py-4 text-[#3B3486]">Design Tools</p>
                    <ul>
                        <li>Figma</li>
                        <li>Wireframe.cc</li>
                        <li>Adobe XD</li>
                        <li>Photoshop</li>
                        <li>React Icons</li>
                        <li>Font Awesome</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;

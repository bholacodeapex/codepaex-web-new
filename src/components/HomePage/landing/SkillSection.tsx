/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsHddStackFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";


function SkillSection() {
    return (
        <section id="about">
            <div className="bg-[#3B3486]">
                <div className="lg:container mx-auto pb-[7rem] flex justify-center">
                    <div className="text-center px-2 sm:px-0 sm:w-2/3 py-[7rem]">
                        <h2 className="text-[#eaeaea] text-[2.2rem] sm:text-[3rem] font-[600]">Elevate Your Business</h2>
                        <p className="text-[#eaeaea] my-10 text-[1.25rem]">
                            Whether you're aiming to create your first MVP to attract investors,
                            looking to improve your product to boost your business results,
                            or seeking a dedicated team to help you grow faster—Codeapex LLP is here to support you.
                            We build custom digital solutions tailored to your unique needs.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="md:max-w-[1024px] xl:max-w-[1280px] mx-auto flex md:flex-row flex-col justify-center mt-[-10.5rem] border rounded-[2rem] bg-[#fff]">
                    <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] ">
                        <div className=" p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                            <BsHddStackFill size={"2.5rem"} />
                        </div>
                        <h3 className="py-4 font-[500]">Backend</h3>
                        <p className="px-4 lg:h-52 xl:h-44">Your digital infrastructure deserves the best. We focus on both system design and backend development to ensure your systems are well-built and robust. Our commitment to excellence means your platforms will perform seamlessly and efficiently, helping your business run smoothly.</p>
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
                        <h3 className="py-4 font-[500]">Frontend</h3>
                        <p className="px-4 lg:h-52 xl:h-44">Your digital presence is crucial for engaging your users and enhancing their experience. A well-designed frontend allows you to captivate your audience and elevate your brand. By focusing on intuitive navigation and visually stunning interfaces, we prioritize every detail to ensure your platform leaves a lasting impression.</p>
                        <p className="py-4 text-[#3B3486]">Languages</p>
                        <p>HTML5, CSS3, Sass JavaScript, TypeScript, JQuery</p>
                        <p className="py-4 text-[#3B3486]">Web Frameworks</p>
                        <ul>
                            <li>ReactJS</li>
                            <li>VueJS</li>
                            <li>NextJS</li>
                        </ul>
                        <p className="py-4 text-[#3B3486]">Mobile App Frameworks</p>
                        <ul>
                            <li>iOS (Swift / Objective-C)</li>
                            <li>Android (Java / Kotlin)</li>
                            <li>React Native (Cross-Platform)</li>
                            <li>Flutter (Cross-Platform)</li>
                        </ul>
                    </div>
                    <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] ">
                        <div className="p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                            <AiOutlineAntDesign size={"2.5rem"} />
                        </div>
                        <h3 className="py-4 font-[500]">Design</h3>
                        <p className="px-4 lg:h-52 xl:h-44">We understand that your digital platform needs clear content structures and clean design patterns to truly stand out. We prioritize these elements to ensure your website or application is intuitive and user-friendly. By designing interactions that go beyond functionality, we aim to provide your users with an exceptional experience that keeps them engaged and satisfied.</p>
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
            </div>
        </section>
    );
}

export default SkillSection;

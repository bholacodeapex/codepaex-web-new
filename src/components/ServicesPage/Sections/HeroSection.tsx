
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
            <div>
                <div className="md:max-w-[1024px] xl:max-w-[1280px] mx-auto flex md:flex-row flex-col justify-center mt-[-10.5rem] border rounded-[2rem] bg-[#fff]">
                    <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] ">
                        <div className=" p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                            <BsHddStackFill size={"2.5rem"} />
                        </div>
                        <h3 className="pt-4 pb-2">Web Development</h3>
                        <p className="px-4">Our web development services span both frontend and backend, ensuring robust and efficient digital solutions.</p>
                        <p className="pt-4 pb-2 text-[#3B3486]">Languages</p>
                        <p>TypeScript, JavaScript, Java, Python</p>
                        <p className="pt-4 pb-2 text-[#3B3486]">Frameworks</p>
                        <ul>
                            <li>Next.js, ReactJS</li>
                            <li>Python - Flask, Fast API and Django</li>
                            <li>Java - Spring Framework, Hibernate</li>
                            <li>JavaScript - Node.js, Express.js</li>
                        </ul>
                        <p className="pt-4 pb-2 text-[#3B3486]">Databases</p>
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
                        <h3 className="pt-4 pb-2">Mobile Development</h3>
                        <p className="px-4">Our mobile app development services encompass both frontend design and backend integration, ensuring robust and efficient mobile solutions.</p>
                        <p className="pt-4 pb-2 text-[#3B3486]">Languages</p>
                        <p>Swift, Java, Dart, Typescript</p>
                        <p className="pt-4 pb-2 text-[#3B3486]">Mobile App Frameworks</p>
                        <ul>
                            <li>iOS (Swift / Objective-C)</li>
                            <li>Android (Java / Kotlin)</li>
                            <li>React Native (Cross-Platform)</li>
                            <li>Flutter (Cross-Platform)</li>
                        </ul>
                        <p className="pt-4 pb-2 text-[#3B3486]">Backend Frameworkds and DB</p>
                        <ul>
                            <li>Python - Flask, Fast API and Django</li>
                            <li>Java - Spring Framework, Hibernate</li>
                            <li>JavaScript - Node.js, Express.js</li>
                            <li>Postgres, Cassandra, Scylla DB, MongoDB</li>
                        </ul>
                    </div>
                    <div className="md:w-2/3 text-center flex flex-col items-center py-[3.25rem] ">
                        <div className="p-[2rem] bg-[#BFACE2] rounded-[2rem]">
                            <AiOutlineAntDesign size={"2.5rem"} />
                        </div>
                        <h3 className="pt-4 pb-2">Specialized Solutions</h3>
                        <p className="px-4">Leveraging cutting-edge technologies to provide advanced and tailored solutions for your business needs.</p>
                        <p className="pt-4 pb-2 text-[#3B3486]">AI & ML</p>
                        <p>TensorFlow, PyTorch, Scikit-learn</p>
                        <p className="pt-4 pb-2 text-[#3B3486]">Blockchain</p>
                        <ul>
                            <li>Ethereum, Solidity, Solana, IC</li>
                            <li>Web3.js, Smart Contracts</li>
                            <li>RUST, Python, Typescript</li>
                            <li>Truffle, IPFS</li>
                        </ul>
                        <p className="pt-4 pb-2 text-[#3B3486]">Cloud & DevOps</p>
                        <ul>
                            <li>AWS, Azure, GCP</li>
                            <li>Docker, Kubernetes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

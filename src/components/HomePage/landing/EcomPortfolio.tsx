/* eslint-disable react/no-unescaped-entities */
import React from "react";
import EcommerceCard from "../other/EcommerceCard";



function EcomPortfolio() {
    return (
        <section id="e-commerce">
            <div className="bg-[#3B3486]">
                <div className="lg:container mx-auto pb-[7rem] flex justify-center">
                    <div className="text-center px-2 sm:px-0 sm:w-2/3 py-[7rem]">
                        <h2 className="text-[#eaeaea] text-[2.2rem] sm:text-[3rem] font-[600]">Explore Our E-commerce Showcase</h2>
                        <p className="text-[#eaeaea] my-10">
                            Passionate about digital innovation, we've explored diverse web
                            and mobile apps across industries. Transitioning from users to
                            creators, our expertise now focuses on exceptional web and mobile
                            app development. Specializing in eCommerce solutions, we bring a
                            wealth of experience to tailor dynamic and impactful digital
                            experiences for your project.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className=" mx-auto flex lg:flex-row md:flex-row flex-col justify-center mt-[-8.5rem] mb-[6rem]">
                    <div className="lg:container sm:px-5 mx-auto">
                        <div className="flex flex-wrap sm:m-4">
                            <EcommerceCard
                                heading={"Grocery"}
                                text={
                                    "Redefine your grocery game with our cutting-edge eCommerce platform, delivering a curated selection for a modern, seamless shopping experience."
                                }
                                href={"https://grocery.hazecart.com"}
                            />
                            <EcommerceCard
                                heading={"Clothing"}
                                text={
                                    "Revamp your wardrobe effortlessly with our chic clothing eCommerce, offering a curated collection for a contemporary and stylish shopping experience."
                                }
                                href={"https://clothing.hazecart.com"}
                            />
                            <EcommerceCard
                                heading={"Electronics"}
                                text={
                                    "Elevate your tech game with our cutting-edge electronics eCommerce, offering a curated selection for a seamless and innovative shopping experience."
                                }
                                href={"https://electronics.hazecart.com"}
                            />
                            <EcommerceCard
                                heading={"Dairy"}
                                text={
                                    "Reimagine your dairy shopping with our dedicated eCommerce, providing a thoughtfully curated selection for a fresh and convenient journey to your doorstep."
                                }
                                href={""}
                            />
                            <EcommerceCard
                                heading={"Supplements"}
                                text={
                                    "Optimize your well-being with our exclusive supplement emporium, featuring a meticulously curated range for a personalized path to a healthier and vibrant lifestyle."
                                }
                                href={""}
                            />
                            <EcommerceCard
                                heading={"Skin Care"}
                                text={
                                    "Redefine your grocery game with our cutting-edge eCommerce platform, delivering a curated selection for a modern, seamless shopping experience."
                                }
                                href={""}
                            />
                            <EcommerceCard
                                heading={"Jewellery and Accessories"}
                                text={
                                    "Indulge in self-care with our bespoke skincare sanctuary, presenting a thoughtfully curated selection for a radiant and rejuvenating beauty experience."
                                }
                                href={""}
                            />
                            <EcommerceCard
                                heading={"Toys and Games"}
                                text={
                                    "Delight the young and the young at heart with a vibrant assortment of toys, games, and best entertainment options."
                                }
                                href={""}
                            />
                            <EcommerceCard
                                heading={"Books and Stationery"}
                                text={
                                    "Immerse yourself in the world of literature and creativity with a diverse collection of books and stationery."
                                }
                                href={""}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EcomPortfolio;

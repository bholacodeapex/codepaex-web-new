
import React from "react";
import SurgeIcon from "../../../../public/Images/projects/surgeIcon.svg";
import SurgeBack from "../../../../public/Images/projects/surgeBackground.webp";
import Hazecart from "../../../../public/Images/projects/hazecart.webp";
import SurgeBranding from "../../../../public/Images/projects/surgeBranding.png";
import PollyBack from "../../../../public/Images/projects/Polly.jpeg";
import PriceBack from "../../../../public/Images/projects/PriceRipper.jpeg"
import MadklubennLogo from "../../../../public/Images/projects/Madklubenn.svg"
import MadklubennBack from "../../../../public/Images/projects/madklubbenBack.avif"
import PortfolioCard from "../other/PortfolioCard";

function Portfolio() {

    return (
        <section className="body-font pt-[6rem]" id="portfolio">
            <div className="sm:container px-5 mx-auto ">
                <h2 className="leading-tight text-center mb-[4rem] text-[2.2rem] sm:text-[3rem] font-[600]">Our Work</h2>
                <div className="flex flex-wrap -m-4">
                    <PortfolioCard
                        projectName={"Polly"}
                        projectText={
                            "A local bistro with a French touch located in Frederiksberg. This dining establishment welcomes patrons for breakfast, lunch, and dinner."
                        }
                        href={"https://restaurantpolly.dk/"}
                        alt={"Restaurant Polly Image"}
                        image={PollyBack}
                    />
                    <PortfolioCard
                        projectName={""}
                        icon={SurgeIcon}
                        alt={"Surge Party Image"}
                        href={"https://apps.apple.com/us/app/surge-playlist-for-parties/id1643038656"}
                        projectText={
                            "Effortlessly curate and explore a wide array of events while seamlessly sending personalized invitations to friends and potential participants."
                        }
                        image={SurgeBack}
                    />
                    <PortfolioCard
                        projectName={"Priceripper"}
                        alt={"Priceripper Image"}
                        projectText={
                            "Navigate the Savings Sea: Dive Deep into Price Comparisons to Surface with Unbeatable Deals!"
                        }
                        href={"https://www.priceripper.co.uk/"}
                        image={PriceBack}
                    />
                    <PortfolioCard
                        projectName={"surge web"}
                        alt={"Surge Branding Image"}
                        projectText={
                            "Web version of Surge Party to send invitations to those who doesn't have the app."
                        }
                        href={"https://surgeparty.com/events/36/"}
                        image={SurgeBranding}
                    />
                    <PortfolioCard
                        projectName={""}
                        icon={MadklubennLogo}
                        alt={"Madklubenn Image"}
                        href={"https://www.madklubben.dk/"}
                        projectText={
                            "Madklubben operates over 40 dining establishments throughout Denmark, offering a variety of business lunch solutions and catering services."
                        }
                        image={MadklubennBack}
                    />
                    <PortfolioCard
                        projectName={"Hazecart"}
                        projectText={
                            "Where Your Business Dreams Flourish: The Cozy Corner for Renting Your Online Shop – Simple, Friendly, Yours"
                        }
                        href={"https://www.hazecart.com/"}
                        alt={"Hazecart Image"}
                        image={Hazecart}
                    />
                    <div className="p-4 md:w-1/2 w-full"></div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

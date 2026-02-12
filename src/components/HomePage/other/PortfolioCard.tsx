
import Image from "next/image";
import React from "react";

function PortfolioCard(props: any) {
    let width;
    if (props.projectName == "") {
        if (props.alt == "Surge Party Image") {
            width = "4rem"
        } else {
            width = "14rem"
        }
    } else {
        width = "3rem"
    }
    return (
        <div className="p-4 md:w-1/2 lg:w-1/3 w-full">
            <div className="relative group w-100 sm:h-[20rem] lg:h-[15rem] xl:h-[20rem] overflow-hidden bg-[#141c3a] m-auto rounded-[2rem]">
                <div className="absolute z-10 bg-[#141c3a] opacity-50  w-full h-full transform duration-500 inset-y-[0] group-hover:-inset-y-0 "></div>
                <div className="flex justify-center items-center absolute z-10 capitalize font-bold text-3xl text-center shadow-2xl text-[#] inset-y-[45%] inset-x-[20%]">
                    {props.icon && (
                        <Image
                            src={props.icon}
                            alt={props.alt}
                            width={100}
                            height={100}
                            style={{
                                width: width,
                                height: props.projectName == "" ? "14rem" : "3rem",
                            }}
                        />
                    )}
                    <p className={`text-[#eaeaea] ${props.projectName}`}>
                        {props.projectName}
                    </p>
                </div>
                <div className="absolute z-10 bg-[#141c3a] opacity-50 w-full h-full transform duration-500 inset-y-[100%] group-hover:-inset-y-0 "></div>
                <Image
                    className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                    src={props.image}
                    alt=""
                    width={500}
                    height={500}
                />
                <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div className="absolute z-20 bg-[#141c3a] w-full h-full transform duration-500 inset-y-[100%] group-hover:-inset-y-0 ">
                    <div className="absolute w-full flex place-content-center"></div>
                    <div className="flex flex-col items-center top-0 bottom-0 justify-center absolute place-content-center">
                        <p className="text-center w-4/5 text-[#eaeaea] my-5 lg:text-[0.85rem] xl:text-[1rem]">
                            {props.projectText}
                        </p>
                        <a
                            href={props.href}
                            className={`p-2 lg:px-4 md:mx-2 text-[#864AF9] hover:text-[#eaeaea] rounded-[0.7rem] border border-[#864AF9] transition duration-500 ease-out red-button`}
                        >
                            View Case Study
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;

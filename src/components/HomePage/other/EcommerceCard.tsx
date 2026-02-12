
import React from "react";

function EcommerceCard(props: any) {
    return (
        <div className="p-4 md:w-1/2 lg:w-1/3 w-full ">
            <div className="relative group w-100 h-auto sm:h-[30vh] p-4 overflow-hidden bg-[#fff] m-auto rounded-[2rem] flex flex-col text-center justify-center items-center gap-4  border shadow-md ">
                <h3 className="">{props.heading}</h3>
                <p className="">{props.text}</p>
                <a
                    href={props.href}
                    className={`p-2 lg:px-4 md:mx-2 text-[#3B3486] hover:text-white rounded-[0.7rem] border border-[#3B3486] transition duration-500 ease-out contact-button`}
                >
                    Visit Store
                </a>
            </div>
        </div>
    );
}

export default EcommerceCard;

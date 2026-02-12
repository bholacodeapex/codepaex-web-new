// src/fonts.ts
import localFont from "next/font/local";

export const generalSans = localFont({
    src: [
        {
            path: "../Fonts/generalsans/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
            weight: "200 700",
            style: "normal",
        },
        {
            path: "../Fonts/generalsans/Fonts/WEB/fonts/GeneralSans-Variable.woff",
            weight: "200 700",
            style: "italic",
        },
    ],
    variable: "--font-general",
    display: "swap",
});

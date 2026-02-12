import { ReactNode } from 'react'
type LayoutProps = {
  children: ReactNode
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Footer from '@/components/HomePage/footer/Footer'
import { Metadata } from 'next'
import Navbar from '@/components/HomePage/header/Nav'

export const metadata: Metadata = {
  title: "CodeApex",
  description: "At Codeapex LLP, we go beyond the vanilla limits of software engineering to offer full turnkey solutions for web and mobile applications. Our teams are empowered with state-of-the-art technologies and frameworks. We create reliable, scalable, and frictionless digital experiences. We are not developers; we are innovators and problem solvers driven with the passion to constantly exceed the expectations of our customers. Web Development: We develop dynamic, responsive websites and apps using the latest technology stacks such as React JS, Next JS, Express, Node JS, Python, Flask, and Fast API. Our web solutions have emerged as a result of our expertise in a single aspect: creating visually compelling designs that are at the same time robust and efficient, offering a full user experience. Mobile Application Development: We understand your aspiration to create great mobile apps, either native or cross-platform mobile application development. For these purposes, we do interactive, rich applications with an intuitive interface using either Flutter and React Native for cross-platform or native development with the use of Java and Swift/SwiftUI for iOS and Kotlin for Android. Codeapex LLP is more than just a service provider to customers; it acts as the guiding partner en route to digital transformation. We will guide you through the digital jungle with solutions that are tailor-made to the exact needs of impacting and building for future purposes.",
};

const Layout = ({ children }: LayoutProps) => {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header>
          <nav className="fixed top-0 w-full z-[1000] bg-white">
            <Navbar />
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

export default Layout

import React from 'react'
import HeroSection from '@/components/HomePage/landing/HeroSection'
import SkillSection from '@/components/HomePage/landing/SkillSection'
import Testimonials from '@/components/HomePage/landing/Testimonials'
import Portfolio from '@/components/HomePage/landing/Portfolio'
import EcomPortfolio from '@/components/HomePage/landing/EcomPortfolio'

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <Testimonials />
      <Portfolio />
      {/* <EcomPortfolio /> */}
    </>
  )
}

import Achievement from '@/components/Achievement'
import Affiliation from '@/components/Affiliation'
import CTA from '@/components/CTA'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import UpperNav from '@/components/UpperNav'
import React from 'react'

const Page = () => {
  return (
    <div>
      <span
        className="flex flex-col text-base"
      >
        <span
          className="fixed right-0 left-0 bg-primary"
        >
          <UpperNav />
          <Navbar />
        </span>
        <Hero />
        <Affiliation />
        <CTA />
        <Achievement />
        <Courses />
        <Team />
        <Testimonial />
        <Newsletter />
        <Footer />
      </span>
    </div>
  )
}

export default Page

"use client"

import ContactSection from "@/components/ContactSection/ContactSection"
import FAQSection from "@/components/FAQSection/FAQSection"
import HomeBanner from "@/components/HomeBanner/HomeBanner"
import MaxWidthContainer from "@/components/MaxWidthContainer/MaxWidthContainer"
import WhoWeAreSection from "@/components/WhoWeAreSection/WhoWeAreSection"
import homeData from "@/data/HomePage/homePageData.json";
import CreativeSolutionsData from "@/data/CreativeSolutionsData/CreativeSolutionsData.json";
import CreativeSolutions from "@/components/Creative solutions/CreativeSolutions"
import WorkSectionData from "@/data/workData/workData.json"
import WorkSection from "@/components/WorkSection/WorkSection"
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider"
import testimonialsData from "@/data/testimonials/testimonials.json";
const page = () => {
  return (
    <>
      
        <HomeBanner data={homeData}/>
        <WhoWeAreSection data={homeData}/>
        <CreativeSolutions CreativeSolutionsData={CreativeSolutionsData}/>
        <WorkSection data={WorkSectionData}/>
        <TestimonialSlider testimonialsData ={testimonialsData}/>
        <FAQSection/>
        <ContactSection/>
    </>
  )
}

export default page

import CaseStudyAbout from "@/components/CaseStudyAbout/CaseStudyAbout";
import CaseStudyBanner from "@/components/CaseStudyBanner/CaseStudyBanner";
import ContactSection from "@/components/ContactSection/ContactSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import CaseStudyBannerData from "@/data/CaseStudyBannerData/CaseStudyBannerData.json"
import CaseStudyAboutData from "@/data/CaseStudyAboutData/CaseStudyAboutData.json"
import CaseStudyChallengeData from "@/data/CaseStudyChallengeData/CaseStudyChallengeData.json"
import CaseStudyChallenge from "@/components/CaseStudyChallenge/CaseStudyChallenge";
import CaseStudyTheResult from "@/components/CaseStudyTheResultComponent/CaseStudyTheResultComponent";
import CaseStudyTheResultData from "@/data/CaseStudyResultData/CaseResultData.json";
import CaseStudyProcessSection from "@/components/CaseStudyProcessSection/CaseStudyProcessSection";
import CaseStudyProcessData from "@/data/CaseStudyProcessData/CaseStudyProcessData.json";
const page = () => {
  return (
    <>
    <CaseStudyBanner data ={CaseStudyBannerData}/>
    <CaseStudyAbout data ={CaseStudyAboutData}/>
    <CaseStudyChallenge data = {CaseStudyChallengeData}/>
    <CaseStudyProcessSection data = {CaseStudyProcessData}/>
    <CaseStudyTheResult data = {CaseStudyTheResultData}/>
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default page;

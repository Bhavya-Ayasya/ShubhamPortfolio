import ContactSection from "@/components/ContactSection/ContactSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import HeadingComponent from "@/components/HeadingComponent/HeadingComponent";
import ThumbnailGallery from "@/components/ThumbnailGallery/ThumbnailGallery";
import ThumbnailGalleryData from "@/data/thumbnailGallery/thumbnailGallery.json"
import YoutubeEditData from "@/data/YouTubeEdits/YouTubeEditsData.json"
import PodcastData from "@/data/PodcastData/PodcastData.json"
import ShortFormData from "@/data/Short-FormData/Short-FormData.json"
const page = () => {
  return (
    <>
    <HeadingComponent/>
    <ThumbnailGallery data = {ShortFormData}/>
    <ThumbnailGallery data = {ThumbnailGalleryData}/>
    <ThumbnailGallery data = {YoutubeEditData}/>
    <ThumbnailGallery data = {PodcastData}/>
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default page;

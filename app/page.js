import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import LatestProperties from "../components/LatestProperties";
import ImageContainer from "../components/ImageContainer";
import Services from "../components/Services";
import ImagesContainer2 from "../components/ImagesContainer2";
import Experts from "../components/Experts";
import BlogsAndPosts from "../components/BlogsAndPosts";
import Testimonials from "../components/Testimonials";
import BecomeAnAgent from "../components/BecomeAnAgent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-screen">
      <Navigation />      
      <Hero />
      <WhoWeAre />
       <LatestProperties/>
     <ImageContainer/> 
       <Services/>
      <Experts/>
      <BlogsAndPosts/>
      <Testimonials/>    
      {/*<BecomeAnAgent/>*/}
      <Footer/>
    </div>
  );
}

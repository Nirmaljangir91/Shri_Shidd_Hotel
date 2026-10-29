
import Navbar from "../components/Navbar.component";
import Hero from "../components/HeroSection.component";
import Rooms from "../components/rooms.component";
import Services from "../components/Service.component";
import OurStory from "../components/Our_Story.component";
import RoomPreview from "../components/Room_Preview.component";
import Facilities from "../components/Facilities.component";
import GuestReviews from "../components/GuestReviews.component";
import Gallery from "../components/Gallery.component";
import Journal from "../components/Journal.component";
import Footer from "../components/footer.component";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Rooms />
        <Services />
        <OurStory />
        <RoomPreview />
        <Facilities />
        <GuestReviews />
        <Gallery />
        <Journal />
      </main>

      <Footer />
    </>
  );
}

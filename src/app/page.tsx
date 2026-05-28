import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import MenuSection from '@/components/sections/MenuSection';
import RestaurantPhoto from '@/components/sections/RestaurantPhoto';
import Reviews from '@/components/reviews/Reviews';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pt-[85px] max-[500px]:pt-[65px]"
        role="main"
      >
        <About />
        <MenuSection />
        <Reviews />
        <RestaurantPhoto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
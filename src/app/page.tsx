import Navbar from '@/components/layout/Navbar';
import MenuSection from '@/components/sections/MenuSection';

export default function Home() {
  return (
    <>
      <Navbar />
      {/*
        pt matches the navbar height: 65px on phones (<500px),
        85px on everything larger. Keeps content from sliding
        under the fixed navbar on initial paint.
      */}
      <main
        className="min-h-screen pt-[85px] max-[500px]:pt-[65px]"
        role="main"
      >
        {/* Phase 2: <About /> */}
        <MenuSection />
        {/* Phase 3: <Reviews /> */}
        {/* Phase 2: <RestaurantPhoto /> */}
        {/* Phase 2: <Contact /> */}
      </main>
      {/* Phase 2: <Footer /> */}
    </>
  );
}
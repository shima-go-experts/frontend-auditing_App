// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';
// import CategoriesSection from '../components/CategoriesSection'
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
      
//       <main className="p-16">
//         {/* <h1 className="text-4xl font-bold mb-4">Welcome to WELDORK</h1>
//         <p className="text-lg text-gray-700">
//           This is your main landing page. Replace this content with your homepage information.
//         </p> */}
//       </main>
//     </>
//   );
// }

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import CategoriesSection1 from '../components/CategoriesSection1';
import CategoriesSection2 from '../components/CategoriesSection2';
import ScrollableTeamBanner from '../components/ScrollableTeamBanner';
import VerificationProcess from '../components/VerificationProcess';
import SpecialistsSection from '../components/SpecialistsSection';
 import CollaborationSection from '../components/CollaborationSection';
import Footer from '../components/Footer';
import PromoBanner from '../components/PromoBanner';
import ProcessSection from '../components/ProcessSection';
import InfoPanels from '../components/InfoPanels';
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
<CategoriesSection1/>
<CategoriesSection2/>
<CategoriesSection />
<VerificationProcess/>
<SpecialistsSection/>
<ScrollableTeamBanner/>
<CollaborationSection/>
<ProcessSection/>
<PromoBanner/>

<Footer/>
    </>
  );
}

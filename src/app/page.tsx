import Header from '@/components/Header/Header';
import PracticeAreas from '@/components/PracticeAreas/PracticeAreas';
import BoardCertified from '@/components/BoardCertified/BoardCertified';
import Partners from '@/components/Partners/Partners';
import Process from '@/components/Process/Process';
import CTABanner from '@/components/CTABanner/CTABanner';
import Newsletter from '@/components/Newsletter/Newsletter';
import Testimonials from '@/components/Testimonials/Testimonials';
import OfficeLocations from '@/components/OfficeLocations/OfficeLocations';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <CTABanner />
      <Newsletter />
      <PracticeAreas />
      <BoardCertified />
      <Partners />
      <Process />
      <Testimonials />
      <OfficeLocations />
      <Footer />
    </main>
  );
}

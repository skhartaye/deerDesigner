import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import OfficeLocations from '@/components/OfficeLocations/OfficeLocations';

export default function Contact() {
  return (
    <main>
      <Header />
      <ContactForm />
      <OfficeLocations />
      <Footer />
    </main>
  );
}

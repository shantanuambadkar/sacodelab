import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}

export default App;
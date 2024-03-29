import About from "../../Components/AboutCompany/About";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SectionObras from "../../Components/SectionObras";
import ServicesSection from "../../Components/ServicesSection";
export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ServicesSection />
      <SectionObras />
      <Footer />
    </>
  );
}

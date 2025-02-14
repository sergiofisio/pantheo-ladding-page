// src/pages/index.tsx
import Header from "../components/header";
import ContactForm from "../components/form";
import FAQSection from "../components/FAQ";
import Footer from "../components/footer";
import Services from "../components/services";
import Differences from "../components/differrences";
import Principal from "../components/principal";

export default function HomePage() {
  return (
    <>
      <Header />
      <Principal />
      <Services />
      <Differences />
      <ContactForm />
      <FAQSection />
      <Footer />
    </>
  );
}

import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Contacts from "../components/Home/Contacts";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  return (
    <div data-scroll-section>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Contacts />
      </Layout>
    </div>
  );
}

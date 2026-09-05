import { Helmet } from "react-helmet-async";
import Hero from "../layouts/Hero";
import WhyChoose from "../layouts/WhyChoose";
import Founder from "../layouts/Founder";
import Coverage from "../layouts/Coverage";
import Stats from "../layouts/Stats";
import Services from "../layouts/Services";
import Conditions from "../layouts/Conditions";
import Journey from "../layouts/Journey";
import Testimonials from "../layouts/Testimonials";
import Contact from "../layouts/Contact";
import Trust from "../layouts/Trust";
import CtaBand from "../layouts/CtaBand";
import News from "../layouts/News";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Rehab Therapist | Specialist Neuro & Elderly Physiotherapy
        </title>
        <meta
          name="description"
          content="Expert home-based neurological and elderly physiotherapy rehabilitation services across the UK."
        />
      </Helmet>
      <main>
        <Hero />
        <WhyChoose />
        <Founder />
        <Coverage />
        <Stats />
        <Services />
        <Conditions />
        <Journey />
        <Testimonials />
        <Trust />
        <CtaBand />
        <News />
        <Contact />
      </main>
    </>
  );
};

export default Home;

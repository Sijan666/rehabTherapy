import { Helmet } from "react-helmet-async";
import Banner from "../treatLayouts/Banner";
import HomeVisite from "../treatLayouts/HomeVisite";
import Location from "../treatLayouts/Location";
import Book from "../treatLayouts/Book";
import Raffer from "../treatLayouts/Raffer";
import Schedule from "../treatLayouts/Schedule";
import TalkDoctor from "../treatLayouts/TalkDoctor";
import Testimonial from "../treatLayouts/Testimonial";
import WhyChoose from "../treatLayouts/WhyChoose";

const Treat = () => {
  return (
    <>
      <Helmet>
        <title>Rehab Therapist | What we treat</title>
        <meta
          name="description"
          content="Expert home-based neurological and elderly physiotherapy rehabilitation services across the UK."
        />
      </Helmet>
      <main>
        <Banner />
        <HomeVisite />
        <Location />
        <Book />
        <Raffer />
        <Schedule />
        <TalkDoctor />
        <Testimonial />
        <WhyChoose />
      </main>
    </>
  );
};

export default Treat;

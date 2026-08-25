import { Helmet } from "react-helmet-async";
import Banner from "../treatLayouts/Banner";
import HomeVisite from "../treatLayouts/HomeVisite";
import Location from "../treatLayouts/Location";

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
      </main>
    </>
  );
};

export default Treat;

import { Helmet } from "react-helmet-async";
import Banner from "../treatLayouts/Banner";

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
      </main>
    </>
  );
};

export default Treat;

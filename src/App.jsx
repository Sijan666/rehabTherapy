import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";
import Loader from "./components/Loader";

const RootLayouts = lazy(() => import("./components/layouts/RootLayouts"));
const Home = lazy(() => import("./components/pages/Home"));
const About_Us = lazy(() => import("./components/pages/About_Us"));
const Treat = lazy(() => import("./components/pages/Treat"));
const Service = lazy(() => import("./components/pages/Service"));

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About_Us />} />
            <Route path="/conditions" element={<Treat />} />
            <Route path="/services" element={<Service />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </ReactLenis>
  );
}

export default App;

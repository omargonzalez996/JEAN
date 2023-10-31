import { lazy, Suspense } from "react";
import { Icon } from "@iconify/react";

const Navbar = lazy(() => import("./components/navbar"));
const Carrousel = lazy(() => import("./components/Carrousel"));
const Socials = lazy(() => import("./components/Socials"));
const Perks = lazy(() => import("./components/Perks"));
const Products = lazy(() => import("./components/Products"));
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Socials />
      <Carrousel />
      <Perks />
      <Suspense fallback={<Icon icon="eos-icons:three-dots-loading" />}>
        <Products />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

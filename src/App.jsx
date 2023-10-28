import Navbar from "./components/navbar";
import Carrousel from "./components/Carrousel";
import Socials from "./components/Socials";
import Perks from "./components/Perks";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carrousel />
      <Products />
      <Perks />
      <Socials />
    </div>
  );
}

export default App;

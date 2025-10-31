import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Classes from "./components/Classes/Classes.jsx";
import BMI from "./components/BMI/BMI.jsx";
import Trainers from "./components/Trainers/Trainers.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> {/* <-- Hero componentini buraya ekledik */}
      <Classes />
      <BMI />
      <Trainers />
      <Reviews />
      <Contact />
      <Footer />
      <main></main>
    </div>
  );
}

export default App;

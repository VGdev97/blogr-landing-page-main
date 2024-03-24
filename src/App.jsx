import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section />
        <LastSection />
      </main>

      <Footer />
    </>
  );
}

export default App;

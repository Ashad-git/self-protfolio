import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import SkillsSection from "./components/Skills"
import CertificatesSection from "./components/CertificatesSection"
import Projects from "./components/Projects"  
import ContactSection from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  

  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <SkillsSection />
        <CertificatesSection />
        <Projects />
        <ContactSection />
        <Footer />
    </>
  )
}

export default App

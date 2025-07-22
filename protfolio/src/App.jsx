import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import SkillsSection from "./components/Skills"
import CertificatesSection from "./components/CertificatesSection"


function App() {
  

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Hero />
        <About />
        <SkillsSection />
        <CertificatesSection />
        <section id="home" className="h-screen flex justify-center items-center">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </section>
      </div>
    </>
  )
}

export default App

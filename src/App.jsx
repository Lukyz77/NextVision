import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-black'>
      <Navbar /> 
      <Hero /> 
      <About />
      <Services />
      <Portfolio /> 
      <Research />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
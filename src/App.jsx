import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Skills from './Components/Skills'
import WhatsApp from './Components/WhatsApp'

function App() {

  return (

      <div className=' '>
       <Navbar></Navbar>
       <Hero></Hero>
       <WhatsApp></WhatsApp>
       <About></About>
       <Project></Project>
       <Skills></Skills>
       <Contact></Contact>
       <Footer></Footer>
      </div>
      

  )
}

export default App

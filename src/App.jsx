import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import WhatsApp from './Components/WhatsApp'

function App() {

  return (

      <div className=' '>
       <Navbar></Navbar>
       <Hero></Hero>
       <WhatsApp></WhatsApp>
       <About></About>
       <Project></Project>
       <Contact></Contact>
      </div>
      

  )
}

export default App

import { BrowserRouter as Router } from 'react-router-dom'
import { ContactModalProvider } from './sections/Contacto'
import Header from './components/Header'
import Hero from './sections/Hero'
import Problema from './sections/Problema'
import Solucion from './sections/Solucion'
import Beneficios from './sections/Beneficios'
import Demo from './sections/Demo'
import Validacion from './sections/Validacion'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'

function App() {
  
  return (
    <Router>
      <ContactModalProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Hero />
          <Problema />
          <Solucion />
          <Beneficios />
          <Demo />
          <Validacion />
          <Contacto />
          <Footer />
        </div>
      </ContactModalProvider>
    </Router>
  )
}

export default App


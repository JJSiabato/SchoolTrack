import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { useContactModal } from './Contacto'

const Hero = () => {
  const { openModal } = useContactModal()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Dashboard Image with Effects */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient Overlay Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white/95 to-blue-50 z-10"></div>
        
        {/* Dashboard Image Background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: mousePosition.x,
            y: mousePosition.y
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1.5 },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="/assets/demo-dashboard.png" 
            alt=""
            className="w-full h-full object-cover opacity-[0.08] blur-[2px] scale-110"
            style={{ 
              filter: 'blur(3px) brightness(1.1)',
              transform: 'scale(1.15)'
            }}
          />
        </motion.div>

        {/* Additional Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/60 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-blue-50/50 z-20"></div>
        
        {/* Animated Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] z-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight drop-shadow-sm"
          >
            Transforma la gestión académica de tu colegio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed drop-shadow-sm"
          >
            SchoolTrack digitaliza el registro de asistencias, calificaciones y reportes, reduciendo errores y ahorrando tiempo para docentes y directivos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <Button onClick={openModal}>
              Solicitar información
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto drop-shadow-sm"
          >
            Una solución intuitiva, eficiente y diseñada para instituciones educativas que quieren dejar atrás los procesos manuales.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Demo = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="demo" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conoce cómo funciona SchoolTrack
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Esta es una vista previa del módulo principal, donde directivos y docentes pueden visualizar reportes de calificaciones y asistencia con un solo clic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-2xl p-4 md:p-8 border border-blue-200 overflow-hidden">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Browser bar simulation */}
              <div className="flex items-center justify-between bg-gray-100 px-4 py-3 border-b">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-sm text-gray-500 text-center">
                    schooltrack.app
                  </div>
                </div>
                <div className="w-12"></div>
              </div>
              
              {/* Dashboard Image */}
              <div className="relative w-full overflow-hidden bg-white">
                <motion.img 
                  src="/assets/demo-dashboard.png" 
                  alt="Dashboard de SchoolTrack mostrando la gestión de estudiantes, lista de estudiantes con sus perfiles, información de contacto y navegación del sistema"
                  className="w-full h-auto object-contain"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    // Fallback si la imagen no existe
                    e.target.style.display = 'none'
                    const fallback = e.target.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                {/* Placeholder si la imagen no se encuentra */}
                <div className="hidden w-full bg-gray-50 p-20 text-center text-gray-400 flex-col items-center justify-center min-h-[400px]">
                  <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg mb-2 font-medium">Imagen del dashboard</p>
                  <p className="text-sm">Coloca la imagen en: <code className="bg-gray-200 px-2 py-1 rounded">public/assets/demo-dashboard.png</code></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Demo


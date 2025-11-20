import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'

const Beneficios = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const beneficios = [
    'Ahorro de tiempo para docentes y administrativos.',
    'Información segura y centralizada.',
    'Mejor comunicación con familias.',
    'Datos en tiempo real y sin errores.',
    'Reportes listos para toma de decisiones.'
  ]

  return (
    <section id="beneficios" ref={ref} className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beneficios para toda la comunidad educativa
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {beneficios.map((beneficio, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{beneficio}</p>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios


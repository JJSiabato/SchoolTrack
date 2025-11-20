import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'

const Validacion = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const metricas = [
    {
      porcentaje: '70%',
      texto: 'El 70% de docentes confirmaron que el registro manual les hace perder más de 3 horas por semana.'
    },
    {
      porcentaje: '80%',
      texto: 'El 80% de directivos validaron la necesidad de reportes automáticos confiables.'
    },
    {
      porcentaje: '55%',
      texto: 'El 55% de instituciones reportan dificultades para comunicar notas a tiempo.'
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros primeros resultados
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {metricas.map((metrica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="text-center h-full">
                  <div className="text-5xl font-bold text-amber-600 mb-4">
                    {metrica.porcentaje}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {metrica.texto}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Validacion


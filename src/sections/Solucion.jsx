import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from '../components/Card'

const Solucion = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const modulos = [
    {
      titulo: 'Gestión de notas',
      descripcion: 'Registra, edita y consulta calificaciones de manera rápida y segura.'
    },
    {
      titulo: 'Control de asistencia',
      descripcion: 'Lleva un seguimiento claro y actualizado de la asistencia de cada estudiante.'
    },
    {
      titulo: 'Reportes automáticos',
      descripcion: 'Genera informes en segundos para directivos y coordinadores.'
    },
    {
      titulo: 'Panel para padres',
      descripcion: 'Facilita la comunicación y el acceso a información del desempeño académico.'
    }
  ]

  return (
    <section id="solucion" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SchoolTrack: la plataforma que simplifica la gestión académica
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Un sistema sencillo, accesible y diseñado para centralizar toda la información académica de tu colegio en un solo lugar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {modulos.map((modulo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {modulo.titulo}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {modulo.descripcion}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solucion


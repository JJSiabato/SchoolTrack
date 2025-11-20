import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400">
            © 2025 SchoolTrack. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


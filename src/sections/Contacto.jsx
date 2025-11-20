import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { createContext, useContext } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ContactForm from '../components/ContactForm'

// Context para manejar el estado del modal globalmente
const ContactModalContext = createContext()

export const useContactModal = () => {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used within ContactModalProvider')
  }
  return context
}

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} title="Solicita más información">
        <div className="mb-4">
          <p className="text-gray-600">
            Déjanos tus datos y te contactaremos para mostrarte una demo completa de SchoolTrack.
          </p>
        </div>
        <ContactForm onSuccess={closeModal} />
      </Modal>
    </ContactModalContext.Provider>
  )
}

const Contacto = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { openModal } = useContactModal()

  return (
    <section id="contacto" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solicita más información
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Déjanos tus datos y te contactaremos para mostrarte una demo completa de SchoolTrack.
          </p>
          <Button onClick={openModal}>
            Abrir formulario de contacto
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contacto


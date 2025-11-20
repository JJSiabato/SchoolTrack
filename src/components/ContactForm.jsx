import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from './Button'
import { supabase } from '../utils/supabase'

const addDocument = async (data) => { 
  const { error } = await supabase
      .from('registro')
      .insert([
        { ...data }
      ]);
  if (error) {
    console.error("Error al registrar");
  } else {
    console.log("Registro exitoso");
  }
};


const ContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    rol: '',
    institucion: '',
    email: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await addDocument(formData)
      setSubmitStatus('success')
      setFormData({
        nombre: '',
        rol: '',
        institucion: '',
        email: '',
        mensaje: ''
      })
      if (onSuccess) {
        setTimeout(() => {
          onSuccess()
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)  
      setSubmitStatus('error')
      setFormData({
        nombre: '',
        rol: '',
        institucion: '',
        email: '',
        mensaje: ''
      })
      if (onError) {
        setTimeout(() => {
          onError()
        }, 2000)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="modal-nombre" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="modal-nombre"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="modal-rol" className="block text-sm font-semibold text-gray-700 mb-2">
          Rol
        </label>
        <select
          id="modal-rol"
          name="rol"
          required
          value={formData.rol}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80"
        >
          <option value="">Selecciona tu rol</option>
          <option value="rector">Rector</option>
          <option value="coordinador">Coordinador</option>
          <option value="docente">Docente</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="modal-institucion" className="block text-sm font-semibold text-gray-700 mb-2">
          Institución
        </label>
        <input
          type="text"
          id="modal-institucion"
          name="institucion"
          required
          value={formData.institucion}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80"
          placeholder="Nombre de tu institución"
        />
      </div>

      <div>
        <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="modal-email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white/80"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="modal-mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="modal-mensaje"
          name="mensaje"
          required
          value={formData.mensaje}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none bg-white/80"
          placeholder="Cuéntanos sobre tus necesidades..."
        />
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4"
        >
          Gracias por contactarnos. Te escribiremos pronto.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4"
        >
          Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.
        </motion.div>
      )}

      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm


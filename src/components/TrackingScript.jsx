import { useEffect } from 'react'

const TrackingScript = () => {
  useEffect(() => {
    // Verificar si el script ya existe para evitar duplicados
    if (document.querySelector('script[src*="contentsquare"]')) {
      return
    }

    // Crear y agregar el script
    const script = document.createElement('script')
    script.src = 'https://t.contentsquare.net/uxa/9d0f8eecb73a1.js'
    script.async = true
    script.defer = true
    
    // Agregar el script al head
    document.head.appendChild(script)

    // Cleanup: remover el script si el componente se desmonta
    return () => {
      const existingScript = document.querySelector('script[src*="contentsquare"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null // Este componente no renderiza nada
}

export default TrackingScript


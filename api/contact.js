import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Cargar variables de entorno desde .env en desarrollo local
// En Vercel, las variables se cargan automáticamente desde la configuración
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  dotenv.config()
}

export default async function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    // Verificar que las variables de entorno estén configuradas
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase credentials missing')
      return res.status(500).json({ 
        success: false, 
        error: 'Configuración del servidor incompleta' 
      })
    }

    // Inicializar cliente de Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { nombre, rol, institucion, email, mensaje } = req.body

    // Validación de campos
    if (!nombre || !rol || !institucion || !email || !mensaje) {
      return res.status(400).json({ 
        success: false, 
        error: 'Todos los campos son requeridos' 
      })
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email inválido' 
      })
    }

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('registro')
      .insert([
        {
          nombre,
          rol,
          institucion,
          email,
          mensaje,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ 
        success: false, 
        error: 'Error al guardar los datos' 
      })
    }

    return res.status(200).json({ 
      success: true, 
      data: data[0] 
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor' 
    })
  }
}


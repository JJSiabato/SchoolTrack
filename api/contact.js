import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import os from 'os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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

    // Determinar ruta de datos (en desarrollo usa ./data, en producción /tmp)
    const isProduction = process.env.VERCEL === '1'
    const dataDir = isProduction 
      ? path.join(os.tmpdir(), 'schooltrack-data')
      : path.join(__dirname, '..', 'data')
    
    // Crear carpeta data si no existe
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Leer leads existentes o crear array vacío
    const leadsFile = path.join(dataDir, 'leads.json')
    let leads = []
    
    if (fs.existsSync(leadsFile)) {
      try {
        const fileContent = fs.readFileSync(leadsFile, 'utf-8')
        leads = JSON.parse(fileContent)
      } catch (e) {
        console.error('Error reading leads file:', e)
        leads = []
      }
    }

    // Agregar nuevo lead
    const newLead = {
      id: Date.now().toString(),
      nombre,
      rol,
      institucion,
      email,
      mensaje,
      fecha: new Date().toISOString()
    }

    leads.push(newLead)

    // Guardar en archivo
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf-8')

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor' 
    })
  }
}


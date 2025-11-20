# Configuración de Supabase para SchoolTrack

## 📋 Pasos para configurar Supabase

### 1. Crear cuenta y proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración (puede tomar unos minutos)

### 2. Crear la tabla en Supabase

1. En el dashboard de Supabase, ve a **Table Editor**
2. Haz clic en **New Table**
3. Configura la tabla con los siguientes datos:

**Nombre de la tabla:** `contact_leads`

**Campos (Columns) a crear:**

| Nombre de Columna | Tipo | Configuración | Descripción |
|------------------|------|---------------|-------------|
| `id` | `uuid` | Primary Key, Default: `gen_random_uuid()` | ID único (se genera automáticamente) |
| `nombre` | `text` | NOT NULL | Nombre completo del contacto |
| `rol` | `text` | NOT NULL | Rol del contacto (rector, coordinador, docente, otro) |
| `institucion` | `text` | NOT NULL | Nombre de la institución |
| `email` | `text` | NOT NULL | Email del contacto |
| `mensaje` | `text` | NOT NULL | Mensaje del formulario |
| `created_at` | `timestamptz` | Default: `now()` | Fecha y hora de creación (se genera automáticamente) |

### 3. Configurar permisos (Row Level Security)

1. Ve a **Authentication** > **Policies** en el menú lateral
2. Selecciona la tabla `contact_leads`
3. Crea una nueva política para permitir INSERT anónimo:

**Policy Name:** `Allow anonymous inserts`

**Policy Definition:**
```sql
CREATE POLICY "Allow anonymous inserts" ON contact_leads
FOR INSERT
TO anon
WITH CHECK (true);
```

O usando la interfaz:
- **Policy name:** `Allow anonymous inserts`
- **Allowed operation:** `INSERT`
- **Target roles:** `anon`
- **USING expression:** Dejar vacío
- **WITH CHECK expression:** `true`

### 4. Obtener las credenciales de API

1. Ve a **Settings** > **API** en el menú lateral
2. Copia los siguientes valores:
   - **Project URL** (será tu `SUPABASE_URL`)
   - **anon/public key** (será tu `SUPABASE_ANON_KEY`)

### 5. Configurar variables de entorno en Vercel

1. Ve a tu proyecto en [Vercel](https://vercel.com)
2. Ve a **Settings** > **Environment Variables**
3. Agrega las siguientes variables:

```
SUPABASE_URL=tu_project_url_aqui
SUPABASE_ANON_KEY=tu_anon_key_aqui
```

4. Asegúrate de que estén disponibles para:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. Haz clic en **Save**

6. **IMPORTANTE:** Después de agregar las variables, debes hacer un nuevo deploy:
   - Ve a **Deployments**
   - Haz clic en los tres puntos (⋯) del último deployment
   - Selecciona **Redeploy**
   - O simplemente haz un push nuevo a tu repositorio

### 6. Configurar variables de entorno localmente (opcional)

Si quieres probar localmente, crea un archivo `.env` en la raíz del proyecto:

```env
SUPABASE_URL=tu_project_url_aqui
SUPABASE_ANON_KEY=tu_anon_key_aqui
```

**⚠️ Importante:** No subas el archivo `.env` a Git. Ya está en `.gitignore`.

### 7. Instalar dependencias

```bash
npm install
```

### 8. Probar el formulario

1. Ejecuta el proyecto: `npm run dev`
2. Abre el formulario de contacto
3. Envía un formulario de prueba
4. Verifica en Supabase que el registro se haya creado correctamente

## 🔍 Verificar que funciona

1. En Supabase, ve a **Table Editor** > `contact_leads`
2. Deberías ver los registros que se envían desde el formulario
3. Cada registro incluirá:
   - ID único
   - Todos los campos del formulario
   - Timestamp de creación

## 📝 SQL alternativo (si prefieres usar SQL Editor)

Si prefieres crear la tabla usando SQL, ve a **SQL Editor** y ejecuta:

```sql
-- Crear tabla
CREATE TABLE contact_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  rol TEXT NOT NULL,
  institucion TEXT NOT NULL,
  email TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir INSERT anónimo
CREATE POLICY "Allow anonymous inserts" ON contact_leads
FOR INSERT
TO anon
WITH CHECK (true);
```

## 🎯 Estructura de la tabla resumida

```
contact_leads
├── id (uuid, PK, auto-generado)
├── nombre (text, required)
├── rol (text, required)
├── institucion (text, required)
├── email (text, required)
├── mensaje (text, required)
└── created_at (timestamptz, auto-generado)
```

## ⚠️ Notas importantes

- El `SUPABASE_ANON_KEY` es seguro para usar en el frontend/API porque está protegido por Row Level Security
- Solo se permite INSERT, no se pueden leer los datos sin autenticación
- Los datos se guardan permanentemente en Supabase (no se pierden como en `/tmp`)
- Puedes ver todos los leads en el dashboard de Supabase


# Configuración de Variables de Entorno en Vercel

## Variables Requeridas

### 1. RESEND_API_KEY (Requerida)

- **Valor:** `re_dUeo4EBH_CK6GggP6wYHXvC5fndKY1RyR`
- **Descripción:** API key de Resend para enviar emails
- **Ambientes:** Production, Preview, Development

### 2. CONTACT_EMAIL (Requerida)

- **Valor:** `santi.jrs.sg@gmail.com`
- **Descripción:** Email donde recibirás los mensajes del formulario de contacto
- **Ambientes:** Production, Preview, Development

## Variables Opcionales

### 3. FROM_EMAIL (Opcional)

- **Valor:** `onboarding@resend.dev` (por defecto) o tu email verificado
- **Descripción:** Email desde el cual se enviarán los mensajes
- **Ambientes:** Production, Preview, Development
- **Nota:** Si verificaste un dominio en Resend, usa ese email

### 4. FROM_NAME (Opcional)

- **Valor:** `Portfolio Contact` (por defecto) o `Santiago Giorgetti`
- **Descripción:** Nombre que aparecerá como remitente
- **Ambientes:** Production, Preview, Development

## Pasos para Configurar en Vercel

1. **Ve a tu proyecto en Vercel:**
   - Dashboard → Selecciona el proyecto `Portfolio-2026`

2. **Settings → Environment Variables:**
   - Click en "Settings" (engranaje)
   - Click en "Environment Variables" en el menú lateral

3. **Agrega cada variable:**
   - Click en "Add New"
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_dUeo4EBH_CK6GggP6wYHXvC5fndKY1RyR`
   - **Ambientes:** Marca las 3 (Production, Preview, Development)
   - Click "Save"
   - Repite para `CONTACT_EMAIL` con valor `santi.jrs.sg@gmail.com`
   - (Opcional) Agrega `FROM_EMAIL` y `FROM_NAME` si quieres personalizarlos

4. **Verifica que estén todas:**
   - Deberías ver al menos 2 variables:
     - ✅ RESEND_API_KEY
     - ✅ CONTACT_EMAIL

5. **Redeploy después de agregar variables:**
   - Ve a "Deployments"
   - Click en los 3 puntos del último deployment
   - "Redeploy" para aplicar las nuevas variables

## Verificación

Para verificar que funcionan:

1. **Prueba el formulario de contacto:**
   - Envía un mensaje de prueba desde tu portfolio
   - Deberías recibir el email en `santi.jrs.sg@gmail.com`

2. **Revisa los logs:**
   - En Vercel → Deployments → Click en el deployment
   - Ve a "Functions" → `/api/contact`
   - Revisa los logs por errores

3. **Si hay errores:**
   - Verifica que las variables estén escritas correctamente (sin espacios)
   - Verifica que estén en los 3 ambientes (Production, Preview, Development)
   - Verifica que la API key de Resend sea válida

## Troubleshooting

**Error: "RESEND_API_KEY is not defined"**

- Verifica que la variable esté agregada en Vercel
- Verifica que esté en el ambiente correcto (Production)
- Haz un redeploy después de agregar la variable

**Emails van a spam:**

- Normal con el dominio por defecto de Resend
- Marca como "No es spam" en Gmail
- Considera verificar un dominio en Resend para mejor deliverabilidad

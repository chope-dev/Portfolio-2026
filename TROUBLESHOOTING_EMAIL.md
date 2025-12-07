# Troubleshooting: Emails no llegan desde Vercel

## Checklist de Verificación

### 1. Verificar Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. **Settings** → **Environment Variables**
3. Verifica que tengas estas variables configuradas:

   ✅ **RESEND_API_KEY**
   - Valor: `re_dUeo4EBH_CK6GggP6wYHXvC5fndKY1RyR`
   - Debe estar en: Production, Preview, Development

   ✅ **CONTACT_EMAIL**
   - Valor: `santi.jrs.sg@gmail.com`
   - Debe estar en: Production, Preview, Development

4. **IMPORTANTE:** Después de agregar/modificar variables, haz un **Redeploy**

### 2. Verificar Logs en Vercel

1. Ve a **Deployments** en Vercel
2. Click en el último deployment
3. Ve a la pestaña **Functions**
4. Busca `/api/contact`
5. Click en "View Function Logs"
6. Revisa si hay errores

**Errores comunes:**

- `RESEND_API_KEY is not defined` → Variable no configurada
- `401 Unauthorized` → API key inválida
- `400 Bad Request` → Problema con el formato del email

### 3. Probar la API directamente

Puedes probar la API desde la consola del navegador o con curl:

```bash
curl -X POST https://tu-dominio.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "message": "Mensaje de prueba"
  }'
```

O desde la consola del navegador en tu sitio:

```javascript
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    message: 'Mensaje de prueba',
  }),
})
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error)
```

### 4. Verificar que el código esté deployado

1. Ve a **Deployments** en Vercel
2. Verifica que el último deployment tenga el código actualizado
3. Si no, haz un nuevo deploy desde GitHub

### 5. Verificar la API Key de Resend

1. Ve a [resend.com/api-keys](https://resend.com/api-keys)
2. Verifica que la API key `re_dUeo4EBH_CK6GggP6wYHXvC5fndKY1RyR` esté activa
3. Verifica que no haya límites alcanzados

### 6. Verificar CORS y permisos

El código actual no tiene restricciones de CORS, pero verifica que:

- El formulario esté haciendo POST a `/api/contact`
- No haya errores en la consola del navegador

## Soluciones Rápidas

### Solución 1: Redeploy después de agregar variables

```bash
# En Vercel Dashboard:
# Deployments → 3 puntos del último deployment → Redeploy
```

### Solución 2: Verificar formato de variables

Asegúrate de que las variables NO tengan:

- Espacios al inicio o final
- Comillas extras
- Saltos de línea

### Solución 3: Verificar que las variables estén en Production

Las variables deben estar marcadas para **Production**, no solo Preview o Development.

## Debug en el código

Si quieres agregar más logging, puedes modificar `app/api/contact/route.ts` para ver qué está pasando:

```typescript
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL)
```

Pero recuerda que estos logs solo se ven en Vercel Functions Logs.

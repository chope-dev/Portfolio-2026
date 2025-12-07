import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // Enviar email usando la API de Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'santi.jrs.sg@gmail.com'

    // Debug logging (solo en desarrollo o para troubleshooting)
    console.log('🔍 Debug Contact API:')
    console.log('- RESEND_API_KEY exists:', !!RESEND_API_KEY)
    console.log('- RESEND_API_KEY length:', RESEND_API_KEY?.length || 0)
    console.log('- CONTACT_EMAIL:', TO_EMAIL)
    console.log('- Request from:', email)

    if (!RESEND_API_KEY) {
      // Si no hay API key, usar un servicio alternativo o simplemente loguear
      console.error('❌ RESEND_API_KEY no configurada en variables de entorno')
      console.log('📧 Email recibido (sin API key configurada):')
      console.log('De:', name, `<${email}>`)
      console.log('Mensaje:', message)

      // En producción, deberías configurar RESEND_API_KEY
      return NextResponse.json(
        {
          success: false,
          error:
            'Configuración de email no disponible. Por favor contacta directamente.',
          message: 'Mensaje recibido. Te contactaremos pronto.',
          note: 'Email API no configurada - revisa los logs del servidor',
        },
        { status: 200 }
      )
    }

    // Usar un dominio verificado si está disponible, sino usar el dominio de Resend
    const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'
    const FROM_NAME = process.env.FROM_NAME || 'Portfolio Contact'

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        replyTo: email,
        subject: `Nuevo mensaje de contacto - ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #ffffff; border: 3px solid #000000; padding: 30px;">
              <h1 style="color: #000000; border-bottom: 4px solid #000000; padding-bottom: 15px; margin-top: 0; font-size: 24px;">
                Nuevo mensaje de contacto
              </h1>
              
              <div style="margin-top: 25px;">
                <p style="margin: 10px 0;"><strong style="color: #000000;">Nombre:</strong> <span style="color: #333;">${name}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #000000;">Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #000000;">Fecha:</strong> <span style="color: #333;">${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}</span></p>
              </div>
              
              <div style="margin-top: 25px;">
                <h2 style="color: #000000; font-size: 18px; margin-bottom: 10px;">Mensaje:</h2>
                <div style="background: #f5f5f5; padding: 20px; border-left: 4px solid #000000; margin-top: 10px; white-space: pre-wrap; font-size: 14px; line-height: 1.8;">
${message.replace(/\n/g, '\n')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #000000; font-size: 12px; color: #666;">
                <p>Este mensaje fue enviado desde el formulario de contacto del portfolio.</p>
                <p>Puedes responder directamente a este email para contactar a ${name}.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
NUEVO MENSAJE DE CONTACTO
=========================

Nombre: ${name}
Email: ${email}
Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}

MENSAJE:
--------
${message}

---
Este mensaje fue enviado desde el formulario de contacto del portfolio.
Puedes responder directamente a este email para contactar a ${name}.
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('❌ Error al enviar email con Resend:')
      console.error('- Status:', response.status)
      console.error('- Error:', JSON.stringify(error, null, 2))
      console.error('- API Key usado:', RESEND_API_KEY.substring(0, 10) + '...')

      return NextResponse.json(
        {
          error: 'Error al enviar el email',
          details: error.message || 'Error desconocido',
          status: response.status,
        },
        { status: 500 }
      )
    }

    const data = await response.json()
    console.log('✅ Email enviado exitosamente:', data.id || 'OK')

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Por favor, preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: 'moacirdavidag@gmail.com',
        subject: `[Portfólio Contato] ${subject || 'Nova mensagem de contato'}`,
        text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e1f29;">
            <h2 style="color: #bd93f9;">Nova Mensagem do Portfólio</h2>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Assunto:</strong> ${subject || 'Sem assunto'}</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      });
    } else {
      console.log('Nodemailer SMTP não configurado completamente. Log da mensagem:', { name, email, subject, message });
    }

    return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error: any) {
      console.error('Erro ao enviar mensagem:', error);
      return NextResponse.json(
        { error: `Erro ao enviar e-mail: ${error.message || 'Falha de conexão SMTP'}` },
        { status: 500 }
      );
    }
}

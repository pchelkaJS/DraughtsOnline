import { sendEmail } from "./sendEmail";

async function sendVerification(email: string, token: string) {
    const link = `${process.env.CLIENT_URL}/verify/${token}`
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirm Your Email</title>
    <style>
        /* Поддержка темной темы */
        @media (prefers-color-scheme: dark) {
            .email-bg { background-color: #0f172a !important; }
            .card { background-color: #1e293b !important; border-color: #334155 !important; }
            .title { color: #f8fafc !important; }
            .text { color: #94a3b8 !important; }
            .footer { color: #64748b !important; }
            .fallback-box { background-color: #0f172a !important; border-color: #334155 !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" class="email-bg">

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                
                <!-- Главная карточка письма -->
                <table role="presentation" width="100%" style="max-width: 520px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);" class="card" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <td style="padding: 40px 32px; text-align: center;">
                            
                            <!-- Иконка/Логотип -->
                            <div style="font-size: 48px; margin-bottom: 24px; line-height: 1;">🚀</div>
                            
                            <!-- Заголовок -->
                            <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: #0f172a;" class="title">
                                Confirm your email address
                            </h1>
                            
                            <!-- Текст -->
                            <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 24px; color: #475569; text-align: left;" class="text">
                                Hi there!<br><br>
                                Thanks for signing up. To complete your registration and activate your account, please verify your email address by clicking the button below:
                            </p>
                            
                            <!-- Кнопка -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #2563eb;">
                                        <a href="${link}" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 12px;">
                                            Verify Email Address
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Разделитель -->
                            <hr style="margin: 32px 0; border: 0; border-top: 1px solid #e2e8f0;" class="card">
                            
                            <!-- Запасная ссылка -->
                            <p style="margin: 0 0 8px 0; font-size: 13px; line-height: 20px; color: #64748b; text-align: left;" class="footer">
                                If the button doesn't work, copy and paste this URL into your browser:
                            </p>
                            
                            <div style="padding: 12px; background-color: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; text-align: left; word-break: break-all;" class="fallback-box">
                                <a href="${link}" target="_blank" style="font-size: 13px; color: #2563eb; text-decoration: none;">
                                    ${link}
                                </a>
                            </div>
                            
                        </td>
                    </tr>
                </table>
                
                <!-- Подвал -->
                <table role="presentation" width="100%" style="max-width: 520px;" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                        <td style="padding: 24px 0 0 0; text-align: center; font-size: 12px; color: #94a3b8;" class="footer">
                            This link will expire in 24 hours.<br>
                            If you did not create an account, no further action is required.
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>
`


    return await sendEmail({
        from: 'DraughtsOnline',
        to: email,
        subject: 'Email verification',
        html
    })
}

export { sendVerification }
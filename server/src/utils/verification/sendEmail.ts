import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_APP_PASS
    }
})

interface IOptions {
    from?: string
    to: string
    subject: string
    html: string
}

async function sendEmail(options: IOptions) {
    return await transporter.sendMail({...options, from: options.from ?? process.env.NODEMAILER_EMAIL})
}

export { sendEmail }
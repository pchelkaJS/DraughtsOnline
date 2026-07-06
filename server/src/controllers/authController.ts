import { User } from '../models/user.model'
import validator from 'validator'
import { generateTokens } from '../utils/tokens/generateTokens'
import { sendVerification } from '../utils/verification/sendVerification'
import type { Request, Response } from 'express'

class Auth {
    static async register(req: Request, res: Response) {
        const errors = {
            name: 'The name must contain only letters and numbers and be at least 3 characters long.',
            email: 'Invalid email.',
            password: 'Password isn`t strong.',
            match: 'The passwords don`t match'
        }
        const currentErrors: {[key: string]: string} = {}
        const { name, email, password, confirmPassword } = req.body
        const isValidEmail = validator.isEmail(email)
        if (!isValidEmail) {
            currentErrors.email = errors.email
        }
        const isValidName = validator.isLength(name, { min: 3, max: 32 }) && validator.isAlphanumeric(name)
        if (!isValidName) {
            currentErrors.name = errors.name
        }
        const isValidPassword = validator.isStrongPassword(password)
        if (!isValidPassword) {
            currentErrors.password = errors.password
        }
        const isPasswordsMatch = password === confirmPassword
        if (!isPasswordsMatch) {
            currentErrors.match = errors.match
        }
        if (Object.values(currentErrors).length > 0) {
            return res.status(400).json(currentErrors)
        }
        const candidate = await User.findOne({ $or: [
            {name},
            {email}
        ] })
        if (candidate) {
            return res.status(400).json({ message: 'User already exists' })
        }
        const verificationToken = crypto.randomUUID()
        const user = new User({ name, email, password, verificationToken })
        await sendVerification(email, verificationToken)
        const { accessToken, refreshToken } = generateTokens(user._id.toString())
        user.refreshToken = refreshToken
        await user.save()
        res.cookie('accessToken', accessToken, {
            maxAge: 15 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        })
        res.cookie('refreshToken', refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        })
        return res.status(201).json({ message: `Registration successful. Check your email ${email}` })
    }
    static async login(req: Request, res: Response) {
        const errors = {
            name: 'The name must contain only letters and numbers and be at least 3 characters long.',
            email: 'Invalid email.',
            password: 'Password isn`t strong.',
            match: 'The passwords don`t match'
        }
        const currentErrors: {[key: string]: string} = {}
        const { nameOrEmail, password } = req.body
        const isEmail = validator.isEmail(nameOrEmail)
        const isName = validator.isLength(nameOrEmail, { min: 3, max: 32 }) && validator.isAlphanumeric(nameOrEmail)

    }
}
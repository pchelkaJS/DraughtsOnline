import jwt from 'jsonwebtoken'

function generateTokens(id: string) {
    const accessToken = jwt.sign({ id }, process.env.ACCESS_SECRET as string, {
        expiresIn: process.env.ACCESS_EXPIRES_IN as any
    })
    const refreshToken = jwt.sign({ id }, process.env.REFRESH_SECRET as string, {
        expiresIn: process.env.REFRESH_EXPIRES_IN as any
    })
    return { accessToken, refreshToken }
}
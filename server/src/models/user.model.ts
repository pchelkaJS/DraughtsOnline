import mongoose from "mongoose"
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dRating: {
        type: Number,
        required: true,
        default: 0
    },
    pRating: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function() {
    if (!this.isModified('password')) {
        return
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
userSchema.methods.comparePassword = async function(password: string) {
    return await bcrypt.compare(password, this.password)
}

type IUser = mongoose.InferSchemaType<typeof userSchema>

export type { IUser }
export const User = mongoose.model<IUser>('users', userSchema)
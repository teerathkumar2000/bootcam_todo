
import mongoose from 'mongoose'
export interface Todo extends mongoose.Document {
    tittle: string
    descraption: string,
    addtype: boolean
}
export const UserSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    descraption: {
        type: String,
        required: true
    },
    addtype: {
        type: Boolean,
        default: false
    }
})

const Users = mongoose.model('users', UserSchema)

module.exports = Users;

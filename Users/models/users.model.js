import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
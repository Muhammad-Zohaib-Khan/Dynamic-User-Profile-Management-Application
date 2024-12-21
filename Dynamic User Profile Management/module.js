import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/internship");

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    image: String
});

const User = mongoose.model('user', UserSchema);
export default User;
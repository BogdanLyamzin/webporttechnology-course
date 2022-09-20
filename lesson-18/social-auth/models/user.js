import mongoose from "mongoose";

const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
        default: "",
    }
}, {versionKey: false, timestamps: true});

const User = model("user", userSchema);

export default User;

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    Login: {
        type: String,
        require: true,
        unique: true
    },
    Pass: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    Faculty: {
        type: String,
        require: true
    },
    Age: {
        type: String,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    listHobby: {
        type: Array,
        default: [],
        require: true
    },
    About: {
        type: String,
        require: true
    },
    UsersWhoLikeU: {
        type: Array,
        default: [],
        require: true
    },
    UsersSkipedLikeU: {
        type: Array,
        default: [],
        require: true
    },
    ImgUrl: {
        type: String,
        require: true
    }
})

export default mongoose.model("Users", UserSchema)
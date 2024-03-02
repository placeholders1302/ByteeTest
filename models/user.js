const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDBschema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email_id: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        reuqired: true,
    },
    tags: {
        type: [String]
    },
    description: {
        type: String,
        maxLength: 200,
        required: true,
    },
    rating: {
        type: Number
    },
    image: {
        type: String,
        //default value set kar rhe hai
        default: "https://i.pinimg.com/564x/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg",
        set:  (v) => v === "" ? "https://i.pinimg.com/564x/c0/c2/16/c0c216b3743c6cb9fd67ab7df6b2c330.jpg": v,
    }
});

const User = mongoose.model("User", userDBschema);
module.exports = User;



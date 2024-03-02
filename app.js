const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user.js");
const path = require("path");

//apna mongo url save karo
const MONGO_URL = "mongodb://127.0.0.1:27017/byteeDB";

main()
  .then(() => {
    console.log("Connected to DB");
  })
   .catch((err) => console.log(err));


async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("views", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//INDEXING:
app.get("/users", async (req, res) => {
    const allUsers = await User.find({});
    res.render("./users/index.ejs", {allUsers});
});

// Sign-up Route
app.post("/users/signup", async (req, res) => {
    try {
        const { username, email_id, password, photourl } = req.body;

        const existingUser = await User.findOne({ email_id });
        if (existingUser) {
            return res.status(400).send("Email already exists");
        }

        const newUser = new User({ username, email_id, password, image: photourl });

        await newUser.save();``

        res.status(201).send("User created successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error"); 
    }
});


//basic request
app.get("/", (req, res) => {
    res.send("Hi, i'm root");
});

//host server to 8080
app.listen(8080, () => {
    console.log("Server is listening to 8080");
});

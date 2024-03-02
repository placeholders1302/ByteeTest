const mongoose = require("mongoose");
const initdata = require("../init/data.js")
const User = require("../models/user.js");

//apna mongo url save karo
const MONGO_URL = "mongodb://127.0.0.1:27017/byteeDB";


main()
  .then(() => {
    console.log("Connected to DB");
  })
   .catch((err) => {
    console.log(err)
   });

   
async function main() {
    // yaha pe database ka address dalo //
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await User.deleteMany({});
    await User.insertMany(initdata.data);
    console.log("data was initialized");
};

initDB();


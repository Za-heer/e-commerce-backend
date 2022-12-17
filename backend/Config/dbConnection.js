const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://ZaheerKhan:zaheer1234@cluster0.gbk9mdu.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((res) => {
        console.log("connected");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;

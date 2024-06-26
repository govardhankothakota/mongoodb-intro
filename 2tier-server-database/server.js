const mongoose = require("mongoose");

let connectToMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://govardhank:govardhank@brnstudent.z5qymfc.mongodb.net/?retryWrites=true&w=majority&appName=brnstudent"
    );
    console.log(`Successfully connected to MDB`);
  } catch (err) {
    console.log(`Unable to connect to MDB`);
  }
};

connectToMDB();

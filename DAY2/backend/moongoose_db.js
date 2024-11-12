const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/skill_dev"; // MongoDB connection URI

// schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a User model based on the schema
const User = mongoose.model("User", userSchema);

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    //  multiple user  array
    const users = [
      { name: "Rahul", age: 25 },
      { name: "Hulla", age: 34 },
    ];

    // Save users  insertMany
    await User.insertMany(users);
    console.log("Users saved:", users);

    // Find all users in the collection
    const foundUsers = await User.find({});
    console.log("Found users:", foundUsers);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
  }
}

// Run the main function and catch any errors
main().catch(console.error);

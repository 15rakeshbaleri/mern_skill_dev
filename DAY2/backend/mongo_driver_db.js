const { MongoClient } = require("mongodb"); //check wether mogodb added

const uri = "mongodb://localhost:27017/skill_dev"; // connecting local db

//connection mongoose is used insted of mongodb driver

async function main() {
  const client = new MongoClient(uri);

  try {
    await client.connect(); // Connect to MongoDB
    console.log("connected to MongoDB");
    const database = client.db("skill_dev"); //  database
    const collection = database.collection("trainer"); //collection
    const result = await collection.insertOne({
      name: "rakesh baleri",
      age: 12,
    });
    const document = await collection.find({}).toArray();
    console.log("document", document);
  } finally {
    await client.close(); // Close the connection
  }
}

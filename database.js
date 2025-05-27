const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://krunal:hY1W2PpaghR2lxYV@namstenode.i9hyhjt.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User"); 

  // the following code examples can be pasted here...
  
  const filteredDocs = await collection.find({}).toArray();
  console.log("Found documents filtered by=>", filteredDocs);
   const count = await collection.countDocuments({})
   console.log("count of documets",count)

   const result = await collection.find({firstName:"Riya"}).toArray()
   console.log("Searched Data =>",result)
  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

const {MongoClient} = require("mongodb")
const url=  "mongodb+srv://krunal:hY1W2PpaghR2lxYV@namstenode.i9hyhjt.mongodb.net/";

const client = new MongoClient(url)


const dbName = "HelloWorld"

async function main() {
    await client.connect()
    console.log("connected to server")


    const db = client.db(dbName);
  const collection = db.collection('User');

  const userData = {
   firstName:"Karan",
   lastName:"Aujla",
   city : "Mumbai",
   "phone no":8857986566  
}
  // insert a document 
//   const insertResult = await collection.insertMany([userData]);
// console.log('Inserted documents =>', insertResult);
    
const updateResult = await collection.updateOne({name:"Vidhya" }, { $set: { name: "Dipak" } });
console.log('Updated documents =>', updateResult);
//show all the document
const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
  return 'done.'
}

//update the document 


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
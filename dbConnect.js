//mongoDb connection
const MongoClient = require("mongodb").MongoClient;
const uri ="mongodb+srv://user1:pass1@cluster0.2kjjmyt.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err, db) => {
    // projectCollection = client.db().collection("project");
    if (!err) {
      console.log("MongoDB Connected");
    } else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  });
  module.exports=client;
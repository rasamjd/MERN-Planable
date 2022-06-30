import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import router from "./app.router.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use(router);

const uri = process.env.ATLAS_URI;

mongoose.connect(uri)
.then(()=>{
    console.log("Connected to the Database.");
})
.catch(err => {
    console.log(err);
});
app.listen(port, () => console.log(`Listeninig on port: ${port}`))

//const MongoClient = mongodb.MongoClient

//const ServerApiVersion = mongodb.ServerApiVersion

/*const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});
*/

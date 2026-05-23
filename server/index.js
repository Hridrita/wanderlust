const { MongoClient, ServerApiVersion } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;


const express = require('express');
const app = express();

const PORT = process.env.PORT;

const cors = require("cors");
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();

    const db = client.db("wanderlust");

    const destionationCollection = db.collection("destionations");

    app.get('/destination', async(req,res) =>{
      const result = await destionationCollection.find().toArray();
      res.json(result);
    })

    app.post('/destination', async(req, res)=>{
      const destionationData = req.body;
      console.log(destionationData);
      const result = await destionationCollection.insertOne(destionationData);

      res.json(result);
    })
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res) =>{
    res.send("server is running fine!")
})


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
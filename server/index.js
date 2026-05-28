const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;

const express = require('express');
const app = express();

const PORT = process.env.PORT;

const cors = require("cors");
const { createRemoteJWKSet, jwtVerify } = require('jose-cjs');
app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const JWKS = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/api/auth/jwks`)
)

const verifyToken = async(req,res,next) =>{
  const authHeader = req?.headers.authorization

  if (!authHeader) {
    console.log("No authorization header found!");
    return res.status(401).json({ message: "No token provided from authHeader" });
  }
  console.log("Received Token:", authHeader);

  const token = authHeader.split(" ")[1];
  if(!token){
    return res.status(401).json({ message: "No token from token" });
  }

  try{
      const { payload } = await jwtVerify(token, JWKS)
  console.log(payload);
  next()
  } catch(error) {
    return res.status(403).json({ message: "forbidden"});
  }

};



async function run() {
  try {
    
    // await client.connect();     //deploy er time e comment krbo

    const db = client.db("wanderlust");
    const bookingCollection = db.collection("bookings");

    const destionationCollection = db.collection("destionations");

    app.get('/featured', async(req,res)=>{
      const result = await destionationCollection.find().limit(3).toArray()
      res.json(result)
    })

    app.get('/destination', async(req,res) =>{
      const result = await destionationCollection.find().toArray();
      res.json(result);
    });

    app.post('/destination', async(req, res)=>{
      const destionationData = req.body;
      console.log(destionationData);
      const result = await destionationCollection.insertOne(destionationData);

      res.json(result);
    });

    app.get('/destination/:id', verifyToken, async(req,res)=>{
      const {id} = req.params;

      const result = await destionationCollection.findOne({_id: new ObjectId(id)})
      res.json(result);
    });

    app.patch('/destination/:id', async(req,res)=>{
      const {id} = req.params
      const updatedData = req.body
      console.log(updatedData);
      const result = await destionationCollection.updateOne({_id: new ObjectId(id)},{$set: updatedData}
    )
    res.json(result);
    });

    

    app.delete('/destination/:id',async(req,res)=>{
      const {id} = req.params
      const result = await destionationCollection.deleteOne({_id: new ObjectId(id)})
      res.json(result)
    });

    app.post('/booking', verifyToken, async(req,res)=>{
      const bookingData = req.body;
      const result = await bookingCollection.insertOne(bookingData);

      res.json(result);
    });

    app.get('/booking/:userId',verifyToken, async(req,res)=>{
      const {userId} = req.params

      const result = await bookingCollection.find({userId: userId}).toArray();
      res.json(result);
    });

    app.delete('/booking/:bookingId', verifyToken, async(req,res)=>{
      const {bookingId} = req.params;
      const result = await bookingCollection.deleteOne({_id:new ObjectId(bookingId)})
      res.json(result);
    })




    
    // await client.db("admin").command({ ping: 1 }); //deploy er time e comment krbo
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
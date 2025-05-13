const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient,ServerApiVersion} = require("mongodb");
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// user: simpleDBUser
// pass: A7JxMMhuVkBbeVeX

const uri = "mongodb+srv://simpleDBUser:A7JxMMhuVkBbeVeX@cluster0.61690px.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You seccessfully connected to MongoDB!");
    }
    finally {
        
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Hello Crud server!");
});

app.listen(port, () => {
    console.log(`simple crud server running on, ${port}`);
})
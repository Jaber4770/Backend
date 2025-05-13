const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient,ServerApiVersion, ObjectId} = require("mongodb");
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

        const database = client.db("userdb");
        const usersCollection = database.collection("users");


        app.get('/users', async(req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })


        app.post('/users', async(req, res) => {
            console.log("data in the server: ", req.body);
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        app.delete(`/users/:id`, async(req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result);
        })


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
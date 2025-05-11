const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is running.");
})

const users = [
    {
        id: 1,
        name: 'sabana',
        email: 'sabana@gmail.com'
    },
    {
        id: 2,
        name: 'shabnur',
        email: 'shabnur@gmail.com'
    },
    {
        id: 3,
        name: 'sabila',
        email: 'sabila@gmail.com'
    },
    {
        id: 4,
        name: 'joshim',
        email: 'joshim@gmail.com'
    },
];

app.post('/users', (req, res) => {
    console.log("trying to create a new user.");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

const userinfo = [
    {
        id: 1,
        name: "jack", 
        phone: 23432
    },
    {
        id: 2,
        name: "Joe", 
        phone: 23434532
    }
]

app.post('/userinfo', (req, res) => {
    console.log("getting user info from server.");
    const userInfo = req.body;
    userInfo.id = userinfo.length + 1;
    userinfo.push(userInfo);
    res.send(userInfo);
})

app.get("/userinfo", (req, res) => {
    res.send(userinfo);
})



app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log('done',port);
})
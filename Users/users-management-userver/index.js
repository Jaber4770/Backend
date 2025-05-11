const express = require('express');
const app = express();
const cors = require('cors');
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

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log('done',port);
})
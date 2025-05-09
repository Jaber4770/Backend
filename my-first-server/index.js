const express = require('express')
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello from my frist ever server');
});

app.get('/data', (req, res) => {
    res.send('more data comming soon');
})

app.get('/iamhappy', (req, res) => {
    res.send("i am so happy today.");
})

app.listen(port, () => {
    console.log("port connected successfully.", port);
})

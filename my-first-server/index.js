const express = require('express')
const phones = require('./phone.json')
const app = express();
const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello from my frist ever server');
});

app.get('/data', (req, res) => {
    res.send('more data comming soon');
})

app.get('/phones', (req, res) => {

    res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const matched = phones.find(phone => phone.id === id) || {};
    // res.send(`got it id ${id}`);
    res.send(matched);
})


app.get('/iamhappy', (req, res) => {
    res.send(`i am so happy today. karon ajk first din jokhn ami nije server bananor code likhlam. ei dintar jonno ami sei 2019 shal theke wait kore achi. kokhn shikhbo. alhamdulillah. `);
})

app.listen(port, () => {
    console.log("port connected successfully.", port);
})

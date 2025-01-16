const express = require('express');
const app = express();
const port = 4000;
const data = require('./dataSet.json');
app.use(express.static(__dirname + '/public'));
const axios = require('axios');

app.get('/catFact', (req, res) => {
    axios.get('https://catfact.ninja/fact?max_length=140', {
        header: {

        }
    })
        .then(function (fact) {
            console.log(fact.data)

            res.send(JSON.stringify(fact.data))
        })
        .catch(function (error) {
            console.log('error');
        })
        .finally(function () {

        });

})

app.get('/', (req, res) => {
    res.send("hello this is the main page btw")
})

app.get('/hala', (req, res) => {
    res.sendFile(__dirname + '/public/test.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
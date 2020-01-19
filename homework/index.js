const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const connectionString ='Postgres://postgres:pspwnik@localhost:5432/homework';

const client = new Client({
    connectionString: connectionString
});

client.connect().then((callback) => console.log('Im connected to DB', callback));

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


app.get('/', async (req, res) => {
    console.log(req);
    client.query('SELECT * FROM debts WHERE debt_sum > 150', await function (err, result) {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows)
    })})

app.get('/persons', async (req, res) => {
    console.log(req.query)
    let map = req.query.table;
    let options = req.query.options;
    client.query(`SELECT * FROM ${map} ${options ? 'WHERE' : ''} ${options}`, await function (err, result) {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows)
    })

})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


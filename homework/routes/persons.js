const express = require('express');

const router = express.Router();

const { Client } = require('pg');

const connectionString ='Postgres://postgres:pspwnik@localhost:5432/homework';

const client = new Client({
    connectionString: connectionString
});
router.get('/', async (req, res) => {

    client.query('SELECT * FROM persons', await function (err, result) {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows)
    })
});

module.exports = router;
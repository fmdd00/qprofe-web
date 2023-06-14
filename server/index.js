const express = require("express")
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '654321',
    database: 'qprofedb',
})

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO user (cod, name, password) VALUES ('20180593', 'Francisco Diaz', '1234'); "
    db.query(sqlInsert, (err, result) => {
        res.send("hello francisco")
    })
    
})

app.listen(3001, () => {
    console.log("running on port 3001")
})
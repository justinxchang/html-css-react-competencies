require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')


const app = express();
const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log(`Connected to the db`)
})

app.use(express.json()) 

app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`)) 
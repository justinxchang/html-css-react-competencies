require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
const ctrl = require('./controller')

app.use(express.json());
const { SERVER_PORT, SECRET, CONNECTION_STRING } = process.env;

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUnitialized: false
  })
);

app.use(express.static(`${__dirname}/../build`));

app.use(function (req, res, next) {
    console.log('Middleware')
    next()
  })

let check = (req, res, next) => {
    if(req.body.name === ''){
        res.status(200).send({mes: 'please fill out all forms'})
    } else {
        next()
    }
}

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log(`Connected to the db`)
})

app.use(express.json()) 

app.get('/api/messages', ctrl.read)
app.post('/api/messagess', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

app.get('https://swapi.co/api/people/1', ctrl.star)

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`)) 
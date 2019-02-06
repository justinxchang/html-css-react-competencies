require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();
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
    console.log('Time:', Date.now())
    next()
  })
  
let check = (req, res, next) => {
    if(req.body.name === ''){
        res.status(200).send({mes: 'please fill out all forms'})
    } else {
        next()
    }
}
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Connected to the db");
});
app.post("/register", check, async (req, res) => {
  let { name, pass } = req.body;
  let db = req.app.get("db");
  let found = await db.find_user([name]);
  if (found[0]) {
    res.sendStatus(401);
  }
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(pass, salt);
  let create = await db.create_user([name, hash]);
  req.session.user = {
    id: create[0].user_id,
    name: create[0].name
  };
  console.log(req.session.user)
  res.sendStatus(200);
});
app.post("/login", async (req, res) => {
    let { name, pass } = req.body;
    let db = req.app.get("db");
    let foundUser = await db.find_user([name]);
    if (foundUser[0]) {
      let result = bcrypt.compareSync(pass, foundUser[0].pass);
      if (result) {
        req.session.user = {
          id: foundUser[0].user_id,
          name: foundUser[0].name
        };
        res.status(200).send(foundUser[0]);
      } else {
          res.sendStatus(401)
      }
    }
});
app.put('/new-name', async (req,res) => {
    const {name} = req.body
    let db = req.app.get('db')
    let response = await db.update_name([name])
    res.status(200).send(response)
})
app.listen(SERVER_PORT, () => `welcome to port ${SERVER_PORT}`);


-----------------------------------------------------------------------

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })
  
  // top level , runs that first


-----------------------------------------------------------------------

let check = (req, res, next) => {
    if(req.body.name === ''){
        res.status(200).send({mes: 'please fill out all forms'})
    } else {
        next()
    }
}
// middleware, plug in anywhere that checks a body


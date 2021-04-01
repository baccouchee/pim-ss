const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

require('./database/mongodb');


app.set('port', process.env.port || 3000 )

// middleware
app.use(cors())
app.use(express.json())
//rutas 
app.use(require('./routes/route.book'))
app.use(require('./routes/form.routes'))

app.listen(app.get('port'), () => {
   console.log(`listening localhost:${app.get('port')}`)
})


app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./model");
const Role = db.role;



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

// set port, listen for requests
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


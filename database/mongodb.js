const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connecter a la base de donnée port :3000'))

const { Schema, model } = require("mongoose")

const BookSchema = Schema({
  nom: String,
  prenom: String,
  adresse: String,
  mdp: String,
})

module.exports = model('Book', BookSchema)

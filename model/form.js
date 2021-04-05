const mongoose = require("mongoose");

const Form = mongoose.model(
  "Form",
  new mongoose.Schema({
    nom: String,
    description: String,
    user: String,
    quest: {
      question: String,
      id: String
    },
  },
  { strict: false })
);

module.exports = Form;
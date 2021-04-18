const { Schema, model } = require("mongoose");

const FormsSchema = new Schema(
  {
    nom: String,
    description: String,
    user: String,
    quest: {
      question: String,
    },
    img: String,
      
  },
  { strict: false }
);

const Form = model("form", FormsSchema);

module.exports = Form;
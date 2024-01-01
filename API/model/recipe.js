const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const recipeSchema = new mongoose.Schema({
  title_recipe: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  photo_recipe: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    default: uuidv4,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);

// model
const RecipeModel = require("../../model/recipe");

const findAll = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findById = async (req, res) => {
  let recipe;
  try {
    recipe = await RecipeModel.findById(req.params.id);
    if (recipe !== null) {
      return res.json(recipe);
    } else {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { findAll, findById };

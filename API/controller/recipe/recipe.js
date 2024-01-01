// model
const RecipeModel = require("../../model/recipe");

const creatingData = async (req, res) => {
  const recipe = new RecipeModel({
    title_recipe: req.body.title_recipe,
    ingredients: req.body.ingredients,
    photo_recipe: req.body.photo_recipe,
  });
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { creatingData };

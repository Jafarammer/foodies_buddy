// model
const UserModel = require("../../model/user");

// create
const creatingData = async (req, res) => {
  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    password: req.body.password,
    photo_profile: req.body.photo_profile,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { creatingData };

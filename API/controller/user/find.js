// model
const UserModel = require("../../model/user");

// find all
const findAll = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const findById = async (req, res) => {
  let users;
  try {
    users = await UserModel.findById(req.params.id);
    if (users !== null) {
      return res.json(users);
    } else {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { findAll, findById };

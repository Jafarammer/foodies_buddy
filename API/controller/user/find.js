// model
const UserModel = require("../../model/user/index");

// find all
const findAll = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { findAll };

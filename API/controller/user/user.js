const user = (req, res) => {
  try {
    res.send({
      message: "user GET controller",
    });
  } catch (error) {
    res.status(400).send("Error");
  }
};

module.exports = { user };

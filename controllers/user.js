const db = require("./../database/database.js");
const bcrypt = require("bcryptjs");

exports.register_user = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(13);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const data = await db.user.create({
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      message: `user created with username ${req.body.username}`,
    });
  } catch (error) {
    res.send(error);
  }
};

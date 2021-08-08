const db = require("./../database/database.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const ipswd = req.body.password;
    const data = await db.user.findAll({
      raw: true,
      where: { email: req.body.email },
    });
    //   console.log(data);
    if (data.length == 1) {
      var correct_password = await bcryptjs.compare(ipswd, data[0].password);
      console.log(correct_password);
      if (correct_password) {
        const token = jwt.sign(
          {
            username: data[0].username,
          },
          "nice_secret",
          { expiresIn: "4h" }
        );
        var decoded_values = jwt.decode(token, "nice_secret");
        return res.json({
          token,
          decoded_values,
        });
      } else {
        return res.send({
          message: "incorrect email or password",
        });
      }
    }
  } catch (error) {
    return res.send({
      message: "incorrect email or password",
      err,
    });
  }
};

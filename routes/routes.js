const app = require("express")();
const user = require("./../controllers/user");

app.route("/create_user").post(user.register_user);

module.exports = app;

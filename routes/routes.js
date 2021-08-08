const app = require("express")();
const user = require("./../controllers/user");
var aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const db = require("./../database/database.js");
const login = require("./../controllers/login");

aws.config.update({
  secretAccessKey: "oD2YHbXlE4X8pEdxMinNzSkD+NnsSiaq838/6Smc",
  accessKeyId: "AKIAUFJNEO36M5YL5WD5",
  region: "ap-south-1",
});

var s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "internathoncp",
    key: function (req, file, cb) {
      //console.log(file);
      cb(null, file.originalname);
    },
  }),
});
const uploadFiles = upload.array("file", 5);

app.route("/login").post(login.login);
app.route("/create_user").post(user.register_user);
app.route("/file_upload").post(uploadFiles, user.uploadFiles);

module.exports = app;

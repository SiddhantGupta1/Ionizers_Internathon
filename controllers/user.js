const db = require("./../database/database.js");
const bcrypt = require("bcryptjs");
const data_uploaded = require("../models/data_uploaded.js");
const { v4: uuidv4 } = require("uuid");

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
  } catch (error) {}
};

exports.uploadFiles = async (req, res) => {
  try {
    var name = req.body.file_name;
    name = name.replace(/ /g, "+");
    //   console.log(req.body);
    const loc = `https://internathoncp.s3.ap-south-1.amazonaws.com/${name}`;
    const data = await db.data_uploaded.create({
      uploaded_by: req.body.uploaded_by,
      location_name: req.body.location_name,
      geotags: req.body.geotags,
      description: req.body.description,
      file_id: uuidv4(),
      file_location: loc,
      state: req.body.state,
      city: req.body.city,
      country: req.body.country,
    });

    res.status(201).json({
      status: "success",
      message: `file uploaded by user ${req.body.uploaded_by}`,
      data,
    });
  } catch (error) {
    res.send(error);
  }
};

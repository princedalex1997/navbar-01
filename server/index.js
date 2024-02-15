const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");
require("dotenv").config();
const app = express();

const port = process.env.REACT_API_API_PORT || 8000;
const api = process.env.REACT_API_KEY_API;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(passport.initialize());
app.use(express.json());

const User = require("./modules/user");

app.listen(port, () => {
  console.log(`Server Running ${port}`);
});

mongoose
  .connect(api)
  .then(() => {
    console.log("DataBase Connected ");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const NewUser = new User({ name, email, password });
  NewUser.save()
    .then(() => {
      res.status(200).json({ message: "Registeration will Success" });
      console.log("User ID is Created");
    })
    .catch((err) => {
      res.status(404).json({ message: "Not added" });
      console.log(err);
    });
});
app.get("/users", (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(404).json({ message: "Not Founded" });
      console.log(err);
    });
});
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
      })
      .catch((err) => {
        console.log('Error occurred while deleting user:', err);
        res.status(500).json({ message: "Internal server error" });
      });
  });
  

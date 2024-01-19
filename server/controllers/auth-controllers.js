const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("hello");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const data = req.body;
    // data destructure....
    const { username, email, phone, password } = data;
    // nosql query (user is present or not)
    const userExist = await User.findOne({ email });
    if (userExist) {
      return (function () {
        res.status(400).json({ msg: "email already exist" });
        console.log("email is already registered");
      })();
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    console.log(data);
    res.status(201).json({
      message: "registration Succesfull!",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(400).json("internel server error");
    // console.log(error);
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(401).json("internel server error");
    console.log(error);
  }
};

// retrive user loggedin data

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userdata });
    // res.status(200).json({ msg: "hi user" });
  } catch (error) {
    console.log("error from the router", error);
  }
};

module.exports = { home, register, login, user };

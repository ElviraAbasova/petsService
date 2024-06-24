const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Incorrect password",
        });
      }
      const token = jwt.sign(
        { userId: user._id, email: user.email, username: user.username },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
  
  const register = async (req, res) => {
    try {
      const { name, surname, username, email, password, date, gender, balance } = req.body;
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "User already exists",
        });
      }
      const hash = await bcrypt.hash(password, 12);
      const newUser = new User({
        name,
        surname,
        username,
        email,
        password: hash,
        date,
        gender,
        balance,
      });
      await newUser.save();
      const token = jwt.sign(
        { email: newUser.email },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };
const getAllData = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server is not work",
    });
  }
};
const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.find({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Id is not found",
    });
  }
};
const patchDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Id is not found",
    });
  }
};
const putDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findOneAndReplace({ _id: id }, req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Id is not found",
    });
  }
};

const postData = async (req, res) => {
  try {
    const newUser = new User(req.body);
    newUser.save();
    res.status(201).json({
      success: true,
      message: "posted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server is not work",
    });
  }
};

const deleteDataById = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findOneAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "deleted",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Id is not found",
    });
  }
};

module.exports = {
  getAllData,
  getDataById,
  postData,
  deleteDataById,
  patchDataById,
  putDataById,
  login,
  register
};

const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");



const login = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;
    const user = await User.findOne({ 
      $or: [
        { email: usernameOrEmail },
        { username: usernameOrEmail }
      ]
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    if (password !== user.password) {
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
    const existingUser = await User.findOne({ 
      $or: [
        { email: email },
        { username: username }
      ]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User({
      name,
      surname,
      username,
      email,
      password,
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
const resetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found. Please check your email address.",
      });
    }


    res.status(200).json({
      success: true,
      message: "Email found. Password reset instructions sent to your email.",
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
const updatePassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Please check your email address.",
      });
    }

    user.password = newPassword; 
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully.",
    });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
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
  register,
  resetPassword,
  updatePassword
};

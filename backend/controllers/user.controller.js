import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!",
        status: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User is already exist with this email!",
        status: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashPassword,
      phoneNumber,
      role,
    });

    return res.status(200).json({
      message: "Account created successfully.",
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing!",
        status: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password!",
        status: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password!",
        status: false,
      });
    }

    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exit with current role",
        status: "false",
      });
    }

    const tokenData = {
      userId: user._id,
    };
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    const token = await jwt.sign(tokenData, process.env.SCERET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "string",
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        status: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully!",
      status: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    // cloudinary idhar aayega

    let skillsArray;
    if (skills) {
       skillsArray = skills.split(",");
    }
    const userId = req.id; //middleware authentication
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User is not found! ",
        status: false,
      });
    }
    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "Profile updated successfully!",
      status: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

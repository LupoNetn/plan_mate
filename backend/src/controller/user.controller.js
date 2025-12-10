import { db } from "../db/db.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";
import { signAccessToken, signRefreshToken } from "../utils/utils.js";

export const signUpUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "User created successfully",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error("Error signing up user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All Fields are required",
      });
    }

    const userExists = await db.user.findUnique({
      where: { email },
    });
    const match = await bcrypt.compare(password, userExists.password);

    if (!userExists || !match) {
      return res.status(400).json({
        message: "Invalid Credentials Provided",
      });
    }

    const accessToken = signAccessToken({ id: userExists.id });
    const refreshToken = signRefreshToken({ id: userExists.id });

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    res.status(200).json({
      message: "User logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log("something went wrong:", error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const refreshUserToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    

    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }
   
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET,
      async (err, payload) => {
        if (err) {
          console.log(err)
          return res.status(403).json({ message: "Invalid refresh token" });
        }

        const userId = payload.id;

        const newAccessToken = signAccessToken({ id: userId });

        return res.json({
          accessToken: newAccessToken,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const validateUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User no longer exists" });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

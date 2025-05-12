import User from "../models/user.model";
import { errorHandler } from "../utils.js/error";
import bcryptjs from "bcryptjs"
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const isValidUser = await User.findOne({ email });
  if (isValidUser) {
    return next(errorHandler(404, "User Already Exist."));
  }

  const hashPassword = bcryptjs.hashSync(password , 10)
  const newUser = new User({
    username,
    email,
    password : hashPassword,
  })

  try {
    await newUser.save()
    res.status(201).json({
        succes: true,
        message: "User Creacted successfully!"
    })
  } catch (error) {
    next(error)
  }
};

const VolunteerUser = require("../Models/VolunteerUserModel");
const { createSecretToken } = require("../util/Token");
const bcrypt = require("bcrypt");

/**
 * Handles the volunteer signup process. It creates a new volunteer user if the email does not already exist in the database.
 * A unique token is generated for the user, which is then sent as a cookie.
 *
 * @param {Object} req - The request object containing the email, password, username, and createdAt from the body.
 * @param {Object} res - The response object used to send back the created user data or an error message.
 * @param {Function} next - The next middleware function in the stack.
 */
module.exports.VolunteerSignup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await VolunteerUser.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await VolunteerUser.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

/**
 * Manages the volunteer login process. It checks if the email and password match an existing user in the database.
 * If authentication is successful, a unique token is generated for the user and sent as a cookie.
 *
 * @param {Object} req - The request object containing the email and password from the body.
 * @param {Object} res - The response object used to send back a success message or an error message.
 * @param {Function} next - The next middleware function in the stack.
 */
module.exports.VolunteerLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await VolunteerUser.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
};
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * Mongoose schema for VolunteerUser.
 * Includes fields for email, username, password, and account creation date.
 */
const volunteerUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

volunteerUserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("VolunteerUser", volunteerUserSchema);
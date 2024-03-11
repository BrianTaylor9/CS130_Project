const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**
 * Defines the schema for NGO users within the database using Mongoose.
 * It includes fields for email, username, and password, each with required validation.
 * The `email` field is unique to prevent duplicate entries.
 * The `createdAt` field automatically records the time when a new document is created.
 * Additionally, a pre-save hook is used to hash the password using bcrypt before storing it in the database,
 * enhancing security by preventing the storage of plain-text passwords.
 */
const ngoUserSchema = new mongoose.Schema({
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

ngoUserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("NGOUser", ngoUserSchema);
const VolunteerUser = require("../Models/VolunteerUserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * Middleware for verifying the volunteer's JWT token.
 * This function checks for the presence of a token in cookies and verifies it.
 * If verification is successful and the user is found in the database, it responds with the user's username.
 * Otherwise, it returns a status indicating the failure of the token verification.
 *
 * @param {Object} req - The request object from Express, containing cookies with JWT token.
 * @param {Object} res - The response object from Express, used to return the verification status and user information.
 */
module.exports.volunteerVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await VolunteerUser.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}
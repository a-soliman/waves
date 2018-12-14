/*
    @function      admin
    @desc           Validates if current user is an admin (through checking the role)
*/

let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send("Only admins are allowed to interact at this level.");
  }
  next();
};

module.exports = admin;

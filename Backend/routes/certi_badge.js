var express = require("express");
var router = express.Router();
const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
  notAdmin,
} = require("../controllers/auth");
const { getUserById, getUser } = require("../controllers/user");
const {
  addCertiToUser,
  download_certi,
  show_badge,
} = require("../controllers/certi_badge");

// for admin
router.param("userId", getUserById);
router.post(
  "/addCerti/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  addCertiToUser
);

// for student
// for certi download
router.get(
  "/downloadCerti/:userId",
  isSignedIn,
  isAuthenticated,
  notAdmin,
  download_certi
);
// for show badge
router.get(
  "/showbadge/:userId",
  isSignedIn,
  isAuthenticated,
  notAdmin,
  show_badge
);
module.exports = router;

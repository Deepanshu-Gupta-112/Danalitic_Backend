var express = require("express");
var router = express.Router();

const { getUserById, getUser, updateUser } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

// router.get("/users",getAllUsers);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

module.exports = router;

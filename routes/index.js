"use strict";

let express = require("express"),
    path = require("path"),
    router = express.Router(),
    api = require("./api"),
    middleware = require(path.resolve('.')+"/routes/middleware/user");
   

// Login Route Details
router.post("/login", api.user.user.login);

// Logout Route Details
router.post("/logout",api.user.user.logout);

//create Profile 

router.post("/createProfile",middleware.createProfile,api.user.user.createProfile);

router.post("/updateProfile", api.user.user.updateProfile);



module.exports = router;
const express = require("express");
const router = express.Router();
const logout = require("../controllers/logout");
const loggedIn = require("../controllers/loggedIn");

router.get("/", loggedIn, (req, res) => {
    if(req.user) { //if user is logged in send there to index.ejs
        res.render("index", {status:"loggedIn", user:req.user});
    }
    else {  //if not logged in just send them to historiahub Homepage
        res.sendFile("home.html", { root: "./public/" }); 
    }
   
})
router.get("/register", (req, res) => {
    res.sendFile("register.html", {root:"./public/"});
})
router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./public/"});
})

router.get("/logout", logout)
module.exports = router;
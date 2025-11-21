const express = require("express");
const router = express.Router();
const Confession = require("../models/confessionModel");

// Home page
router.get("/", (req, res) => {
    res.render("home"); // renders home.ejs
});

// Submit confession
router.post("/submit", async (req, res) => {
    try {
        const message = req.body.message;
        if (!message || message.trim() === "") {
            return res.send("Message cannot be empty!");
        }

        await Confession.create({ message });
        res.redirect("/confessions");
    } catch (err) {
        console.error("Error saving confession:", err);
        res.status(500).send("Server error. Please try again later.");
    }
});

// View all confessions
router.get("/confessions", async (req, res) => {
    try {
        const confessions = await Confession.find({}); // no callback
        res.render("confessions", { confessions });
    } catch (err) {
        console.error("Error fetching confessions:", err);
        res.status(500).send("Server error. Please try again later.");
    }
});

module.exports = router;
